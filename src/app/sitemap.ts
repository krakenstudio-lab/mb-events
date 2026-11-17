import type { MetadataRoute } from "next";

const BASE_URL = "https://mbevents.eu";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "", priority: 1 },
    { path: "/servizi", priority: 0.9 },
    { path: "/portfolio", priority: 0.8 },
    { path: "/l-azienda", priority: 0.7 },
    { path: "/contatti", priority: 0.8 },
    { path: "/privacy-policy", priority: 0.2 },
    { path: "/cookie-policy", priority: 0.2 },
  ];

  return routes.map(({ path, priority }) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority,
  }));
}
