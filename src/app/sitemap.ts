import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://360payz.com";
  const routes = [
    "",
    "/about",
    "/features",
    "/security",
    "/contact",
    "/privacy-policy",
    "/terms",
    "/refund",
    "/cookies",
    "/aml",
    "/kyc",
    "/disclaimer",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));
}
