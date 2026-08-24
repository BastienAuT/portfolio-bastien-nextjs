import Link from "next/link";
import { projects, projectsBySlug } from "@/src/data/projects";
import { localizeProjects } from "@/src/data/projects.en";
import { localePath } from "@/src/lib/i18n";

const copy = {
  fr: { eyebrow: "Projet phare", status: "Version avancée · En ligne", videoAria: "Démonstration de l’application Cyclone en une minute", download: "Télécharger la démonstration vidéo", sentence: "Une réalisation complète, de l’idée au produit déployé.", techAria: "Technologies principales du projet Cyclone", description: "En une minute, découvrez la messagerie, les appels audio et vidéo, le partage d’écran et les interactions en temps réel.", caseStudy: "Voir l’étude de cas", open: "Ouvrir", openAria: "Ouvrir l’application Cyclone dans un nouvel onglet" },
  en: { eyebrow: "Featured project", status: "Advanced version · Live", videoAria: "One-minute demonstration of the Cyclone application", download: "Download the video demonstration", sentence: "A complete build, from idea to deployed product.", techAria: "Main technologies used in Cyclone", description: "In one minute, see messaging, audio and video calls, screen sharing, and real-time interactions.", caseStudy: "View case study", open: "Open app", openAria: "Open the Cyclone application in a new tab" },
};

const FeaturedProject = ({ locale = "fr" }) => {
  const t = copy[locale];
  const cyclone = locale === "en"
    ? localizeProjects(projects).find((project) => project.slug === "cyclone")
    : projectsBySlug.cyclone;
  return (
    <section
      className="scroll-mt-[72px] border-y border-white/10 bg-[#111411] text-[#edf0e8]"
      id="projets"
    >
      <div className="mx-auto w-[min(1160px,calc(100%-48px))] py-[90px] max-sm:w-[calc(100%-28px)] max-sm:py-16">
        <div className="mb-7 flex flex-wrap items-center justify-between gap-x-6 gap-y-3">
          <p className="flex items-center gap-3 text-xs font-extrabold text-[#4f86ff] uppercase tracking-[0.12em]">
            <span className="h-px w-10 bg-current" aria-hidden="true" />
            {t.eyebrow}
          </p>
          <p className="text-[11px] font-bold text-[#a9aea5] uppercase tracking-[0.14em]">
            {t.status}
          </p>
        </div>

        <article className="border border-white/15">
          <div className="aspect-video overflow-hidden bg-[#080b12]">
            <video
              className="block h-full w-full object-cover"
              aria-label={t.videoAria}
              aria-describedby="cyclone-video-description"
              controls
              playsInline
              poster="/projects/cyclone-poster.webp"
              preload="metadata"
            >
              <source src="/videos/cyclone-demo-60s.mp4" type="video/mp4" />
              <a href="/videos/cyclone-demo-60s.mp4">
                {t.download}
              </a>
            </video>
          </div>

          <div className="grid gap-6 border-t border-white/15 px-[clamp(22px,4vw,46px)] py-[clamp(24px,3vw,36px)] md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <p className="mb-3 text-[11px] font-extrabold text-[#4f86ff] uppercase tracking-[0.12em]">
                {cyclone.kindLabel}
              </p>
              <h2 className="[font-family:var(--font-space-grotesk)] text-[clamp(2.3rem,3.8vw,3.6rem)] leading-none font-semibold tracking-[-0.05em]">
                {cyclone.title}
              </h2>
              <p className="mt-4 max-w-[610px] text-sm leading-6 text-[#c9cec5]">
                {cyclone.role}. {t.sentence}
              </p>
              <ul
                className="mt-4 flex flex-wrap gap-2"
                aria-label={t.techAria}
              >
                {cyclone.technologies.slice(0, 4).map((technology) => (
                  <li
                    className="border border-white/20 px-3 py-2 text-[11px] font-bold text-[#c9cec5] uppercase tracking-[0.08em]"
                    key={technology}
                  >
                    {technology}
                  </li>
                ))}
              </ul>
            </div>
            <div className="max-w-[360px] md:text-right">
              <p
                className="text-sm leading-6 text-[#a9aea5]"
                id="cyclone-video-description"
              >
                {t.description}
              </p>
              <div className="mt-5 flex flex-wrap justify-start gap-3 md:justify-end">
                <Link
                  className="inline-flex min-h-11 items-center gap-2 bg-[#246bfe] px-4 py-3 text-xs font-extrabold uppercase tracking-[0.1em] text-white transition-colors hover:bg-[#4f86ff] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#4f86ff]"
                  href={localePath(locale, "/projets/cyclone")}
                >
                  {t.caseStudy} <span aria-hidden="true">→</span>
                </Link>
                <a
                  className="inline-flex min-h-11 items-center gap-2 border border-white/25 px-4 py-3 text-xs font-extrabold uppercase tracking-[0.1em] transition-colors hover:border-[#4f86ff] hover:text-[#4f86ff] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#4f86ff]"
                  href={cyclone.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={t.openAria}
                >
                  {t.open} <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default FeaturedProject;
