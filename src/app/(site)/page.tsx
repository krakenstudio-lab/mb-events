import Image from "next/image";
import Link from "next/link";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBackground}>
          <Image
            src="/images/original/home-hero.jpg"
            alt="Stage Lights Background"
            fill
            priority
            quality={90}
            className={styles.heroBgImage}
          />
          <div className={styles.heroOverlay} />
        </div>

        <div className={`${styles.heroContainer} container`}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              <span className={styles.heroTitleGradient}>Service Audio, Luci e Video</span>
              <span className={styles.heroTitleWhite}>per Eventi di Successo</span>
            </h1>
            <p className={styles.heroDesc}>
              Noleggio e installazione di impianti audio, luci, video e strutture per<br className={styles.desktopBr} /> concerti, fiere, convention ed eventi privati in tutta Italia.
            </p>
            <div className={styles.heroButtons}>
              <Link href="/contatti" className={styles.btnPrimary}>
                Richiedi Preventivo &rarr;
              </Link>
              <Link href="/portfolio" className={styles.btnSecondary}>
                Scopri i Nostri Lavori
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Section */}
      <section className={`${styles.partnerSection} section-padding`}>
        <div className="container">
          <div className={styles.partnerGrid}>
            <div className={styles.partnerContent}>
              <h2 className={styles.partnerTitle}>
                Il Tuo Partner per <span className={styles.partnerTitleGradient}>Eventi di Successo</span>
              </h2>
              <p className={styles.partnerDesc}>
                Da oltre 15 anni, MB Events è sinonimo di eccellenza nel service tecnico per eventi. Il nostro team di professionisti combina passione, esperienza e tecnologia all&apos;avanguardia per trasformare ogni progetto in un&apos;esperienza immersiva che lascia il segno.
              </p>
              <p className={styles.partnerDesc}>
                Che si tratti di un grande concerto, un evento corporate esclusivo o un matrimonio da sogno, siamo il partner affidabile che ogni organizzatore cerca.
              </p>
              <Link href="/l-azienda" className={styles.partnerBtn}>
                Scopri di più su di noi &rarr;
              </Link>
            </div>
            <div className={styles.partnerImageWrapper}>
              <div className={styles.partnerImageInner}>
                <Image
                  src="/images/original/il-tuo-partner.jpg"
                  alt="Stage lights concert setup"
                  width={680}
                  height={425}
                  className={styles.partnerImage}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className={`${styles.servicesSection} section-padding`}>
        <div className="container">
          <div className={styles.servicesTitleArea}>
            <h2 className={styles.servicesTitle}>
              I Nostri <span className={styles.servicesTitleGradient}>Servizi</span>
            </h2>
            <p className={styles.servicesSubtitle}>
              Soluzioni complete per ogni esigenza tecnica, dalla piccola conferenza al grande festival.
            </p>
          </div>

          <div className={styles.servicesGrid}>
            {/* Audio */}
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 18v-6a9 9 0 0 1 18 0v6"></path><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path></svg>
              </div>
              <h3 className={styles.serviceCardTitle}>Service Audio</h3>
              <p className={styles.serviceCardDesc}>
                Sistemi audio professionali per concerti, conferenze e qualsiasi tipologia di evento.
              </p>
            </div>

            {/* Luci */}
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .6 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path><line x1="9" y1="18" x2="15" y2="18"></line><line x1="10" y1="22" x2="14" y2="22"></line></svg>
              </div>
              <h3 className={styles.serviceCardTitle}>Service Luci</h3>
              <p className={styles.serviceCardDesc}>
                Design illuminotecnico scenico e architetturale per creare atmosfere uniche.
              </p>
            </div>

            {/* Video */}
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line><polygon points="10 8 15 11 10 14 10 8"></polygon></svg>
              </div>
              <h3 className={styles.serviceCardTitle}>Service Video</h3>
              <p className={styles.serviceCardDesc}>
                Ledwall, proiezioni, regia video e streaming per eventi di ogni dimensione.
              </p>
            </div>

            {/* Strutture */}
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="3" x2="9" y2="21"></line><line x1="15" y1="3" x2="15" y2="21"></line><line x1="3" y1="9" x2="21" y2="9"></line><line x1="3" y1="15" x2="21" y2="15"></line></svg>
              </div>
              <h3 className={styles.serviceCardTitle}>Strutture</h3>
              <p className={styles.serviceCardDesc}>
                Palchi, rigging, americane e allestimenti tecnici personalizzati.
              </p>
            </div>
          </div>

          <div className={styles.servicesAction}>
            <Link href="/servizi" className={styles.servicesBtn}>
              Esplora tutti i servizi &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Ultimi Lavori */}
      <section className={`${styles.worksSection} section-padding`}>
        <div className="container">
          <div className={styles.worksTitleArea}>
            <h2 className={styles.worksTitle}>
              Ultimi <span className={styles.worksTitleGradient}>Lavori</span>
            </h2>
            <p className={styles.worksSubtitle}>
              Una selezione dei nostri progetti più recenti e significativi.
            </p>
          </div>

          <div className={styles.worksGrid}>
            {/* Project 1 */}
            <Link href="/portfolio" className={styles.workCard}>
              <Image
                src="/images/stage_lights.png"
                alt="Festival Musicale Milano"
                fill
                className={styles.workImage}
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className={styles.workCardOverlay}>
                <span className={styles.workCategory}>Concerti</span>
                <h3 className={styles.workTitle}>Festival Musicale Milano</h3>
              </div>
            </Link>

            {/* Project 2 */}
            <Link href="/portfolio" className={styles.workCard}>
              <Image
                src="/images/corporate_event.png"
                alt="Conferenza Tech Summit"
                fill
                className={styles.workImage}
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className={styles.workCardOverlay}>
                <span className={styles.workCategory}>Corporate</span>
                <h3 className={styles.workTitle}>Conferenza Tech Summit</h3>
              </div>
            </Link>

            {/* Project 3 */}
            <Link href="/portfolio" className={styles.workCard}>
              <Image
                src="/images/wedding_venue.png"
                alt="Matrimonio Villa Borghese"
                fill
                className={styles.workImage}
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className={styles.workCardOverlay}>
                <span className={styles.workCategory}>Matrimoni</span>
                <h3 className={styles.workTitle}>Matrimonio Villa Borghese</h3>
              </div>
            </Link>
          </div>

          <div className={styles.worksAction}>
            <Link href="/portfolio" className={styles.portfolioBtn}>
              Vedi tutto il Portfolio &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className={`${styles.ctaSection} section-padding`}>
        <div className={`${styles.ctaContainer} container`}>
          <h2 className={styles.ctaTitle}>
            Pronto a Creare il Tuo<br />
            <span className={styles.ctaTitleGradient}>Evento Perfetto?</span>
          </h2>
          <p className={styles.ctaDesc}>
            Contattaci oggi per una consulenza gratuita. Il nostro team è pronto a<br className={styles.desktopBr} /> trasformare la tua visione in realtà.
          </p>
          <Link href="/contatti" className={styles.ctaBtn}>
            Richiedi un Preventivo Gratuito &rarr;
          </Link>
        </div>
      </section>
    </>
  );
}
