import { HomePage } from "../page";

export const metadata = {
  title: { absolute: "Bastien Autem — Full-stack web developer" },
  description: "Bastien Autem’s portfolio: a full-stack web developer specializing in React, Next.js, and TypeScript.",
  alternates: {
    canonical: "/en",
    languages: { "fr-FR": "/", "en-US": "/en" },
  },
  openGraph: {
    locale: "en_US",
    title: "Bastien Autem — Full-stack web developer",
    description: "Full-stack projects built end to end, from product and UI to APIs, data, and tests.",
    url: "/en",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bastien Autem — Full-stack web developer",
    description: "Full-stack projects built end to end, from product and UI to APIs, data, and tests.",
    images: ["/opengraph-image"],
  },
};

export default function EnglishHome() {
  return <HomePage locale="en" />;
}
