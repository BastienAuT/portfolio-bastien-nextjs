import { siteDescription, siteName } from "@/src/lib/site";

export default function manifest() {
  return {
    name: siteName,
    short_name: "Bastien Autem",
    description: siteDescription,
    id: "/",
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#f4f3ee",
    theme_color: "#246bfe",
    lang: "fr-FR",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
