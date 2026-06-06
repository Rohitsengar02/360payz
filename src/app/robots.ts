import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://360payz.com";
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/dashboard-preview", "/admin-preview", "/otp-verify"],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
