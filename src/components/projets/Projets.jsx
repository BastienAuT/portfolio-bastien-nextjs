import Image from "next/image";
import Link from "next/link";
import {
  projects,
  personalProjects,
  professionalProjects,
} from "@/src/data/projects";
import { localizeProjects } from "@/src/data/projects.en";
import { localePath } from "@/src/lib/i18n";

const copy = {
  fr: { caseStudy: "Voir l’étude de cas", open: "Ouvrir le site", tech: "Technologies utilisées pour", openAria: "Ouvrir le site", repoAria: "Ouvrir le dépôt GitHub de", recent: "Travaux récents", title: "Projets sélectionnés", intro: "Deux réalisations menées en contexte professionnel et quatre produits personnels conçus de bout en bout, dont Cyclone présenté ci-dessus.", proEyebrow: "01 · Contexte professionnel", proTitle: "Réalisations professionnelles", proDescription: "Des fonctionnalités livrées dans un cadre de travail réel, avec un périmètre précis et des contraintes produit existantes.", personalEyebrow: "02 · Recherche personnelle", personalTitle: "Produits personnels", personalDescription: "Des applications conçues et développées de bout en bout pour approfondir l’architecture, la qualité et l’expérience produit." },
  en: { caseStudy: "View case study", open: "Open website", tech: "Technologies used for", openAria: "Open the website", repoAria: "Open the GitHub repository for", recent: "Recent work", title: "Selected projects", intro: "Two projects delivered in a professional setting and four personal products designed and built end to end, including Cyclone above.", proEyebrow: "01 · Professional context", proTitle: "Professional work", proDescription: "Features delivered in a real work environment, within a defined scope and existing product constraints.", personalEyebrow: "02 · Personal exploration", personalTitle: "Personal products", personalDescription: "Applications designed and developed end to end to deepen my work on architecture, quality, and product experience." },
};

const ProjectCard = ({ project, locale, t }) => {
  return (
    <article className="group flex h-full flex-col overflow-hidden border border-[#111411]/20 bg-[#ebeae5] transition-colors hover:border-[#246bfe] dark:border-white/20 dark:bg-[#151816] dark:hover:border-[#4f86ff]">
      <Link
        className="relative block aspect-[16/9] overflow-hidden bg-[#111411] focus-visible:outline-2 focus-visible:outline-offset-[-3px] focus-visible:outline-[#246bfe]"
        href={localePath(locale, `/projets/${project.slug}`)}
        aria-label={`${t.caseStudy} ${project.title}`}
      >
        <Image
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025] motion-reduce:transform-none motion-reduce:transition-none"
          src={project.cover}
          alt={`${locale === "en" ? "Preview of" : "Aperçu du projet"} ${project.title}`}
          fill
          sizes="(max-width: 767px) calc(100vw - 28px), (max-width: 1160px) calc((100vw - 72px) / 2), 568px"
        />
        <span
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"
          aria-hidden="true"
        />
      </Link>

      <div className="flex flex-1 flex-col p-[clamp(24px,3vw,38px)]">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-[11px] font-extrabold uppercase tracking-[0.11em]">
          <span className="bg-[#246bfe] px-2.5 py-1.5 text-white">
            {project.kindLabel}
          </span>
          {project.category && (
            <span className="text-[#5c6059] dark:text-[#a9aea5]">
              {project.category}
            </span>
          )}
        </div>

        <h4 className="mt-6 text-[clamp(1.8rem,2.8vw,2.7rem)] leading-none font-black tracking-[-0.05em]">
          {project.title}
        </h4>
        <p className="mt-5 leading-7 text-[#5c6059] dark:text-[#a9aea5]">
          {project.summary}
        </p>

        {project.technologies?.length > 0 && (
          <ul
            className="mt-6 flex flex-wrap gap-2"
            aria-label={`${t.tech} ${project.title}`}
          >
            {project.technologies.slice(0, 4).map((technology) => (
              <li
                className="border border-[#111411]/15 px-2.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.06em] dark:border-white/15"
                key={technology}
              >
                {technology}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-1 border-t border-[#111411]/20 pt-3 dark:border-white/20">
          <Link
            className="inline-flex min-h-11 items-center text-sm font-black text-[#1557e8] transition-colors hover:text-[#111411] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#246bfe] dark:text-[#4f86ff] dark:hover:text-white"
            href={localePath(locale, `/projets/${project.slug}`)}
          >
            {t.caseStudy} <span aria-hidden="true">→</span>
          </Link>
          {project.demoUrl && (
            <a
              className="inline-flex min-h-11 items-center text-xs font-bold text-[#5c6059] transition-colors hover:text-[#1557e8] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#246bfe] dark:text-[#a9aea5] dark:hover:text-[#4f86ff]"
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`${t.openAria} ${project.title} ${locale === "en" ? "in a new tab" : "dans un nouvel onglet"}`}
            >
              {t.open} <span aria-hidden="true">↗</span>
            </a>
          )}
          {project.repositoryUrl && (
            <a
              className="inline-flex min-h-11 items-center text-xs font-bold text-[#5c6059] transition-colors hover:text-[#1557e8] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#246bfe] dark:text-[#a9aea5] dark:hover:text-[#4f86ff]"
              href={project.repositoryUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`${t.repoAria} ${project.title} ${locale === "en" ? "in a new tab" : "dans un nouvel onglet"}`}
            >
              GitHub <span aria-hidden="true">↗</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

const ProjectGroup = ({
  eyebrow,
  title,
  description,
  projects,
  locale,
  t,
  withTopMargin = true,
}) => {
  if (!projects?.length) {
    return null;
  }

  const headingId = `${projects[0].kind}-projects-title`;

  return (
    <section
      className={withTopMargin ? "mt-20" : undefined}
      aria-labelledby={headingId}
    >
      <div className="mb-8 grid gap-5 border-t border-[#111411]/20 pt-6 md:grid-cols-[.72fr_1.28fr] dark:border-white/20">
        <p className="text-xs font-extrabold text-[#1557e8] uppercase tracking-[0.12em] dark:text-[#4f86ff]">
          {eyebrow}
        </p>
        <div>
          <h3
            className="text-[clamp(1.65rem,2.5vw,2.35rem)] leading-none font-black tracking-[-0.045em]"
            id={headingId}
          >
            {title}
          </h3>
          <p className="mt-4 max-w-[650px] leading-7 text-[#5c6059] dark:text-[#a9aea5]">
            {description}
          </p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} locale={locale} t={t} />
        ))}
      </div>
    </section>
  );
};

const Projets = ({ locale = "fr" }) => {
  const t = copy[locale];
  const localizedProjects = locale === "en" ? localizeProjects(projects) : projects;
  const localizedProfessional = locale === "en"
    ? localizedProjects.filter((project) => project.kind === "professional")
    : professionalProjects;
  const localizedPersonal = locale === "en"
    ? localizedProjects.filter((project) => project.kind === "personal" && project.slug !== "cyclone")
    : personalProjects;
  return (
    <section
      className="mx-auto w-[min(1160px,calc(100%-48px))] scroll-mt-[72px] py-[110px] max-sm:w-[calc(100%-28px)] max-sm:py-20"
      id="projets-selectionnes"
    >
      <div className="mb-16 flex flex-wrap items-end justify-between gap-8">
        <div>
          <p className="mb-4 text-xs font-extrabold text-[#1557e8] uppercase tracking-[0.12em] dark:text-[#4f86ff]">
            {t.recent}
          </p>
          <h2 className="max-w-[700px] text-[clamp(2rem,3.6vw,3.5rem)] leading-[0.98] font-black tracking-[-0.055em]">
            {t.title}
          </h2>
        </div>
        <p className="max-w-[390px] text-sm leading-6 text-[#5c6059] dark:text-[#a9aea5]">
          {t.intro}
        </p>
      </div>

      <ProjectGroup
        eyebrow={t.proEyebrow}
        title={t.proTitle}
        description={t.proDescription}
        projects={localizedProfessional}
        locale={locale}
        t={t}
        withTopMargin={false}
      />

      <ProjectGroup
        eyebrow={t.personalEyebrow}
        title={t.personalTitle}
        description={t.personalDescription}
        projects={localizedPersonal}
        locale={locale}
        t={t}
      />
    </section>
  );
};

export default Projets;
