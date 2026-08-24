export const locales = ["fr", "en"];
export const defaultLocale = "fr";

export const isEnglishPath = (pathname = "") =>
  pathname === "/en" || pathname.startsWith("/en/");

export const localePath = (locale, pathname = "/") => {
  let cleanPath = pathname.startsWith("/en")
    ? pathname.slice(3) || "/"
    : pathname;

  cleanPath = cleanPath.replace(/^\/projects(?=\/|$)/, "/projets");

  if (locale === "en") {
    const englishPath = cleanPath.replace(/^\/projets(?=\/|$)/, "/projects");
    return englishPath === "/" ? "/en" : `/en${englishPath}`;
  }

  return cleanPath;
};

export const ui = {
  fr: {
    nav: { experience: "Expérience", projects: "Projets", about: "À propos", cv: "CV", menu: "Menu", contact: "Contact", aria: "Navigation principale", home: "Bastien Autem — Accueil" },
    footer: { pitch: "Pour une mission, une opportunité ou un projet.", email: "M’écrire par e-mail" },
    theme: { dark: "Activer le thème sombre", light: "Activer le thème clair" },
    language: { label: "English version", short: "EN" },
  },
  en: {
    nav: { experience: "Experience", projects: "Projects", about: "About", cv: "Résumé", menu: "Menu", contact: "Contact", aria: "Main navigation", home: "Bastien Autem — Home" },
    footer: { pitch: "For a role, an opportunity, or a project.", email: "Email me" },
    theme: { dark: "Enable dark theme", light: "Enable light theme" },
    language: { label: "Version française", short: "FR" },
  },
};
