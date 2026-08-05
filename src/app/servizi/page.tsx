import Image from "next/image";
import Link from "next/link";
import styles from "./Servizi.module.css";

export default function Servizi() {
  const checkIcon = (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
  );

  return (
    <>
      {/* Hero */}
      <section className={styles.serviziHero}>
        <div className={`${styles.heroContainer} container`}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              I Nostri <span>Servizi</span>
            </h1>
            <p className={styles.heroText}>
              Soluzioni tecniche complete per ogni tipologia di evento. Dalla progettazione alla realizzazione, il nostro team di esperti è al tuo fianco per creare esperienze straordinarie.
            </p>
          </div>
        </div>
      </section>

      {/* Service 1: Audio */}
      <section id="audio" className={`${styles.serviceBlock} section-padding`}>
        <div className="container">
          <div className={styles.serviceGrid}>
            <div className={styles.serviceContent}>
              <span className={styles.serviceTagline}>Suono professionale per ogni occasione</span>
              <h2 className={styles.serviceTitle}>Service Audio</h2>
              <p className={styles.serviceDesc}>
                Offriamo sistemi audio all'avanguardia per concerti, festival, conferenze ed eventi aziendali. Dalla piccola sala congressi al grande palco outdoor, garantiamo sempre la massima qualità sonora con impianti dimensionali ad hoc.
              </p>
              
              <div className={styles.featuresGrid}>
                <div className={styles.featureItem}>{checkIcon} <span>Sistemi line array di ultima generazione</span></div>
                <div className={styles.featureItem}>{checkIcon} <span>Mixer digitali professionali</span></div>
                <div className={styles.featureItem}>{checkIcon} <span>Microfonia wireless multicanale</span></div>
                <div className={styles.featureItem}>{checkIcon} <span>Monitoraggio personalizzato per artisti</span></div>
                <div className={styles.featureItem}>{checkIcon} <span>Tecnici audio dedicati</span></div>
                <div className={styles.featureItem}>{checkIcon} <span>Sopralluoghi e progettazione acustica</span></div>
              </div>

              <div className={styles.appsWrapper}>
                <h3 className={styles.appsTitle}>Applicazioni</h3>
                <div className={styles.appsList}>
                  <span className={styles.appTag}>Concerti e Festival</span>
                  <span className={styles.appTag}>Conferenze e Convention</span>
                  <span className={styles.appTag}>Eventi Aziendali</span>
                  <span className={styles.appTag}>Matrimoni ed Eventi Privati</span>
                </div>
              </div>

              <Link href="/contatti" className="btn btn-primary" style={{ alignSelf: "flex-start" }}>
                Richiedi Informazioni &rarr;
              </Link>
            </div>
            <div className={styles.serviceImageWrapper}>
              <Image
                src="/images/audio_console.png"
                alt="Professional audio console mixing"
                width={600}
                height={400}
                className={styles.serviceImage}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service 2: Luci */}
      <section id="luci" className={`${styles.serviceBlock} section-padding`}>
        <div className="container">
          <div className={styles.serviceGrid}>
            <div className={styles.serviceContent}>
              <span className={styles.serviceTagline}>Illuminazione che crea emozioni</span>
              <h2 className={styles.serviceTitle}>Service Luci</h2>
              <p className={styles.serviceDesc}>
                Il nostro servizio di illuminazione professionale trasforma qualsiasi ambiente in uno spazio suggestivo. Dalle teste mobili agli effetti LED, passando per l'illuminazione architetturale, creiamo atmosfere che amplificano l'impatto emotivo di ogni evento.
              </p>
              
              <div className={styles.featuresGrid}>
                <div className={styles.featureItem}>{checkIcon} <span>Teste mobili e scanner di ultima generazione</span></div>
                <div className={styles.featureItem}>{checkIcon} <span>Illuminazione LED RGB e RGBW</span></div>
                <div className={styles.featureItem}>{checkIcon} <span>Laser show professionali</span></div>
                <div className={styles.featureItem}>{checkIcon} <span>Illuminazione architetturale</span></div>
                <div className={styles.featureItem}>{checkIcon} <span>Programmazione luci personalizzata</span></div>
                <div className={styles.featureItem}>{checkIcon} <span>Light design su misura</span></div>
              </div>

              <div className={styles.appsWrapper}>
                <h3 className={styles.appsTitle}>Applicazioni</h3>
                <div className={styles.appsList}>
                  <span className={styles.appTag}>Show e Concerti</span>
                  <span className={styles.appTag}>Eventi Fashion</span>
                  <span className={styles.appTag}>Illuminazione Architetturale</span>
                  <span className={styles.appTag}>Matrimoni ed Eventi Esclusivi</span>
                </div>
              </div>

              <Link href="/contatti" className="btn btn-primary" style={{ alignSelf: "flex-start" }}>
                Richiedi Informazioni &rarr;
              </Link>
            </div>
            <div className={styles.serviceImageWrapper}>
              <Image
                src="/images/stage_lights.png"
                alt="Concert stage lights installation"
                width={600}
                height={400}
                className={styles.serviceImage}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service 3: Video */}
      <section id="video" className={`${styles.serviceBlock} section-padding`}>
        <div className="container">
          <div className={styles.serviceGrid}>
            <div className={styles.serviceContent}>
              <span className={styles.serviceTagline}>Visual technology di impatto</span>
              <h2 className={styles.serviceTitle}>Service Video</h2>
              <p className={styles.serviceDesc}>
                Dalla regia multicamera ai ledwall di grande formato, offriamo soluzioni video complete per ogni tipologia di evento. Trasmettiamo in streaming, creiamo contenuti video in real-time e gestiamo proiezioni mapping che lasciano senza fiato.
              </p>
              
              <div className={styles.featuresGrid}>
                <div className={styles.featureItem}>{checkIcon} <span>Ledwall indoor e outdoor</span></div>
                <div className={styles.featureItem}>{checkIcon} <span>Proiezioni mapping 3D</span></div>
                <div className={styles.featureItem}>{checkIcon} <span>Regia video multicamera</span></div>
                <div className={styles.featureItem}>{checkIcon} <span>Streaming live e recording</span></div>
                <div className={styles.featureItem}>{checkIcon} <span>Contenuti video personalizzati</span></div>
                <div className={styles.featureItem}>{checkIcon} <span>Schermi LED curvi e creativi</span></div>
              </div>

              <div className={styles.appsWrapper}>
                <h3 className={styles.appsTitle}>Applicazioni</h3>
                <div className={styles.appsList}>
                  <span className={styles.appTag}>Conferenze e Presentazioni</span>
                  <span className={styles.appTag}>Festival e Concerti</span>
                  <span className={styles.appTag}>Fiere ed Esposizioni</span>
                  <span className={styles.appTag}>Eventi Corporate</span>
                </div>
              </div>

              <Link href="/contatti" className="btn btn-primary" style={{ alignSelf: "flex-start" }}>
                Richiedi Informazioni &rarr;
              </Link>
            </div>
            <div className={styles.serviceImageWrapper}>
              <Image
                src="/images/corporate_event.png"
                alt="Ledwall corporate display setup"
                width={600}
                height={400}
                className={styles.serviceImage}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service 4: Strutture */}
      <section id="strutture" className={`${styles.serviceBlock} section-padding`}>
        <div className="container">
          <div className={styles.serviceGrid}>
            <div className={styles.serviceContent}>
              <span className={styles.serviceTagline}>La base solida per ogni evento</span>
              <h2 className={styles.serviceTitle}>Strutture e Allestimenti</h2>
              <p className={styles.serviceDesc}>
                Progettiamo e realizziamo strutture su misura per ogni tipologia di evento. Dai palchi modulari alle americane per appendere luci e audio, garantiamo sicurezza certificata e soluzioni creative per qualsiasi esigenza tecnica e logistica.
              </p>
              
              <div className={styles.featuresGrid}>
                <div className={styles.featureItem}>{checkIcon} <span>Palchi modulari di ogni dimensione</span></div>
                <div className={styles.featureItem}>{checkIcon} <span>Ground support e rigging</span></div>
                <div className={styles.featureItem}>{checkIcon} <span>Americane e truss systems</span></div>
                <div className={styles.featureItem}>{checkIcon} <span>Torri layher e ponteggi</span></div>
                <div className={styles.featureItem}>{checkIcon} <span>Coperture e tensostrutture</span></div>
                <div className={styles.featureItem}>{checkIcon} <span>Progettazione strutturale certificata</span></div>
              </div>

              <div className={styles.appsWrapper}>
                <h3 className={styles.appsTitle}>Applicazioni</h3>
                <div className={styles.appsList}>
                  <span className={styles.appTag}>Concerti e Festival Outdoor</span>
                  <span className={styles.appTag}>Fiere ed Eventi Corporate</span>
                  <span className={styles.appTag}>Allestimenti Teatrali</span>
                  <span className={styles.appTag}>Eventi Sportivi</span>
                </div>
              </div>

              <Link href="/contatti" className="btn btn-primary" style={{ alignSelf: "flex-start" }}>
                Richiedi Informazioni &rarr;
              </Link>
            </div>
            <div className={styles.serviceImageWrapper}>
              <Image
                src="/images/truss_structure.png"
                alt="Stage truss structure layout"
                width={600}
                height={400}
                className={styles.serviceImage}
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`${styles.customSolutionSection} section-padding`}>
        <div className={`${styles.customSolutionContainer} container`}>
          <h2 className={styles.customTitle}>
            Hai Bisogno di Una <span className="gold">Soluzione Personalizzata</span>?
          </h2>
          <p className={styles.customDesc}>
            Ogni evento è unico. Contattaci oggi stesso per discutere le tue esigenze specifiche e ricevere una proposta tecnica e commerciale su misura per il tuo progetto.
          </p>
          <Link href="/contatti" className="btn btn-primary">
            Contattaci Ora
          </Link>
        </div>
      </section>
    </>
  );
}
