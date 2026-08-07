import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: {
    default: "MB Events | Service Audio, Luci, Video e Allestimenti per Eventi",
    template: "%s | MB Events",
  },
  description: "Noleggio e installazione impianti audio, luci, video e strutture per concerti, eventi aziendali, sfilate di moda e matrimoni in tutta Italia.",
  keywords: ["Service Audio", "Service Luci", "Service Video", "Allestimenti Eventi", "Noleggio Impianti", "Ferrara", "MB Events"],
  authors: [{ name: "MB Events" }],
  creator: "MB Events",
  metadataBase: new URL("https://mbevents.eu"),
  icons: {
    icon: "/images/logo-mb-events.png",
    shortcut: "/images/logo-mb-events.png",
    apple: "/images/logo-mb-events.png",
  },
  openGraph: {
    title: "MB Events | Service Audio, Luci, Video e Allestimenti per Eventi",
    description: "Noleggio e installazione impianti audio, luci, video e strutture per concerti, eventi aziendali e matrimoni in tutta Italia.",
    url: "https://mbevents.eu",
    siteName: "MB Events",
    images: [
      {
        url: "/images/logo-mb-events.png",
        width: 1200,
        height: 630,
        alt: "MB Events Logo - Service Audio, Luci, Video e Allestimenti",
      },
    ],
    locale: "it_IT",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MB Events | Service Audio, Luci, Video e Allestimenti",
    description: "Soluzioni tecniche trasparenti e professionali per ogni tipo di evento.",
    images: ["/images/logo-mb-events.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it" className={`${inter.variable}`}>
      <body style={{ paddingTop: "var(--header-height)", display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <Header />
        <main style={{ flex: 1 }}>{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
