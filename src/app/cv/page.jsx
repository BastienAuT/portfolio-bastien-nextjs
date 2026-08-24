import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "CV",
  description:
    "CV et repères professionnels de Bastien Autem, développeur full-stack orienté produit spécialisé en React, Next.js et TypeScript.",
  alternates: {
    canonical: "/cv",
  },
  openGraph: {
    title: "CV · Bastien Autem",
    description:
      "CV et repères professionnels de Bastien Autem, développeur full-stack orienté produit.",
    url: "/cv",
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title: "CV · Bastien Autem",
    description:
      "CV et repères professionnels de Bastien Autem, développeur full-stack orienté produit.",
    images: ["/opengraph-image"],
  },
};

const expertise = [
  "React, Next.js et TypeScript",
  "API, authentification et données SQL / NoSQL",
  "Interfaces responsives, accessibilité et performance",
  "Temps réel, tests, CI et Docker",
];

const Cv = () => {
  return (
    <main>
      <header className="border-b border-white/15 bg-[#111411] text-[#edf0e8]">
        <div className="mx-auto grid w-[min(1100px,calc(100%-32px))] gap-10 py-[clamp(52px,7vw,88px)] md:grid-cols-[1.2fr_.8fr] md:items-end">
          <div>
            <p className="text-xs font-extrabold text-[#4f86ff] uppercase tracking-[0.12em]">
              Curriculum vitae
            </p>
            <h1 className="mt-5 max-w-[760px] font-[family-name:var(--font-space-grotesk)] text-[clamp(2.7rem,5.5vw,5.6rem)] leading-[0.9] font-semibold tracking-[-0.065em]">
              Bastien Autem
              <span className="mt-3 block text-[.46em] leading-tight text-[#4f86ff] tracking-[-0.04em]">
                Développeur full-stack orienté produit
              </span>
            </h1>
          </div>

          <div>
            <p className="leading-7 text-[#c9cec5]">
              Je conçois des applications web de bout en bout avec React,
              Next.js et TypeScript, de l’interface aux API et aux données.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                className="inline-flex min-h-11 items-center bg-[#246bfe] px-5 py-3 text-xs font-extrabold uppercase tracking-[0.09em] text-white transition-colors hover:bg-[#4f86ff] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#4f86ff]"
                href="/CV_Bastien_Autem_2026.pdf"
                download="CV-Bastien-Autem-2026.pdf"
              >
                Télécharger le PDF
                <span className="ml-2" aria-hidden="true">
                  ↓
                </span>
              </a>
              <a
                className="inline-flex min-h-11 items-center border border-white/25 px-5 py-3 text-xs font-extrabold uppercase tracking-[0.09em] transition-colors hover:border-[#4f86ff] hover:text-[#4f86ff] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#4f86ff]"
                href="mailto:deh2win@gmail.com"
              >
                Me contacter
              </a>
            </div>
          </div>
        </div>
      </header>

      <div className="mx-auto w-[min(1100px,calc(100%-32px))] py-[clamp(64px,8vw,104px)]">
        <section aria-labelledby="cv-summary-title">
          <div className="grid gap-8 md:grid-cols-[.65fr_1.35fr]">
            <div>
              <p className="text-xs font-extrabold text-[#1557e8] uppercase tracking-[0.12em] dark:text-[#4f86ff]">
                Version lisible
              </p>
              <h2
                className="mt-4 text-[clamp(1.9rem,3vw,3rem)] leading-none font-black tracking-[-0.05em]"
                id="cv-summary-title"
              >
                Repères professionnels
              </h2>
            </div>

            <div className="border-t border-[#111411]/20 dark:border-white/20">
              <article className="border-b border-[#111411]/20 py-7 dark:border-white/20">
                <h3 className="text-sm font-black uppercase tracking-[0.08em]">
                  Expertise
                </h3>
                <ul className="mt-4 grid gap-2 text-[#5c6059] sm:grid-cols-2 dark:text-[#a9aea5]">
                  {expertise.map((item) => (
                    <li className="flex gap-3 leading-6" key={item}>
                      <span
                        className="text-[#1557e8] dark:text-[#4f86ff]"
                        aria-hidden="true"
                      >
                        •
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </article>

              <article className="border-b border-[#111411]/20 py-7 dark:border-white/20">
                <h3 className="text-sm font-black uppercase tracking-[0.08em]">
                  Expérience professionnelle
                </h3>
                <p className="mt-4 leading-7 text-[#5c6059] dark:text-[#a9aea5]">
                  Chez Hoffmann AI, j’ai fait évoluer une application métier de
                  devis aéronautiques avec de nouveaux modules, des données
                  Contentful et des automatisations Mailgun. Chez Prepera, j’ai
                  participé à des pages, parcours et plugins JavaScript sur
                  Bubble.
                </p>
              </article>

              <article className="border-b border-[#111411]/20 py-7 dark:border-white/20">
                <h3 className="text-sm font-black uppercase tracking-[0.08em]">
                  Projets personnels récents
                </h3>
                <p className="mt-4 leading-7 text-[#5c6059] dark:text-[#a9aea5]">
                  Cyclone explore la communication temps réel, VortX les
                  interactions d’un réseau social et Lyreah une chaîne de lecture
                  EPUB sécurisée. Leurs démos, dépôts et études de cas sont
                  accessibles depuis les projets sélectionnés.
                </p>
                <Link
                  className="mt-4 inline-flex text-sm font-black text-[#1557e8] transition-colors hover:text-[#111411] dark:text-[#4f86ff] dark:hover:text-white"
                  href="/#projets-selectionnes"
                >
                  Voir les projets
                  <span className="ml-2" aria-hidden="true">
                    →
                  </span>
                </Link>
              </article>

              <article className="py-7">
                <h3 className="text-sm font-black uppercase tracking-[0.08em]">
                  Formation et langues
                </h3>
                <p className="mt-4 leading-7 text-[#5c6059] dark:text-[#a9aea5]">
                  Titre professionnel Développeur web et web mobile, niveau 5
                  (Bac+2), et certification Opquast, score 740/1000. Anglais
                  professionnel C1 et allemand intermédiaire.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section
          className="mt-[clamp(64px,8vw,104px)]"
          aria-labelledby="cv-preview-title"
        >
          <div className="mb-8 flex flex-wrap items-end justify-between gap-5">
            <div>
              <p className="text-xs font-extrabold text-[#1557e8] uppercase tracking-[0.12em] dark:text-[#4f86ff]">
                Aperçu
              </p>
              <h2
                className="mt-4 text-[clamp(1.9rem,3vw,3rem)] leading-none font-black tracking-[-0.05em]"
                id="cv-preview-title"
              >
                Version PDF 2026
              </h2>
            </div>
            <a
              className="text-sm font-black text-[#1557e8] transition-colors hover:text-[#111411] dark:text-[#4f86ff] dark:hover:text-white"
              href="/CV_Bastien_Autem_2026.pdf"
              download="CV-Bastien-Autem-2026.pdf"
            >
              Télécharger le document <span aria-hidden="true">↓</span>
            </a>
          </div>

          <figure>
            <Image
              src="/CV_Bastien_Autem_2026.png"
              className="h-auto w-full border border-black/15 dark:border-white/15"
              alt=""
              height={2021}
              width={1429}
              sizes="(max-width: 1132px) calc(100vw - 32px), 1100px"
            />
            <figcaption className="mt-4 text-sm leading-6 text-[#5c6059] dark:text-[#a9aea5]">
              Aperçu visuel du CV. Son contenu principal est résumé en texte
              ci-dessus et le document complet est disponible au téléchargement.
            </figcaption>
          </figure>
        </section>
      </div>
    </main>
  );
};

export default Cv;
