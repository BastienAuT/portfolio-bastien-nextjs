import { siteUrl } from "@/src/lib/site";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/api/",
    },
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
