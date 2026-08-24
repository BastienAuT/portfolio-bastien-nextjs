export const siteName = "Portfolio de Bastien Autem";

export const siteDescription =
  "Portfolio de Bastien Autem, développeur full-stack orienté produit, spécialisé en React, Next.js et TypeScript.";

const normalizeSiteUrl = (value) => {
  const candidate = value?.trim();

  if (!candidate) {
    return null;
  }

  const hasProtocol = /^https?:\/\//i.test(candidate);
  const isLocalhost = /^(localhost|127\.0\.0\.1)(:\d+)?(\/|$)/i.test(candidate);
  const urlWithProtocol = hasProtocol
    ? candidate
    : `${isLocalhost ? "http" : "https"}://${candidate}`;

  try {
    return new URL(urlWithProtocol).origin;
  } catch {
    return null;
  }
};

const vercelUrl =
  process.env.VERCEL_PROJECT_PRODUCTION_URL || process.env.VERCEL_URL;

export const siteUrl =
  normalizeSiteUrl(process.env.NEXT_PUBLIC_SITE_URL) ||
  normalizeSiteUrl(vercelUrl) ||
  "http://localhost:3000";
