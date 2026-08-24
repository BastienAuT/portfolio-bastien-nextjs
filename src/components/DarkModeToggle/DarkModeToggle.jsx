"use client";

import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

const DarkModeToggle = () => {
  const { toggle, mode } = useContext(ThemeContext);

  return (
    <button
      className="group grid size-11 shrink-0 cursor-pointer place-items-center rounded-full transition-colors hover:bg-[#111411]/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#246bfe] motion-reduce:transition-none dark:hover:bg-white/10"
      type="button"
      onClick={toggle}
      aria-label={
        mode === "light" ? "Activer le thème sombre" : "Activer le thème clair"
      }
      aria-pressed={mode === "dark"}
    >
      <span
        className="size-3.5 rounded-full bg-[#111411] transition-transform group-hover:scale-125 motion-reduce:transform-none motion-reduce:transition-none dark:bg-[#edf0e8]"
        aria-hidden="true"
      />
    </button>
  );
};

export default DarkModeToggle;
