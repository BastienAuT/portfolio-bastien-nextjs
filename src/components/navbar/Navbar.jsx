import Link from "next/link";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-30 border-b border-[#111411]/15 bg-[#f4f3ee]/90 backdrop-blur-xl dark:border-white/15 dark:bg-[#0d0f0e]/90">
      <nav
        className="mx-auto flex h-[72px] w-[min(1160px,calc(100%-48px))] items-center justify-between gap-8 max-sm:w-[calc(100%-28px)]"
        aria-label="Navigation principale"
      >
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xl font-black tracking-[-0.08em]"
          aria-label="Bastien Autem — Accueil"
        >
          BA <span className="text-[#1557e8] dark:text-[#4f86ff]">—</span>
        </Link>

        <div className="flex items-center gap-[clamp(18px,3vw,38px)] text-xs font-bold text-[#5c6059] dark:text-[#a9aea5]">
          <Link
            className="transition-colors hover:text-[#1557e8] dark:hover:text-[#4f86ff]"
            href="/#projets"
          >
            Projets
          </Link>
          <Link
            className="transition-colors hover:text-[#1557e8] max-sm:hidden dark:hover:text-[#4f86ff]"
            href="/#experience"
          >
            Expérience
          </Link>
          <Link
            className="transition-colors hover:text-[#1557e8] max-sm:hidden dark:hover:text-[#4f86ff]"
            href="/#a-propos"
          >
            À propos
          </Link>
          <Link
            className="transition-colors hover:text-[#1557e8] dark:hover:text-[#4f86ff]"
            href="/cv"
          >
            CV
          </Link>
        </div>

        <div className="flex items-center gap-5">
          <a
            className="text-xs font-extrabold text-[#1557e8] transition-opacity hover:opacity-65 max-md:hidden dark:text-[#4f86ff]"
            href="mailto:deh2win@gmail.com"
          >
            Contact
          </a>
          <DarkModeToggle />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
