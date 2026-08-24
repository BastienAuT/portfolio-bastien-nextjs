import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import { ThemeProvider } from "../context/ThemeContext";
import { siteDescription, siteName, siteUrl } from "@/src/lib/site";
import "./globals.css";
import localFont from "next/font/local";
import { headers } from "next/headers";

const inter = localFont({
  src: "./fonts/inter-latin-variable.woff2",
  display: "swap",
  fallback: ["Arial", "Helvetica", "sans-serif"],
  variable: "--font-inter",
  weight: "100 900",
});
const spaceGrotesk = localFont({
  src: "./fonts/space-grotesk-latin-variable.woff2",
  display: "swap",
  fallback: ["Arial", "Helvetica", "sans-serif"],
  variable: "--font-space-grotesk",
  weight: "300 700",
});

const themeInitializationScript = `(() => {
  try {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const theme = savedTheme === "light" || savedTheme === "dark"
      ? savedTheme
      : prefersDark ? "dark" : "light";

    document.documentElement.classList.toggle("dark", theme === "dark");
    document.documentElement.style.colorScheme = theme;
  } catch {}
})();`;

export const metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: siteName,
  title: {
    default: "Bastien Autem — Développeur full-stack orienté produit",
    template: "%s — Bastien Autem",
  },
  description: siteDescription,
  alternates: {
    canonical: "./",
    languages: {
      "fr-FR": "/",
      "en-US": "/en",
    },
  },
  authors: [{ name: "Bastien Autem", url: siteUrl }],
  creator: "Bastien Autem",
  publisher: "Bastien Autem",
  category: "technology",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "./",
    siteName,
    title: "Bastien Autem — Développeur full-stack orienté produit",
    description: siteDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: "Bastien Autem — Développeur full-stack orienté produit",
    description: siteDescription,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport = {
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f4f3ee" },
    { media: "(prefers-color-scheme: dark)", color: "#111411" },
  ],
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Bastien Autem",
      url: siteUrl,
      image: `${siteUrl}/bastien1.jpg`,
      jobTitle: "Développeur full-stack orienté produit",
      sameAs: [
        "https://github.com/BastienAuT",
        "https://www.linkedin.com/in/bastien-autem/",
      ],
      knowsAbout: [
        "React",
        "Next.js",
        "TypeScript",
        "Node.js",
        "PostgreSQL",
        "API web",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: siteName,
      description: siteDescription,
      inLanguage: "fr-FR",
      publisher: { "@id": `${siteUrl}/#person` },
    },
  ],
};

export default async function RootLayout({ children }) {
  const requestHeaders = await headers();
  const locale = requestHeaders.get("x-portfolio-locale") === "en" ? "en" : "fr";
  const skipLink = locale === "en" ? "Skip to main content" : "Aller au contenu principal";
  const localizedStructuredData = {
    ...structuredData,
    "@graph": structuredData["@graph"].map((item) => {
      if (item["@type"] === "Person" && locale === "en") {
        return {
          ...item,
          jobTitle: "Product-minded full-stack developer",
          knowsAbout: item.knowsAbout.map((topic) =>
            topic === "API web" ? "Web APIs" : topic,
          ),
        };
      }

      if (item["@type"] === "WebSite") {
        return locale === "en"
          ? {
              ...item,
              "@id": `${siteUrl}/en/#website`,
              url: `${siteUrl}/en`,
              name: "Bastien Autem’s Portfolio",
              description:
                "Bastien Autem’s portfolio: a product-minded full-stack developer specializing in React, Next.js, and TypeScript.",
              inLanguage: "en-US",
            }
          : { ...item, inLanguage: "fr-FR" };
      }

      return item;
    }),
  };

  return (
    <html lang={locale} data-scroll-behavior="smooth" suppressHydrationWarning>
      <body
        className={`${inter.className} ${inter.variable} ${spaceGrotesk.variable} antialiased`}
      >
        <script dangerouslySetInnerHTML={{ __html: themeInitializationScript }} />
        <a
          className="fixed top-3 left-3 z-[100] -translate-y-24 bg-[#246bfe] px-4 py-3 text-sm font-extrabold text-white shadow-lg transition-transform focus:translate-y-0 focus:outline-2 focus:outline-offset-2 focus:outline-[#111411] dark:focus:outline-white"
          href="#main-content"
        >
          {skipLink}
        </a>
        <script
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localizedStructuredData).replace(/</g, "\\u003c"),
          }}
          type="application/ld+json"
        />
        <ThemeProvider>
          <Navbar />
          <div className="focus:outline-none" id="main-content" tabIndex={-1}>
            {children}
          </div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
