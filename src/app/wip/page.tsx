import Image from "next/image";
import type { Metadata } from "next";
import styles from "./Wip.module.css";

export const metadata: Metadata = {
  title: "MB Events | Sito in Allestimento",
  robots: {
    index: false,
    follow: false,
  },
};

export default function WipPage() {
  return (
    <div className={styles.page}>
      <div className={styles.glow} aria-hidden="true" />
      <div className={`${styles.card} glass-card`}>
        <Image
          src="/images/logo-mb-events.png"
          alt="MB Events"
          width={140}
          height={77}
          className={styles.logo}
          priority
        />

        <span className={styles.tagline}>Professional Audio, Lights & Video Service</span>

        <h1 className={styles.heading}>
          Stiamo <span className={styles.cyan}>allestendo</span> qualcosa
          <br />
          di <span className={styles.gold}>nuovo</span>
        </h1>

        <p className={styles.desc}>
          Il nostro nuovo sito è in fase di realizzazione. Torneremo online a breve
          con tutti i nostri servizi audio, luci, video e strutture per eventi.
        </p>

        <div className={styles.contacts}>
          <a href="mailto:info@mbevents.eu" className="btn btn-primary">
            info@mbevents.eu
          </a>
          <a href="tel:+390212345678" className="btn btn-secondary">
            +39 02 1234 5678
          </a>
        </div>
      </div>

      <p className={styles.copyright}>
        &copy; {new Date().getFullYear()} MB Events. Tutti i diritti riservati.
      </p>
    </div>
  );
}
