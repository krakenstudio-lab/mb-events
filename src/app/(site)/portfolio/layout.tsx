import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio Eventi",
  description: "Una selezione dei nostri lavori: concerti, eventi corporate, matrimoni ed eventi privati con service audio, luci e video.",
  alternates: { canonical: "/portfolio" },
  openGraph: { title: "Portfolio Eventi | MB Events", description: "Una selezione dei nostri lavori: concerti, eventi corporate, matrimoni ed eventi privati con service audio, luci e video.", url: "/portfolio", siteName: "MB Events", locale: "it_IT", type: "website", images: [{ url: "/images/og-image.png", width: 1200, height: 630, alt: "MB Events - Service Audio, Luci, Video e Allestimenti" }] },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
