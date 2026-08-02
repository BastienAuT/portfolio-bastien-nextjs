"use client";

import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

const DarkModeToggle = () => {
  const { toggle, mode } = useContext(ThemeContext);

  return (
    <button
      className="group grid size-6 cursor-pointer place-items-center"
      type="button"
      onClick={toggle}
      aria-label={
        mode === "light" ? "Activer le thème sombre" : "Activer le thème clair"
      }
      aria-pressed={mode === "dark"}
    >
      <span
        className="size-3.5 rounded-full bg-[#111411] transition-transform group-hover:scale-125 dark:bg-[#edf0e8]"
        aria-hidden="true"
      />
    </button>
  );
};

export default DarkModeToggle;
