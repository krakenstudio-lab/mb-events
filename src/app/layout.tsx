import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

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
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/images/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/favicon.ico",
    apple: "/images/apple-touch-icon.png",
  },
  openGraph: {
    title: "MB Events | Service Audio, Luci, Video e Allestimenti per Eventi",
    description: "Noleggio e installazione impianti audio, luci, video e strutture per concerti, eventi aziendali e matrimoni in tutta Italia.",
    url: "https://mbevents.eu",
    siteName: "MB Events",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "MB Events - Service Audio, Luci, Video e Allestimenti",
      },
    ],
    locale: "it_IT",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MB Events | Service Audio, Luci, Video e Allestimenti",
    description: "Soluzioni tecniche trasparenti e professionali per ogni tipo di evento.",
    images: ["/images/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it" className={`${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
