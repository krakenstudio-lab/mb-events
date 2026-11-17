import Image from "next/image";
import styles from "./Azienda.module.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "L'Azienda",
  description: "Scopri MB Events: storia, missione e team di professionisti del service audio, luci e video per eventi con sede a Ferrara.",
  alternates: { canonical: "/l-azienda" },
  openGraph: { title: "L'Azienda | MB Events", description: "Scopri MB Events: storia, missione e team di professionisti del service audio, luci e video per eventi con sede a Ferrara.", url: "/l-azienda", siteName: "MB Events", locale: "it_IT", type: "website", images: [{ url: "/images/og-image.png", width: 1200, height: 630, alt: "MB Events - Service Audio, Luci, Video e Allestimenti" }] },
};

export default function Lazienda() {
  return (
    <>
      {/* Hero / Chi Siamo */}
      <section className={styles.aziendaHero}>
        <div className="container">
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              Chi <span className={styles.titleGradient}>Siamo</span>
            </h1>
            <p className={styles.heroText}>
              MB Events nasce dalla passione per lo spettacolo e dalla volontà di creare esperienze che lasciano il segno. Siamo un team di professionisti dedicati all&apos;eccellenza nel service tecnico per eventi.
            </p>
          </div>
        </div>
      </section>

      {/* History */}
      <section className={`${styles.historySection} section-padding`}>
        <div className="container">
          <div className={styles.historyGrid}>
            <div className={styles.historyContent}>
              <h2 className={styles.historyTitle}>
                La Nostra <span className={styles.titleGradient}>Storia</span>
              </h2>
              <p className={styles.historyText}>
                Fondata nel 2008, MB Events è nata dalla visione di un gruppo di tecnici audio-video che condividevano un sogno: trasformare gli eventi in esperienze sensoriali complete.
              </p>
              <p className={styles.historyText}>
                Partiti da un piccolo magazzino con poche attrezzature, oggi disponiamo di un parco materiali tra i più completi d&apos;Italia, con tecnologie sempre all&apos;avanguardia e un team di oltre 50 professionisti altamente qualificati.
              </p>
              <p className={styles.historyText}>
                Nel corso degli anni abbiamo avuto il privilegio di collaborare con i più grandi artisti italiani e internazionali, le principali aziende del panorama corporate e le location più esclusive per eventi privati.
              </p>
            </div>
            <div className={styles.historyImageWrapper}>
              <div className={styles.historyImageInner}>
                <Image
                  src="/images/original/azienda-storia.jpg"
                  alt="Luci da palco durante un concerto, la storia di MB Events"
                  width={680}
                  height={425}
                  className={styles.historyImage}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className={styles.statsSection}>
        <div className="container">
          <div className={styles.statsGrid}>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>15+</span>
              <span className={styles.statLabel}>Anni di esperienza</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>500+</span>
              <span className={styles.statLabel}>Eventi realizzati</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>50+</span>
              <span className={styles.statLabel}>Professionisti</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>100%</span>
              <span className={styles.statLabel}>Clienti soddisfatti</span>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className={`${styles.missionSection} section-padding`}>
        <div className="container">
          <div className={styles.missionGrid}>
            <div className={styles.missionImageWrapper}>
              <div className={styles.missionImageInner}>
                <Image
                  src="/images/original/azienda-mission.jpg"
                  alt="Struttura di un palco allestito dal team MB Events"
                  width={680}
                  height={425}
                  className={styles.missionImage}
                  priority
                />
              </div>
            </div>
            <div className={styles.missionContent}>
              <h2 className={styles.missionTitle}>
                La Nostra <span className={styles.titleGradient}>Missione</span>
              </h2>
              <p className={styles.missionText}>
                La nostra missione è semplice ma ambiziosa: creare esperienze immersive che superino le aspettative di ogni cliente. Non ci limitiamo a fornire attrezzature tecniche – progettiamo emozioni.
              </p>
              <p className={styles.missionText}>
                Crediamo che ogni evento sia unico e meriti un approccio personalizzato. Per questo ascoltiamo attentamente le esigenze di ogni cliente, studiamo ogni dettaglio e proponiamo soluzioni creative che valorizzino al massimo ogni spazio e ogni momento.
              </p>
              <p className={styles.missionText}>
                La sicurezza è il nostro principio cardine: tutto il nostro team è costantemente aggiornato sulle normative vigenti e le nostre attrezzature sono sempre certificate e sottoposte a manutenzione regolare.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className={`${styles.valuesSection} section-padding`}>
        <div className="container">
          <div className={styles.valuesTitleArea}>
            <h2 className={styles.valuesTitle}>
              I Nostri <span className={styles.titleGradient}>Valori</span>
            </h2>
            <p className={styles.valuesSubtitle}>
              I principi che guidano ogni nostro progetto e relazione.
            </p>
          </div>

          <div className={styles.valuesGrid}>
            {/* Value 1 */}
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
              </div>
              <h3 className={styles.valueCardTitle}>Eccellenza</h3>
              <p className={styles.valueCardDesc}>
                Ogni dettaglio conta. Dalla pianificazione all&apos;esecuzione, puntiamo sempre all&apos;eccellenza in tutto ciò che facciamo.
              </p>
            </div>

            {/* Value 2 */}
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
              </div>
              <h3 className={styles.valueCardTitle}>Affidabilità</h3>
              <p className={styles.valueCardDesc}>
                Siamo il partner su cui puoi contare. Rispettiamo le scadenze, i budget e superiamo le aspettative.
              </p>
            </div>

            {/* Value 3 */}
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
              </div>
              <h3 className={styles.valueCardTitle}>Collaborazione</h3>
              <p className={styles.valueCardDesc}>
                Lavoriamo a stretto contatto con ogni cliente per comprendere la loro visione e trasformarla in realtà.
              </p>
            </div>

            {/* Value 4 */}
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
              </div>
              <h3 className={styles.valueCardTitle}>Innovazione</h3>
              <p className={styles.valueCardDesc}>
                Investiamo costantemente in formazione e attrezzature per offrire sempre le migliori soluzioni tecnologiche.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className={`${styles.teamSection} section-padding`}>
        <div className="container">
          <div className={styles.teamTitleArea}>
            <h2 className={styles.teamTitle}>
              Il Nostro <span className={styles.titleGradient}>Team</span>
            </h2>
            <p className={styles.teamSubtitle}>
              Un gruppo di professionisti appassionati, uniti dalla voglia di creare eventi straordinari. Ogni membro del nostro team porta competenze uniche e un&apos;energia contagiosa in ogni progetto.
            </p>
          </div>

          <div className={styles.teamContainerCard}>
            <div className={styles.teamGrid}>
              <div className={styles.teamItem}>
                <h3 className={styles.teamRole}>Direzione Tecnica</h3>
                <p className={styles.teamDesc}>
                  Ingegneri e tecnici specializzati con anni di esperienza nel settore.
                </p>
              </div>
              <div className={styles.teamItem}>
                <h3 className={styles.teamRole}>Creativi</h3>
                <p className={styles.teamDesc}>
                  Light designer e visual artist che trasformano ogni spazio.
                </p>
              </div>
              <div className={styles.teamItem}>
                <h3 className={styles.teamRole}>Operatori</h3>
                <p className={styles.teamDesc}>
                  Tecnici sul campo che garantiscono esecuzione impeccabile.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
