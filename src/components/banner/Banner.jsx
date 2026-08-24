import Image from "next/image";

const Banner = () => {
  return (
    <section className="mx-auto grid w-[min(1160px,calc(100%-48px))] items-center gap-[clamp(48px,8vw,110px)] py-[clamp(44px,6vw,72px)] md:grid-cols-[minmax(0,1.45fr)_minmax(260px,.55fr)] max-sm:w-[calc(100%-28px)]">
      <div>
        <p className="mb-8 flex items-center gap-3 text-xs font-extrabold text-[#1557e8] uppercase tracking-[0.12em] dark:text-[#4f86ff]">
          <span className="h-px w-10 bg-current" aria-hidden="true" />
          Bastien Autem · Développeur full-stack orienté produit
        </p>

        <h1 className="max-w-[800px] text-[clamp(2.25rem,4.7vw,4.6rem)] leading-[0.97] font-black tracking-[-0.06em]">
          Je transforme des problématiques produit complexes
          <em className="mt-2 block [font-family:var(--font-space-grotesk)] font-medium tracking-[-0.045em] text-[#1557e8] not-italic dark:text-[#4f86ff]">
            en applications web claires.
          </em>
        </h1>

        <div className="mt-10 max-w-[700px] border-t border-[#111411]/20 pt-7 dark:border-white/20">
          <p className="max-w-[500px] text-[1.05rem] leading-7 text-[#5c6059] dark:text-[#a9aea5]">
            Je conçois et développe des produits web de bout en bout, de
            l’interface aux API et aux données, avec React, Next.js et
            TypeScript.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              className="inline-flex min-h-11 items-center bg-[#246bfe] px-5 py-3 text-sm font-extrabold text-white transition-colors hover:bg-[#1557e8] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#246bfe] dark:hover:bg-[#4f86ff]"
              href="#projets"
            >
              Voir mes réalisations
            </a>
            <a
              className="inline-flex min-h-11 items-center border border-[#111411]/20 px-5 py-3 text-sm font-extrabold text-[#111411] transition-colors hover:border-[#246bfe] hover:text-[#1557e8] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#246bfe] dark:border-white/20 dark:text-white dark:hover:text-[#4f86ff]"
              href="/CV_Bastien_Autem_2026.pdf"
              download
            >
              Télécharger mon CV
            </a>
            <a
              className="inline-flex min-h-11 items-center px-2 text-sm font-extrabold text-[#1557e8] transition-opacity hover:opacity-65 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#246bfe] dark:text-[#4f86ff]"
              href="mailto:deh2win@gmail.com"
            >
              Me contacter
            </a>
          </div>

          <nav
            className="mt-4 flex items-center gap-2"
            aria-label="Profils professionnels"
          >
            <a
              className="inline-flex min-h-11 items-center border border-[#111411]/20 px-3.5 text-sm font-extrabold text-[#111411] transition-colors hover:border-[#246bfe] hover:text-[#1557e8] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#246bfe] dark:border-white/20 dark:text-white dark:hover:text-[#4f86ff]"
              href="https://www.linkedin.com/in/bastien-autem/"
              target="_blank"
              rel="noreferrer"
              aria-label="Consulter mon profil LinkedIn dans un nouvel onglet"
            >
              LinkedIn
            </a>
            <a
              className="inline-flex min-h-11 items-center border border-[#111411]/20 px-3.5 text-sm font-extrabold text-[#111411] transition-colors hover:border-[#246bfe] hover:text-[#1557e8] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#246bfe] dark:border-white/20 dark:text-white dark:hover:text-[#4f86ff]"
              href="https://github.com/BastienAuT"
              target="_blank"
              rel="noreferrer"
              aria-label="Consulter mon profil GitHub dans un nouvel onglet"
            >
              GitHub
            </a>
          </nav>
        </div>
      </div>

      <div className="relative mx-auto w-full max-w-[340px] max-sm:w-[calc(100%-16px)]">
        <div className="relative aspect-[4/5] overflow-hidden bg-[#171a17]">
          <Image
            className="object-cover grayscale contrast-110"
            src="/bastien1.jpg"
            alt="Portrait de Bastien Autem"
            fill
            priority
            sizes="(max-width: 767px) 82vw, 340px"
          />
          <div
            className="absolute inset-0 bg-[#246bfe]/65 mix-blend-color [clip-path:polygon(52%_0,100%_0,100%_100%,72%_100%)]"
            aria-hidden="true"
          />
        </div>
        <div
          className="absolute -right-4 -bottom-4 -z-10 h-full w-full border-2 border-[#246bfe] max-[360px]:-right-2 max-[360px]:-bottom-2"
          aria-hidden="true"
        />
        <p className="mt-5 flex flex-wrap justify-between gap-x-3 gap-y-2 text-[11px] font-bold uppercase tracking-[0.14em] text-[#5c6059] dark:text-[#a9aea5]">
          <span>France / Remote</span>
          <span className="inline-flex items-center gap-2 text-[#1557e8] dark:text-[#4f86ff]">
            <span
              className="size-1.5 rounded-full bg-current"
              aria-hidden="true"
            />
            Ouvert aux opportunités
          </span>
        </p>
      </div>
    </section>
  );
};

export default Banner;
