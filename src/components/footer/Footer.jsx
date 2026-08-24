"use client";

import { usePathname } from "next/navigation";
import { isEnglishPath, localePath, ui } from "@/src/lib/i18n";

const Footer = () => {
  const pathname = usePathname();
  const locale = isEnglishPath(pathname) ? "en" : "fr";
  const t = ui[locale].footer;
  return (
    <footer className="bg-[#111411] text-[#edf0e8]" id="contact">
      <div className="mx-auto w-[min(1160px,calc(100%-48px))] py-16 max-sm:w-[calc(100%-28px)]">
        <p className="text-xs font-extrabold text-[#4f86ff] uppercase tracking-[0.12em]">
          Contact
        </p>

        <div className="mt-8 flex items-end justify-between gap-8 border-b border-white/20 pb-10 max-sm:flex-col max-sm:items-start">
          <p className="max-w-[650px] text-[clamp(1.65rem,2.7vw,2.5rem)] leading-[1.08] font-bold tracking-[-0.04em]">
            {t.pitch}
          </p>
          <a
            className="group flex shrink-0 items-center gap-4 bg-[#246bfe] px-5 py-4 text-sm font-extrabold text-white transition-colors hover:bg-[#4f86ff]"
            href="mailto:deh2win@gmail.com"
          >
            {t.email}
            <span
              className="text-lg transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              aria-hidden="true"
            >
              ↗
            </span>
          </a>
        </div>

        <div className="mt-6 flex items-center justify-between gap-6 text-xs text-[#a9aea5] max-sm:flex-col max-sm:items-start">
          <p>© {new Date().getFullYear()} Bastien Autem</p>
          <div className="flex gap-6 font-bold text-[#edf0e8]">
            <a
              className="hover:text-[#4f86ff]"
              href="https://github.com/BastienAuT"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              className="hover:text-[#4f86ff]"
              href="https://www.linkedin.com/in/bastien-autem/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a className="hover:text-[#4f86ff]" href={localePath(locale, "/cv")}>
              CV ↓
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
