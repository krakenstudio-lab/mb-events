import Image from "next/image";
import Link from "next/link";
import styles from "./Servizi.module.css";

export default function Servizi() {
  const checkIcon = (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2bd0c6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  );

  return (
    <>
      {/* Hero */}
      <section className={styles.serviziHero}>
        <div className="container">
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              I Nostri <span className={styles.titleGradient}>Servizi</span>
            </h1>
            <p className={styles.heroText}>
              Soluzioni tecniche complete per ogni tipologia di evento. Dalla progettazione alla realizzazione, il nostro team di esperti è al tuo fianco per creare esperienze straordinarie.
            </p>
          </div>
        </div>
      </section>

      {/* Service 1: Audio */}
      <section id="audio" className={`${styles.serviceBlock} ${styles.bgPrimary} section-padding`}>
        <div className="container">
          <div className={styles.serviceGrid}>
            <div className={styles.serviceContent}>
              <div className={styles.taglineWrapper}>
                <div className={styles.taglineIconBox}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2bd0c6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 18v-6a9 9 0 0 1 18 0v6"></path>
                    <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>
                  </svg>
                </div>
                <span className={styles.taglineText}>SUONO PROFESSIONALE PER OGNI OCCASIONE</span>
              </div>
              
              <h2 className={styles.serviceTitle}>Service Audio</h2>
              <p className={styles.serviceDesc}>
                Offriamo sistemi audio all&apos;avanguardia per concerti, festival, conferenze ed eventi aziendali. Dalla piccola sala congressi al grande palco outdoor, garantiamo sempre la massima qualità sonora con impianti dimensionati ad hoc.
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
                <h3 className={styles.appsTitle}>APPLICAZIONI</h3>
                <div className={styles.appsList}>
                  <span className={styles.appTag}>Concerti e Festival</span>
                  <span className={styles.appTag}>Conferenze e Convention</span>
                  <span className={styles.appTag}>Eventi Aziendali</span>
                  <span className={styles.appTag}>Matrimoni ed Eventi Privati</span>
                </div>
              </div>

              <Link href="/contatti" className={styles.serviceBtn}>
                Richiedi Informazioni &rarr;
              </Link>
            </div>
            <div className={styles.serviceImageWrapper}>
              <div className={styles.serviceImageInner}>
                <Image
                  src="/images/original/servizi-audio.jpg"
                  alt="Professional audio console mixing"
                  width={680}
                  height={425}
                  className={styles.serviceImage}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service 2: Luci */}
      <section id="luci" className={`${styles.serviceBlock} ${styles.bgSecondary} section-padding`}>
        <div className="container">
          <div className={styles.serviceGridAlt}>
            <div className={styles.serviceImageWrapper}>
              <div className={styles.serviceImageInner}>
                <Image
                  src="/images/original/servizi-luci.jpg"
                  alt="Concert stage lights installation"
                  width={680}
                  height={425}
                  className={styles.serviceImage}
                />
              </div>
            </div>
            <div className={styles.serviceContent}>
              <div className={styles.taglineWrapper}>
                <div className={styles.taglineIconBox}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2bd0c6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 18h6"></path>
                    <path d="M10 22h4"></path>
                    <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1.55.62 2.96 1.63 4 .76.76 1.23 1.52 1.41 2.5"></path>
                  </svg>
                </div>
                <span className={styles.taglineText}>ILLUMINAZIONE CHE CREA EMOZIONI</span>
              </div>

              <h2 className={styles.serviceTitle}>Service Luci</h2>
              <p className={styles.serviceDesc}>
                Il nostro servizio di illuminazione professionale trasforma qualsiasi ambiente in uno spazio suggestivo. Dalle teste mobili agli effetti LED, passando per l&apos;illuminazione architetturale, creiamo atmosfere uniche che amplificano l&apos;impatto emotivo di ogni evento.
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
                <h3 className={styles.appsTitle}>APPLICAZIONI</h3>
                <div className={styles.appsList}>
                  <span className={styles.appTag}>Show e Concerti</span>
                  <span className={styles.appTag}>Eventi Fashion</span>
                  <span className={styles.appTag}>Illuminazione Architetturale</span>
                  <span className={styles.appTag}>Matrimoni ed Eventi Esclusivi</span>
                </div>
              </div>

              <Link href="/contatti" className={styles.serviceBtn}>
                Richiedi Informazioni &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service 3: Video */}
      <section id="video" className={`${styles.serviceBlock} ${styles.bgPrimary} section-padding`}>
        <div className="container">
          <div className={styles.serviceGrid}>
            <div className={styles.serviceContent}>
              <div className={styles.taglineWrapper}>
                <div className={styles.taglineIconBox}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2bd0c6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="23 7 16 12 23 17 23 7"></polygon>
                    <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
                  </svg>
                </div>
                <span className={styles.taglineText}>VISUAL TECHNOLOGY DI IMPATTO</span>
              </div>

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
                <h3 className={styles.appsTitle}>APPLICAZIONI</h3>
                <div className={styles.appsList}>
                  <span className={styles.appTag}>Conferenze e Presentazioni</span>
                  <span className={styles.appTag}>Festival e Concerti</span>
                  <span className={styles.appTag}>Fiere ed Esposizioni</span>
                  <span className={styles.appTag}>Eventi Corporate</span>
                </div>
              </div>

              <Link href="/contatti" className={styles.serviceBtn}>
                Richiedi Informazioni &rarr;
              </Link>
            </div>
            <div className={styles.serviceImageWrapper}>
              <div className={styles.serviceImageInner}>
                <Image
                  src="/images/original/servizi-video.jpg"
                  alt="Ledwall corporate display setup"
                  width={680}
                  height={425}
                  className={styles.serviceImage}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service 4: Strutture */}
      <section id="strutture" className={`${styles.serviceBlock} ${styles.bgSecondary} section-padding`}>
        <div className="container">
          <div className={styles.serviceGridAlt}>
            <div className={styles.serviceImageWrapper}>
              <div className={styles.serviceImageInner}>
                <Image
                  src="/images/original/servizi-allestimenti.jpg"
                  alt="Stage truss structure layout"
                  width={680}
                  height={425}
                  className={styles.serviceImage}
                />
              </div>
            </div>
            <div className={styles.serviceContent}>
              <div className={styles.taglineWrapper}>
                <div className={styles.taglineIconBox}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2bd0c6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="3" y1="9" x2="21" y2="9"></line>
                    <line x1="3" y1="15" x2="21" y2="15"></line>
                    <line x1="9" y1="3" x2="9" y2="21"></line>
                    <line x1="15" y1="3" x2="15" y2="21"></line>
                  </svg>
                </div>
                <span className={styles.taglineText}>LA BASE SOLIDA PER OGNI EVENTO</span>
              </div>

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
                <h3 className={styles.appsTitle}>APPLICAZIONI</h3>
                <div className={styles.appsList}>
                  <span className={styles.appTag}>Concerti e Festival Outdoor</span>
                  <span className={styles.appTag}>Fiere ed Eventi Corporate</span>
                  <span className={styles.appTag}>Allestimenti Teatrali</span>
                  <span className={styles.appTag}>Eventi Sportivi</span>
                </div>
              </div>

              <Link href="/contatti" className={styles.serviceBtn}>
                Richiedi Informazioni &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`${styles.customSolutionSection} section-padding`}>
        <div className={`${styles.customSolutionContainer} container`}>
          <h2 className={styles.customTitle}>
            Hai Bisogno di Una <span className={styles.titleGradient}>Soluzione Personalizzata</span>?
          </h2>
          <p className={styles.customDesc}>
            Ogni evento è unico. Contattaci per discutere le tue esigenze specifiche e ricevere una proposta su misura.
          </p>
          <Link href="/contatti" className={styles.ctaBtn}>
            Contattaci Ora &rarr;
          </Link>
        </div>
      </section>
    </>
  );
}
