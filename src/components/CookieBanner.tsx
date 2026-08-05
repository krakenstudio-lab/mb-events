"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./CookieBanner.module.css";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("mbevents_cookie_consent");
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("mbevents_cookie_consent", "accepted");
    setVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem("mbevents_cookie_consent", "rejected");
    setVisible(false);
  };

  return (
    <>
      {/* Persistent Cookie Preference Button at Bottom Left */}
      <button
        onClick={() => setVisible(true)}
        className={styles.cookieTriggerBtn}
        aria-label="Gestisci preferenze cookie"
        title="Gestisci preferenze cookie"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5z"></path>
          <path d="M8.5 8.5v.01"></path>
          <path d="M16 15.5v.01"></path>
          <path d="M12 12v.01"></path>
          <path d="M11 17v.01"></path>
          <path d="M7 14v.01"></path>
        </svg>
      </button>

      {/* Floating Banner */}
      {visible && (
        <div className={styles.cookieBanner} role="dialog" aria-live="polite" aria-label="Informativa Cookie">
          <div className={styles.bannerContainer}>
            <div className={styles.bannerContent}>
              <div className={styles.iconBox}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2bd0c6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5z"></path>
                  <path d="M8.5 8.5v.01"></path>
                  <path d="M16 15.5v.01"></path>
                  <path d="M12 12v.01"></path>
                  <path d="M11 17v.01"></path>
                  <path d="M7 14v.01"></path>
                </svg>
              </div>
              <p className={styles.bannerText}>
                Utilizziamo cookie tecnici ed analitici per garantire il corretto funzionamento del sito e migliorare la tua esperienza di navigazione. Puoi accettare tutti i cookie o gestire le preferenze. Leggi la nostra{" "}
                <Link href="/privacy-policy" className={styles.link}>
                  Privacy Policy
                </Link>{" "}
                e{" "}
                <Link href="/cookie-policy" className={styles.link}>
                  Cookie Policy
                </Link>
                .
              </p>
            </div>

            <div className={styles.bannerActions}>
              <button onClick={handleReject} className={styles.rejectBtn}>
                Solo Essenziali
              </button>
              <button onClick={handleAccept} className={styles.acceptBtn}>
                Accetta Tutti
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
