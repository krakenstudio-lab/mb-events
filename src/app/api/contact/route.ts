import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { nome, email, telefono, tipoEvento, messaggio } = body;

    if (!nome || !email || !tipoEvento || !messaggio) {
      return NextResponse.json(
        { error: "Campi obbligatori mancanti." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      console.warn("RESEND_API_KEY non configurata nelle variabili d'ambiente.");
      // In modalità sviluppo/fallback senza API Key, simula l'invio corretto per il frontend
      return NextResponse.json(
        { 
          success: true, 
          message: "Form inviato in modalità simulata (RESEND_API_KEY non ancora inserita in .env.local).",
          mocked: true
        },
        { status: 200 }
      );
    }

    const resend = new Resend(apiKey);
    const recipientEmail = process.env.CONTACT_EMAIL_TO || "info@mbevents.eu";
    const senderEmail = process.env.CONTACT_EMAIL_FROM || "MB Events <onboarding@resend.dev>";

    const data = await resend.emails.send({
      from: senderEmail,
      to: [recipientEmail],
      replyTo: email,
      subject: `Nuova richiesta di preventivo: ${tipoEvento} - ${nome}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #070d10; color: #f0f5f8; padding: 25px; border-radius: 12px; border: 1px solid #1a2d37;">
          <h2 style="color: #2bd0c6; margin-top: 0;">Nuova Richiesta di Preventivo - MB Events</h2>
          <hr style="border: 0; border-top: 1px solid #1a2d37; margin: 20px 0;" />
          
          <p><strong>Nome e Cognome:</strong> ${nome}</p>
          <p><strong>Email di contatto:</strong> <a href="mailto:${email}" style="color: #2bd0c6;">${email}</a></p>
          <p><strong>Telefono:</strong> ${telefono || "Non specificato"}</p>
          <p><strong>Tipologia Evento:</strong> <span style="background: #132128; padding: 4px 10px; border-radius: 6px; color: #f4bf39;">${tipoEvento}</span></p>
          
          <div style="margin-top: 25px; padding: 15px; background: #0c161b; border-radius: 8px; border-left: 4px solid #2bd0c6;">
            <h4 style="margin-top: 0; color: #ffffff;">Messaggio del cliente:</h4>
            <p style="white-space: pre-wrap; line-height: 1.6; color: #8da4b0; margin-bottom: 0;">${messaggio}</p>
          </div>

          <hr style="border: 0; border-top: 1px solid #1a2d37; margin: 25px 0 15px 0;" />
          <p style="font-size: 12px; color: #5b7482; text-align: center;">Questa email è stata inviata automaticamente dal form contatti di mbevents.eu</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (error: any) {
    console.error("Errore durante l'invio dell'email via Resend:", error);
    return NextResponse.json(
      { error: error?.message || "Errore interno del server durante l'invio dell'email." },
      { status: 500 }
    );
  }
}
