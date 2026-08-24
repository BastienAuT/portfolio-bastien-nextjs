const englishManifest = {
  name: "Bastien Autem’s Portfolio",
  short_name: "Bastien Autem",
  description:
    "Bastien Autem’s portfolio: a product-minded full-stack developer specializing in React, Next.js, and TypeScript.",
  id: "/en",
  start_url: "/en",
  scope: "/en",
  display: "standalone",
  background_color: "#f4f3ee",
  theme_color: "#246bfe",
  lang: "en-US",
  icons: [
    {
      src: "/favicon.ico",
      sizes: "any",
      type: "image/x-icon",
    },
  ],
};

export function GET() {
  return Response.json(englishManifest, {
    headers: {
      "Cache-Control": "public, max-age=86400, stale-while-revalidate=604800",
      "Content-Type": "application/manifest+json",
    },
  });
}
