import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`${styles.footerContainer} container`}>
        {/* About & Logo */}
        <div className={styles.footerAbout}>
          <Link href="/" className={styles.logo}>
            <Image
              src="/images/logo-mb-events.png"
              alt="MB Events"
              width={120}
              height={66}
              className={styles.logoImage}
            />
          </Link>
          <p className={styles.aboutText}>
            Trasformiamo ogni evento in un'esperienza indimenticabile con tecnologia all'avanguardia e professionalità senza compromessi.
          </p>
        </div>

        {/* Quick Links */}
        <div className={styles.footerCol}>
          <h3 className={styles.colTitle}>Link Rapidi</h3>
          <ul className={styles.colList}>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/l-azienda">L'Azienda</Link></li>
            <li><Link href="/servizi">Servizi</Link></li>
            <li><Link href="/portfolio">Portfolio</Link></li>
            <li><Link href="/contatti">Contatti</Link></li>
          </ul>
        </div>

        {/* Services Links */}
        <div className={styles.footerCol}>
          <h3 className={styles.colTitle}>Servizi</h3>
          <ul className={styles.colList}>
            <li><Link href="/servizi#audio">Service Audio</Link></li>
            <li><Link href="/servizi#luci">Service Luci</Link></li>
            <li><Link href="/servizi#video">Service Video</Link></li>
            <li><Link href="/servizi#strutture">Strutture e Allestimenti</Link></li>
          </ul>
        </div>

        {/* Contacts Info */}
        <div className={styles.footerCol}>
          <h3 className={styles.colTitle}>Contatti</h3>
          <ul className={styles.colList}>
            <li className={styles.contactItem}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2bd0c6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              <span>Via dell'Innovazione, 42<br />20121 Milano, Italia</span>
            </li>
            <li className={styles.contactItem}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2bd0c6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              <a href="tel:+390212345678">+39 02 1234 5678</a>
            </li>
            <li className={styles.contactItem}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2bd0c6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              <a href="mailto:info@mbevents.eu">info@mbevents.eu</a>
            </li>
          </ul>
          <div className={styles.socials}>
            <a href="#" aria-label="Facebook" className={styles.socialLink}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
            <a href="#" aria-label="Instagram" className={styles.socialLink}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <a href="#" aria-label="LinkedIn" className={styles.socialLink}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
            <a href="#" aria-label="YouTube" className={styles.socialLink}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </a>
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <div className={`${styles.bottomContainer} container`}>
          <p className={styles.copyright}>&copy; {currentYear} MB Events. Tutti i diritti riservati.</p>
          <div className={styles.policies}>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/cookie-policy">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
