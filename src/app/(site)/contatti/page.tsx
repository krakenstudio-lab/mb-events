"use client";

import { useState } from "react";
import styles from "./Contatti.module.css";

export default function Contatti() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefono: "",
    tipoEvento: "",
    messaggio: "",
    website: "", // honeypot anti-spam: deve restare vuoto
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Impossibile inviare il messaggio.");
      }

      setSubmitted(true);
    } catch (err: unknown) {
      console.error("Submit error:", err);
      setErrorMsg((err instanceof Error && err.message) || "Si è verificato un errore durante l'invio. Riprova più tardi.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Hero */}
      <section className={styles.contattiHero}>
        <div className="container">
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              <span className={styles.titleGradient}>Contattaci</span>
            </h1>
            <p className={styles.heroText}>
              Siamo qui per trasformare la tua visione in realtà. Raccontaci il tuo progetto e riceverai un preventivo personalizzato entro 24 ore.
            </p>
          </div>
        </div>
      </section>

      {/* Main Section */}
      <section className={`${styles.mainContactSection} section-padding`}>
        <div className="container">
          <div className={styles.contactGrid}>
            
            {/* Form Column */}
            <div className={styles.formCard}>
              <h2 className={styles.formTitle}>Richiedi un Preventivo</h2>
              
              {submitted ? (
                <div style={{ textAlign: "center", padding: "2rem 0" }}>
                  <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#2bd0c6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: "1rem" }}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                  <h3 style={{ marginBottom: "1rem", fontSize: "1.5rem", color: "#ffffff" }}>Richiesta Inviata!</h3>
                  <p style={{ color: "rgba(220, 230, 240, 0.75)" }}>Grazie per averci contattato. Ti risponderemo il prima possibile.</p>
                  <button 
                    className={styles.submitBtn} 
                    style={{ marginTop: "2rem" }} 
                    onClick={() => { setSubmitted(false); setFormData({ nome: "", email: "", telefono: "", tipoEvento: "", messaggio: "", website: "" }); }}
                  >
                    Invia un&apos;altra richiesta
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  {/* Honeypot: invisibile agli utenti, i bot lo compilano */}
                  <div
                    aria-hidden="true"
                    style={{ position: "absolute", left: "-9999px", width: 1, height: 1, overflow: "hidden" }}
                  >
                    <label htmlFor="website">Non compilare questo campo</label>
                    <input
                      type="text"
                      id="website"
                      name="website"
                      tabIndex={-1}
                      autoComplete="off"
                      value={formData.website}
                      onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                    />
                  </div>
                  <div className={styles.formGroupRow}>
                    <div className={styles.formGroup}>
                      <label htmlFor="nome" className={styles.formLabel}>Nome e Cognome *</label>
                      <input
                        type="text"
                        id="nome"
                        className={styles.inputControl}
                        placeholder="Mario Rossi"
                        required
                        value={formData.nome}
                        onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="email" className={styles.formLabel}>Email *</label>
                      <input
                        type="email"
                        id="email"
                        className={styles.inputControl}
                        placeholder="mario@esempio.it"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className={styles.formGroupRow}>
                    <div className={styles.formGroup}>
                      <label htmlFor="telefono" className={styles.formLabel}>Telefono</label>
                      <input
                        type="tel"
                        id="telefono"
                        className={styles.inputControl}
                        placeholder="+39 333 123 4567"
                        value={formData.telefono}
                        onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="tipoEvento" className={styles.formLabel}>Tipo di Evento *</label>
                      <select
                        id="tipoEvento"
                        className={styles.selectControl}
                        required
                        value={formData.tipoEvento}
                        onChange={(e) => setFormData({ ...formData, tipoEvento: e.target.value })}
                      >
                        <option value="" disabled>Seleziona...</option>
                        <option value="Concerti">Concerto / Festival</option>
                        <option value="Corporate">Evento Aziendale / Fiera</option>
                        <option value="Matrimoni">Matrimonio</option>
                        <option value="Privati">Festa Privata / Gala</option>
                        <option value="Altro">Altro</option>
                      </select>
                    </div>
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="messaggio" className={styles.formLabel}>Messaggio *</label>
                    <textarea
                      id="messaggio"
                      className={styles.textareaControl}
                      placeholder="Descrivi il tuo evento: data, location, numero di partecipanti, servizi richiesti..."
                      required
                      value={formData.messaggio}
                      onChange={(e) => setFormData({ ...formData, messaggio: e.target.value })}
                    ></textarea>
                  </div>

                  {errorMsg && (
                    <div style={{ color: "#ff5555", fontSize: "0.88rem", marginBottom: "1rem", backgroundColor: "rgba(255, 85, 85, 0.1)", padding: "0.6rem 1rem", borderRadius: "6px", border: "1px solid rgba(255, 85, 85, 0.2)" }}>
                      {errorMsg}
                    </div>
                  )}

                  <button type="submit" className={styles.submitBtn} disabled={isSubmitting}>
                    {isSubmitting ? "Invio in corso..." : "Invia Richiesta"}
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                  </button>
                </form>
              )}
            </div>

            {/* Info Column */}
            <div className={styles.infoColumn}>
              <h2 className={styles.infoTitle}>Informazioni di Contatto</h2>
              
              <div className={styles.infoList}>
                {/* Address */}
                <div className={styles.infoCard}>
                  <div className={styles.infoIcon}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2bd0c6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                  </div>
                  <div className={styles.infoContent}>
                    <span className={styles.infoLabel}>Indirizzo</span>
                    <span className={styles.infoValue}>Via Comacchio, 592<br />44124 Ferrara, Italia</span>
                  </div>
                </div>

                {/* Phone */}
                <div className={styles.infoCard}>
                  <div className={styles.infoIcon}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2bd0c6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  </div>
                  <div className={styles.infoContent}>
                    <span className={styles.infoLabel}>Telefono</span>
                    <a href="tel:+393459734844" className={styles.infoValue}>+39 345 973 4844</a>
                  </div>
                </div>

                {/* Email */}
                <div className={styles.infoCard}>
                  <div className={styles.infoIcon}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2bd0c6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                  </div>
                  <div className={styles.infoContent}>
                    <span className={styles.infoLabel}>Email</span>
                    <a href="mailto:info@mbevents.eu" className={styles.infoValue}>info@mbevents.eu</a>
                  </div>
                </div>

                {/* Hours */}
                <div className={styles.infoCard}>
                  <div className={styles.infoIcon}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2bd0c6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                  </div>
                  <div className={styles.infoContent}>
                    <span className={styles.infoLabel}>Orari</span>
                    <span className={styles.infoValue}>Lun - Ven: 9:00 - 18:00<br />Sab: 9:00 - 13:00</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Full Width Google Maps Section */}
          <div className={styles.mapSection}>
            <div className={styles.mapCard}>
              <iframe
                title="MB Events Ferrara Location"
                src="https://maps.google.com/maps?q=Via%20Comacchio%20592%2C%2044124%20Ferrara%20FE&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className={styles.mapIframe}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
