import Link from "next/link";
import styles from "./Cookie.module.css";

export default function CookiePolicy() {
  return (
    <>
      {/* Hero */}
      <section className={styles.cookieHero}>
        <div className="container">
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              Cookie <span className={styles.titleGradient}>Policy</span>
            </h1>
            <p className={styles.heroText}>
              Informativa estesa sull&apos;utilizzo dei cookie e delle tecnologie di tracciamento sul sito MB Events.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className={`${styles.cookieContentSection} section-padding`}>
        <div className="container">
          <div className={styles.cookieCard}>
            <div className={styles.policyArticle}>
              <h2>1. Che cosa sono i Cookie</h2>
              <p>
                I cookie sono piccoli file di testo che i siti visitati dagli utenti inviano ai loro terminali (solitamente al browser), dove vengono memorizzati per essere poi ritrasmessi agli stessi siti alla visita successiva. I cookie sono utilizzati per differenti finalità: esecuzione di autenticazioni informatiche, monitoraggio di sessioni, memorizzazione di informazioni su specifiche configurazioni riguardanti gli utenti che accedono al server, ecc.
              </p>
            </div>

            <div className={styles.policyArticle}>
              <h2>2. Tipologie di Cookie Utilizzati da questo Sito</h2>
              <p>Il nostro sito web utilizza le seguenti tipologie di cookie:</p>

              <h3>a. Cookie Tecnici ed Essenziali (Sempre Attivi)</h3>
              <p>
                Questi cookie sono indispensabili per il corretto funzionamento del sito web e per consentire all&apos;utente di navigare e fruire dei servizi (ad esempio, per memorizzare le preferenze sul consenso dei cookie tramite il banner). Non richiedono il preventivo consenso dell&apos;utente per essere installati.
              </p>

              <h3>b. Cookie Analitici ed Statistici</h3>
              <p>
                Utilizzati per raccogliere informazioni in forma aggregata ed anonima sul numero degli utenti e su come questi visitano il sito stesso (ad esempio le pagine più lette, il tempo di permanenza). Tali dati ci aiutano a migliorare la struttura e le prestazioni del sito.
              </p>

              <h3>c. Cookie di Terze Parti</h3>
              <p>
                Durante la navigazione sul sito, l&apos;utente potrebbe ricevere sul suo terminale anche cookie che vengono inviati da siti o da web server diversi (c.d. &quot;terze parti&quot;), sui quali possono risiedere alcuni elementi (quali, ad esempio, mappe interattive, video di YouTube, pulsanti social).
              </p>
            </div>

            <div className={styles.policyArticle}>
              <h2>3. Tabella dei Cookie Utilizzati</h2>
              <table className={styles.cookieTable}>
                <thead>
                  <tr>
                    <th>Nome Cookie</th>
                    <th>Fornitore</th>
                    <th>Finalità</th>
                    <th>Scadenza</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><code>mbevents_cookie_consent</code></td>
                    <td>MB Events (Prima parte)</td>
                    <td>Memorizza il consenso o rifiuto espresso dall&apos;utente nel banner cookie.</td>
                    <td>1 Anno</td>
                  </tr>
                  <tr>
                    <td><code>_ga, _gid</code></td>
                    <td>Google Analytics (Terza parte)</td>
                    <td>Statistiche anonimizzate sull&apos;uso del sito web.</td>
                    <td>Sessione / 2 Anni</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className={styles.policyArticle}>
              <h2>4. Gestione e Disabilitazione dei Cookie tramite Browser</h2>
              <p>
                L&apos;utente può gestire le proprie preferenze relative ai cookie direttamente all&apos;interno del proprio browser ed impedire – ad esempio – che terze parti possano installarne. Tramite le preferenze del browser è inoltre possibile eliminare i cookie installati in passato.
              </p>
              <p>Di seguito le guide ufficiali dei principali browser:</p>
              <ul>
                <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">Google Chrome</a></li>
                <li><a href="https://support.mozilla.org/it/kb/Gestione%20dei%20cookie" target="_blank" rel="noopener noreferrer">Mozilla Firefox</a></li>
                <li><a href="https://support.apple.com/it-it/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer">Apple Safari</a></li>
                <li><a href="https://support.microsoft.com/it-it/microsoft-edge/eliminare-i-cookie-in-microsoft-edge-63947406-4005-4d0f-a457-797324e32338" target="_blank" rel="noopener noreferrer">Microsoft Edge</a></li>
              </ul>
            </div>

            <div className={styles.policyArticle}>
              <h2>5. Contatti e Riferimenti alla Privacy Policy</h2>
              <p>
                Per maggiori informazioni sul trattamento dei dati personali ed esercizio dei propri diritti, vi invitiamo a leggere la nostra <Link href="/privacy-policy">Privacy Policy</Link> o a contattarci all&apos;indirizzo email <a href="mailto:info@mbevents.eu">info@mbevents.eu</a>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
