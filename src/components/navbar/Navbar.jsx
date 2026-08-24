import Link from "next/link";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";

const navigationItems = [
  { href: "/#projets", label: "Projets" },
  { href: "/#experience", label: "Expérience" },
  { href: "/#a-propos", label: "À propos" },
  { href: "/cv", label: "CV" },
];

const Navbar = () => {
  return (
    <header className="sticky top-0 z-30 border-b border-[#111411]/15 bg-[#f4f3ee]/90 backdrop-blur-xl dark:border-white/15 dark:bg-[#0d0f0e]/90">
        <nav
          className="mx-auto flex h-[72px] w-[min(1160px,calc(100%-48px))] items-center justify-between gap-4 max-sm:w-[calc(100%-28px)] md:gap-8"
          aria-label="Navigation principale"
        >
          <Link
            href="/"
            className="group inline-flex items-center gap-2.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#246bfe]"
            aria-label="Bastien Autem — Accueil"
          >
            <span
              className="inline-flex [font-family:var(--font-space-grotesk)] text-[1.35rem] leading-none font-black tracking-[-0.13em]"
              aria-hidden="true"
            >
              <span className="inline-block transition-transform duration-300 ease-out group-hover:-translate-x-px group-focus-visible:-translate-x-px motion-reduce:transform-none motion-reduce:transition-none">
                B
              </span>
              <span className="inline-block text-[#1557e8] transition-transform duration-300 ease-out group-hover:translate-x-px group-focus-visible:translate-x-px motion-reduce:transform-none motion-reduce:transition-none dark:text-[#4f86ff]">
                A
              </span>
            </span>
            <span
              className="relative h-px w-8 overflow-hidden bg-[#111411]/20 dark:bg-white/25"
              aria-hidden="true"
            >
              <span className="absolute inset-y-0 left-0 w-2 bg-[#1557e8] transition-[width] duration-500 ease-out group-hover:w-full group-focus-visible:w-full motion-reduce:transition-none dark:bg-[#4f86ff]" />
            </span>
          </Link>

          <div className="hidden items-center gap-[clamp(18px,3vw,38px)] text-xs font-bold text-[#5c6059] md:flex dark:text-[#a9aea5]">
            {navigationItems.map((item) => (
              <Link
                className="transition-colors hover:text-[#1557e8] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#246bfe] dark:hover:text-[#4f86ff]"
                href={item.href}
                key={item.href}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-1 sm:gap-2 md:gap-5">
            <a
              className="hidden text-xs font-extrabold text-[#1557e8] transition-opacity hover:opacity-65 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#246bfe] md:inline-flex dark:text-[#4f86ff]"
              href="mailto:deh2win@gmail.com"
            >
              Contact
            </a>

            <details className="group relative md:hidden">
              <summary className="flex min-h-11 cursor-pointer list-none items-center gap-2 px-2 text-xs font-extrabold text-[#1557e8] [&::-webkit-details-marker]:hidden dark:text-[#4f86ff]">
                Menu
                <span
                  className="text-base leading-none transition-transform group-open:rotate-45 motion-reduce:transition-none"
                  aria-hidden="true"
                >
                  +
                </span>
              </summary>
              <div className="absolute top-[calc(100%+8px)] right-0 z-40 min-w-52 border border-[#111411]/20 bg-[#f4f3ee] p-2 shadow-xl dark:border-white/20 dark:bg-[#151816]">
                {navigationItems.map((item) => (
                  <Link
                    className="flex min-h-11 items-center px-3 text-sm font-bold transition-colors hover:bg-[#246bfe] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#246bfe]"
                    href={item.href}
                    key={item.href}
                  >
                    {item.label}
                  </Link>
                ))}
                <a
                  className="flex min-h-11 items-center border-t border-[#111411]/15 px-3 text-sm font-bold text-[#1557e8] transition-colors hover:bg-[#246bfe] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#246bfe] dark:border-white/15 dark:text-[#4f86ff]"
                  href="mailto:deh2win@gmail.com"
                >
                  Contact
                </a>
              </div>
            </details>

            <DarkModeToggle />
          </div>
        </nav>
    </header>
  );
};

export default Navbar;
