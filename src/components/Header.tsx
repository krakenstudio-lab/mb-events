"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import styles from "./Header.module.css";

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "L'Azienda", href: "/l-azienda" },
    { name: "Servizi", href: "/servizi" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contatti", href: "/contatti" },
  ];

  return (
    <header className={styles.header}>
      <div className={`${styles.headerContainer} container`}>
        {/* Logo */}
        <Link href="/" className={styles.logo}>
          <Image
            src="/images/logo-mb-events.png"
            alt="MB Events"
            width={127}
            height={70}
            className={styles.logoImage}
            priority
          />
        </Link>

        {/* Navigation - Desktop */}
        <nav className={styles.desktopNav}>
          <ul className={styles.navList}>
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className={`${styles.navLink} ${
                      isActive ? styles.activeLink : ""
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Action Button - Desktop */}
        <div className={styles.desktopAction}>
          <Link href="/contatti" className="btn btn-primary">
            Richiedi Preventivo
          </Link>
        </div>

        {/* Hamburger Menu - Mobile */}
        <button
          className={`${styles.hamburger} ${
            mobileMenuOpen ? styles.hamburgerOpen : ""
          }`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      <div
        className={`${styles.mobileMenu} ${
          mobileMenuOpen ? styles.mobileMenuOpen : ""
        }`}
      >
        <nav className={styles.mobileNav}>
          <ul className={styles.mobileNavList}>
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className={`${styles.mobileNavLink} ${
                      isActive ? styles.activeMobileLink : ""
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
            <li className={styles.mobileActionLi}>
              <Link
                href="/contatti"
                className="btn btn-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                Richiedi Preventivo
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
