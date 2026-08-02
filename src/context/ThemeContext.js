"use client";

import { createContext, useSyncExternalStore } from "react";

export const ThemeContext = createContext();

const subscribe = (callback) => {
  window.addEventListener("storage", callback);
  window.addEventListener("themechange", callback);

  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener("themechange", callback);
  };
};

const getTheme = () => {
  const savedMode = window.localStorage.getItem("theme");

  if (savedMode === "light" || savedMode === "dark") {
    return savedMode;
  }

  return "light";
};

const getServerTheme = () => "light";

export const ThemeProvider = ({ children }) => {
  const mode = useSyncExternalStore(subscribe, getTheme, getServerTheme);

  const toggle = () => {
    const nextMode = mode === "dark" ? "light" : "dark";
    window.localStorage.setItem("theme", nextMode);
    window.dispatchEvent(new Event("themechange"));
  };

  return (
    <ThemeContext.Provider value={{ toggle, mode }}>
      <div
        className={`${mode === "dark" ? "dark" : ""} min-h-screen bg-[#f4f3ee] text-[#111411] transition-colors duration-200 selection:bg-[#246bfe] selection:text-white dark:bg-[#0d0f0e] dark:text-[#edf0e8]`}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
};
