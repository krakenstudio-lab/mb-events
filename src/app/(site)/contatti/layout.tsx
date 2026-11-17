import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contatti e Preventivo Gratuito",
  description: "Richiedi un preventivo gratuito per il tuo evento. MB Events, Via Comacchio 592, Ferrara. Tel. +39 345 973 4844.",
  alternates: { canonical: "/contatti" },
  openGraph: { title: "Contatti e Preventivo Gratuito | MB Events", description: "Richiedi un preventivo gratuito per il tuo evento. MB Events, Via Comacchio 592, Ferrara. Tel. +39 345 973 4844.", url: "/contatti", siteName: "MB Events", locale: "it_IT", type: "website", images: [{ url: "/images/og-image.png", width: 1200, height: 630, alt: "MB Events - Service Audio, Luci, Video e Allestimenti" }] },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
