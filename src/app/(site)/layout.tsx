import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://mbevents.eu/#organization",
  name: "MB Events",
  description:
    "Service audio, luci, video e allestimenti per concerti, eventi aziendali, sfilate e matrimoni.",
  url: "https://mbevents.eu",
  logo: "https://mbevents.eu/images/logo-mb-events.png",
  image: "https://mbevents.eu/images/og-image.png",
  telephone: "+39 345 973 4844",
  email: "info@mbevents.eu",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Via Comacchio, 592",
    postalCode: "44124",
    addressLocality: "Ferrara",
    addressCountry: "IT",
  },
  areaServed: { "@type": "Country", name: "Italia" },
  knowsAbout: ["Service audio", "Service luci", "Service video", "Allestimenti per eventi"],
};

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ paddingTop: "var(--header-height)", display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <Header />
      <main style={{ flex: 1 }}>{children}</main>
      <Footer />
      <CookieBanner />
    </div>
  );
}
