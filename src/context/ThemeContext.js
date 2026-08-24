"use client";

import { createContext, useEffect, useSyncExternalStore } from "react";

export const ThemeContext = createContext();

let sessionTheme = null;

const getSavedTheme = () => {
  try {
    const savedMode = window.localStorage.getItem("theme");

    return savedMode === "light" || savedMode === "dark"
      ? savedMode
      : sessionTheme;
  } catch {
    return sessionTheme;
  }
};

const subscribe = (callback) => {
  const colorScheme = window.matchMedia("(prefers-color-scheme: dark)");

  window.addEventListener("storage", callback);
  window.addEventListener("themechange", callback);
  colorScheme.addEventListener("change", callback);

  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener("themechange", callback);
    colorScheme.removeEventListener("change", callback);
  };
};

const getTheme = () => {
  const savedMode = getSavedTheme();

  return savedMode ??
    (window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light");
};

const getServerTheme = () => "light";

const applyDocumentTheme = (theme) => {
  document.documentElement.classList.toggle("dark", theme === "dark");
  document.documentElement.style.colorScheme = theme;
};

export const ThemeProvider = ({ children }) => {
  const mode = useSyncExternalStore(subscribe, getTheme, getServerTheme);

  useEffect(() => {
    applyDocumentTheme(mode);
  }, [mode]);

  const toggle = () => {
    const nextMode = mode === "dark" ? "light" : "dark";
    sessionTheme = nextMode;

    try {
      window.localStorage.setItem("theme", nextMode);
    } catch {
      // sessionTheme conserve le choix si le stockage est bloqué.
    }

    applyDocumentTheme(nextMode);
    window.dispatchEvent(new Event("themechange"));
  };

  return (
    <ThemeContext.Provider value={{ toggle, mode }}>
      <div className="min-h-screen bg-[#f4f3ee] text-[#111411] transition-colors duration-200 selection:bg-[#246bfe] selection:text-white dark:bg-[#0d0f0e] dark:text-[#edf0e8]">
        {children}
      </div>
    </ThemeContext.Provider>
  );
};
