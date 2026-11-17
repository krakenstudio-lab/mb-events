import { NextResponse } from "next/server";
import { Resend } from "resend";

// Rate limit in memoria: max 5 richieste ogni 10 minuti per IP.
// Su Vercel (serverless) il contatore vale per singola istanza: ferma i bot
// più semplici, non è una protezione assoluta.
const RATE_WINDOW_MS = 10 * 60 * 1000;
const RATE_MAX = 5;
const hits = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < RATE_WINDOW_MS);
  if (recent.length >= RATE_MAX) {
    hits.set(ip, recent);
    return true;
  }
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 1000) {
    for (const [key, times] of hits) {
      if (times.every((t) => now - t >= RATE_WINDOW_MS)) hits.delete(key);
    }
  }
  return false;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
      request.headers.get("x-real-ip") ||
      "unknown";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Troppe richieste. Riprova tra qualche minuto." },
        { status: 429 }
      );
    }

    const body = await request.json();

    // Honeypot: il campo è nascosto agli utenti, solo i bot lo compilano.
    // Rispondiamo "ok" senza inviare nulla, così il bot non capisce.
    if (typeof body.website === "string" && body.website.trim() !== "") {
      return NextResponse.json({ success: true }, { status: 200 });
    }

    const str = (v: unknown) => (typeof v === "string" ? v.trim() : "");
    const nome = str(body.nome);
    const email = str(body.email);
    const telefono = str(body.telefono);
    const tipoEvento = str(body.tipoEvento);
    const messaggio = str(body.messaggio);

    if (!nome || !email || !tipoEvento || !messaggio) {
      return NextResponse.json(
        { error: "Campi obbligatori mancanti." },
        { status: 400 }
      );
    }

    if (!EMAIL_RE.test(email)) {
      return NextResponse.json(
        { error: "Indirizzo email non valido." },
        { status: 400 }
      );
    }

    if (
      nome.length > 100 ||
      email.length > 150 ||
      telefono.length > 40 ||
      tipoEvento.length > 100 ||
      messaggio.length > 5000
    ) {
      return NextResponse.json(
        { error: "Uno dei campi supera la lunghezza consentita." },
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
      subject: `Nuova richiesta di preventivo: ${tipoEvento} - ${nome}`.replace(/\s+/g, " "),
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #070d10; color: #f0f5f8; padding: 25px; border-radius: 12px; border: 1px solid #1a2d37;">
          <h2 style="color: #2bd0c6; margin-top: 0;">Nuova Richiesta di Preventivo - MB Events</h2>
          <hr style="border: 0; border-top: 1px solid #1a2d37; margin: 20px 0;" />
          
          <p><strong>Nome e Cognome:</strong> ${escapeHtml(nome)}</p>
          <p><strong>Email di contatto:</strong> <a href="mailto:${escapeHtml(email)}" style="color: #2bd0c6;">${escapeHtml(email)}</a></p>
          <p><strong>Telefono:</strong> ${telefono ? escapeHtml(telefono) : "Non specificato"}</p>
          <p><strong>Tipologia Evento:</strong> <span style="background: #132128; padding: 4px 10px; border-radius: 6px; color: #f4bf39;">${escapeHtml(tipoEvento)}</span></p>
          
          <div style="margin-top: 25px; padding: 15px; background: #0c161b; border-radius: 8px; border-left: 4px solid #2bd0c6;">
            <h4 style="margin-top: 0; color: #ffffff;">Messaggio del cliente:</h4>
            <p style="white-space: pre-wrap; line-height: 1.6; color: #8da4b0; margin-bottom: 0;">${escapeHtml(messaggio)}</p>
          </div>

          <hr style="border: 0; border-top: 1px solid #1a2d37; margin: 25px 0 15px 0;" />
          <p style="font-size: 12px; color: #5b7482; text-align: center;">Questa email è stata inviata automaticamente dal form contatti di mbevents.eu</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (error: unknown) {
    console.error("Errore durante l'invio dell'email via Resend:", error);
    return NextResponse.json(
      { error: "Errore interno del server durante l'invio dell'email." },
      { status: 500 }
    );
  }
}
