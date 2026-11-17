import Link from "next/link";
import styles from "./Privacy.module.css";

export default function PrivacyPolicy() {
  return (
    <>
      {/* Hero */}
      <section className={styles.privacyHero}>
        <div className="container">
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              Privacy <span className={styles.titleGradient}>Policy</span>
            </h1>
            <p className={styles.heroText}>
              Informativa sul trattamento dei dati personali ai sensi dell&apos;art. 13 del Regolamento UE 2016/679 (GDPR).
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className={`${styles.privacyContentSection} section-padding`}>
        <div className="container">
          <div className={styles.privacyCard}>
            <div className={styles.policyArticle}>
              <h2>1. Titolare del Trattamento</h2>
              <p>
                Il Titolare del trattamento dei dati personali è <strong>MB Events S.r.l.</strong>, con sede legale in Via Comacchio 592, 44124 Ferrara (FE), Italia.<br />
                Email di contatto per la privacy: <a href="mailto:info@mbevents.eu">info@mbevents.eu</a>
              </p>
            </div>

            <div className={styles.policyArticle}>
              <h2>2. Tipologia di Dati Raccolti</h2>
              <p>
                Tra i Dati Personali raccolti da questo Sito Web, in modo autonomo o tramite terze parti, ci sono:
              </p>
              <ul>
                <li><strong>Dati di contatto e identificativi:</strong> Nome, cognome, indirizzo email, numero di telefono forniti volontariamente dall&apos;utente tramite il form nella pagina Contatti.</li>
                <li><strong>Dati di navigazione:</strong> Indirizzi IP, orari delle richieste, metodo utilizzato nel sottoporre la richiesta al server, ed altri parametri relativi al sistema operativo ed all&apos;ambiente informatico dell&apos;utente.</li>
              </ul>
            </div>

            <div className={styles.policyArticle}>
              <h2>3. Finalità del Trattamento</h2>
              <p>I Dati dell&apos;Utente sono raccolti per consentire al Titolare di fornire i propri Servizi, ed in particolare per:</p>
              <ul>
                <li>Rispondere alle richieste di informazione e di preventivo inviate dall&apos;utente;</li>
                <li>Fornire i servizi di Service Audio, Luci, Video e Allestimenti concordati;</li>
                <li>Adempiere agli obblighi di legge, contabili e fiscali;</li>
                <li>Garantire la sicurezza informatica ed il corretto funzionamento del Sito Web.</li>
              </ul>
            </div>

            <div className={styles.policyArticle}>
              <h2>4. Base Giuridica del Trattamento</h2>
              <p>
                Il Titolare tratta Dati Personali relativi all&apos;Utente in caso sussista una delle seguenti condizioni:
              </p>
              <ul>
                <li>L&apos;Utente ha prestato il consenso per una o più finalità specifiche;</li>
                <li>Il trattamento è necessario all&apos;esecuzione di un contratto con l&apos;Utente e/o all&apos;esecuzione di misure precontrattuali;</li>
                <li>Il trattamento è necessario per adempiere un obbligo legale al quale è soggetto il Titolare.</li>
              </ul>
            </div>

            <div className={styles.policyArticle}>
              <h2>5. Modalità e Luogo del Trattamento</h2>
              <p>
                I Dati sono trattati presso le sedi operative del Titolare ed in ogni altro luogo in cui le parti coinvolte nel trattamento siano localizzate. Il trattamento viene effettuato mediante strumenti informatici e/o telematici, con modalità organizzative e con logiche strettamente correlate alle finalità indicate.
              </p>
            </div>

            <div className={styles.policyArticle}>
              <h2>6. Periodo di Conservazione</h2>
              <p>
                I Dati sono trattati e conservati per il tempo richiesto dalle finalità per le quali sono stati raccolti. I dati inviati tramite form di contatto vengono conservati per il tempo necessario a evadere la richiesta e per le successive esigenze amministrative o di legge.
              </p>
            </div>

            <div className={styles.policyArticle}>
              <h2>7. Diritti dell&apos;Interessato</h2>
              <p>
                Gli Utenti possono esercitare determinati diritti con riferimento ai Dati trattati dal Titolare. In particolare, l&apos;Utente ha il diritto di:
              </p>
              <ul>
                <li>Revocare il consenso in ogni momento;</li>
                <li>Opporsi al trattamento dei propri Dati;</li>
                <li>Accedere ai propri Dati ed ottenerne una copia;</li>
                <li>Verificare e chiedere la rettificazione dei Dati;</li>
                <li>Ottenere la limitazione del trattamento o la cancellazione dei propri Dati (diritto all&apos;oblio);</li>
                <li>Proporre reclamo all&apos;autorità di controllo della protezione dei dati personali pertinente.</li>
              </ul>
              <p>
                Per esercitare i propri diritti, gli Utenti possono indirizzare una richiesta agli estremi di contatto del Titolare indicati in questo documento.
              </p>
            </div>

            <div className={styles.policyArticle}>
              <h2>8. Collegamenti a Cookie Policy</h2>
              <p>
                Per informazioni dettagliate sull&apos;utilizzo dei cookie e tecnologie di tracciamento, si prega di consultare la nostra <Link href="/cookie-policy">Cookie Policy</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
