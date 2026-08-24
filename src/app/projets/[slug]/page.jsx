import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects, projectsBySlug } from "@/src/data/projects";

export const generateStaticParams = () =>
  projects.map((project) => ({ slug: project.slug }));

export const generateMetadata = async ({ params }) => {
  const { slug } = await params;
  const project = projectsBySlug[slug];

  if (!project) {
    return {};
  }

  const title = `${project.title} · Étude de cas`;

  return {
    title,
    description: project.summary,
    alternates: {
      canonical: `/projets/${project.slug}`,
    },
    openGraph: {
      type: "article",
      title,
      description: project.summary,
      url: `/projets/${project.slug}`,
      images: ["/opengraph-image"],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: project.summary,
      images: ["/opengraph-image"],
    },
  };
};

const CaseStudyPage = async ({ params }) => {
  const { slug } = await params;
  const project = projectsBySlug[slug];

  if (!project) {
    notFound();
  }

  return (
    <main>
      <header className="border-b border-white/15 bg-[#111411] text-[#edf0e8]">
        <div className="mx-auto w-[min(1160px,calc(100%-48px))] py-[clamp(48px,7vw,88px)] max-sm:w-[calc(100%-28px)]">
          <Link
            className="inline-flex items-center gap-2 text-xs font-extrabold text-[#a9aea5] uppercase tracking-[0.1em] transition-colors hover:text-[#4f86ff]"
            href="/#projets-selectionnes"
          >
            <span aria-hidden="true">←</span> Tous les projets
          </Link>

          <div className="mt-14 grid items-end gap-10 md:grid-cols-[1.2fr_.8fr]">
            <div>
              <div className="flex flex-wrap items-center gap-3 text-[11px] font-extrabold uppercase tracking-[0.12em]">
                <span className="bg-[#246bfe] px-3 py-2 text-white">
                  {project.kindLabel}
                </span>
                <span className="text-[#a9aea5]">{project.category}</span>
              </div>
              <h1 className="mt-7 font-[family-name:var(--font-space-grotesk)] text-[clamp(3.2rem,7vw,6.8rem)] leading-[0.85] font-semibold tracking-[-0.07em]">
                {project.title}
              </h1>
            </div>
            <div>
              <p className="text-[clamp(1rem,1.6vw,1.2rem)] leading-8 text-[#c9cec5]">
                {project.summary}
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  className="inline-flex min-h-11 items-center bg-[#246bfe] px-5 py-3 text-xs font-extrabold uppercase tracking-[0.09em] text-white transition-colors hover:bg-[#4f86ff]"
                  href={project.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Ouvrir l’application <span className="ml-2" aria-hidden="true">↗</span>
                </a>
                {project.repositoryUrl && (
                  <a
                    className="inline-flex min-h-11 items-center border border-white/25 px-5 py-3 text-xs font-extrabold uppercase tracking-[0.09em] transition-colors hover:border-[#4f86ff] hover:text-[#4f86ff]"
                    href={project.repositoryUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Code source <span className="ml-2" aria-hidden="true">↗</span>
                  </a>
                )}
              </div>
            </div>
          </div>

          <div className="relative mt-14 aspect-[16/9] overflow-hidden border border-white/15 bg-[#080b12]">
            <Image
              className="object-cover"
              src={project.cover}
              alt={`Aperçu de ${project.title}`}
              fill
              priority
              sizes="(max-width: 1200px) 100vw, 1160px"
            />
          </div>

          <dl className="grid border-x border-b border-white/15 md:grid-cols-3">
            <div className="border-b border-white/15 p-[clamp(22px,3vw,34px)] md:border-r md:border-b-0">
              <dt className="text-[11px] font-extrabold text-[#4f86ff] uppercase tracking-[0.12em]">
                Cadre
              </dt>
              <dd className="mt-3 text-sm leading-6 text-[#c9cec5]">
                {project.scope}
              </dd>
            </div>
            <div className="border-b border-white/15 p-[clamp(22px,3vw,34px)] md:border-r md:border-b-0">
              <dt className="text-[11px] font-extrabold text-[#4f86ff] uppercase tracking-[0.12em]">
                Mon rôle et ma contribution
              </dt>
              <dd className="mt-3 text-sm leading-6 text-[#c9cec5]">
                <span className="block font-extrabold text-[#edf0e8]">
                  {project.role}
                </span>
                <span className="mt-2 block">{project.contribution}</span>
              </dd>
            </div>
            <div className="p-[clamp(22px,3vw,34px)]">
              <dt className="text-[11px] font-extrabold text-[#4f86ff] uppercase tracking-[0.12em]">
                Stack principale
              </dt>
              <dd className="mt-3 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    className="border border-white/20 px-2.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.06em] text-[#c9cec5]"
                    key={technology}
                  >
                    {technology}
                  </span>
                ))}
              </dd>
            </div>
          </dl>
        </div>
      </header>

      <div className="mx-auto w-[min(1160px,calc(100%-48px))] py-[110px] max-sm:w-[calc(100%-28px)] max-sm:py-20">
        <section aria-labelledby="case-narrative-title">
          <p className="text-xs font-extrabold text-[#1557e8] uppercase tracking-[0.12em] dark:text-[#4f86ff]">
            Étude de cas
          </p>
          <h2
            className="mt-4 max-w-[780px] text-[clamp(2rem,3.6vw,3.5rem)] leading-[0.98] font-black tracking-[-0.055em]"
            id="case-narrative-title"
          >
            Du contexte aux choix de conception
          </h2>

          <div className="mt-14 border-t border-[#111411]/20 dark:border-white/20">
            {[
              ["01", "Contexte", project.context],
              ["02", "Enjeu et contraintes", project.challenge],
              ["03", "Approche", project.approach],
              ["04", "Choix et compromis", project.tradeoffs],
              ["05", "Résultat observable", project.result],
            ].map(([number, title, description]) => (
              <article
                className="grid gap-5 border-b border-[#111411]/20 py-8 md:grid-cols-[.25fr_.47fr_1.28fr] dark:border-white/20"
                key={title}
              >
                <p className="text-xs font-extrabold text-[#1557e8] dark:text-[#4f86ff]">
                  {number}
                </p>
                <h3 className="text-xl font-black tracking-[-0.03em]">{title}</h3>
                <p className="max-w-[680px] leading-7 text-[#5c6059] dark:text-[#a9aea5]">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-[110px]" aria-labelledby="case-details-title">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-xs font-extrabold text-[#1557e8] uppercase tracking-[0.12em] dark:text-[#4f86ff]">
                Points clés
              </p>
              <h2
                className="mt-4 text-[clamp(2rem,3.2vw,3rem)] leading-none font-black tracking-[-0.05em]"
                id="case-details-title"
              >
                Ce que le projet démontre
              </h2>
            </div>
          </div>

          <div className="grid border border-[#111411]/20 md:grid-cols-3 dark:border-white/20">
            {project.highlights.map((highlight, index) => (
              <article
                className="border-t border-[#111411]/20 p-[clamp(24px,3vw,36px)] first:border-t-0 md:border-t-0 md:border-l md:first:border-l-0 dark:border-white/20"
                key={highlight.title}
              >
                <div className="flex items-center justify-between gap-4 text-[11px] font-extrabold text-[#1557e8] uppercase tracking-[0.11em] dark:text-[#4f86ff]">
                  <span>{highlight.label}</span>
                  <span className="text-[#8a8f87]" aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-black tracking-[-0.035em]">
                  {highlight.title}
                </h3>
                <p className="mt-4 text-sm leading-6 text-[#5c6059] dark:text-[#a9aea5]">
                  {highlight.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section
          className="mt-[110px]"
          aria-labelledby="case-perspective-title"
        >
          <p className="text-xs font-extrabold text-[#1557e8] uppercase tracking-[0.12em] dark:text-[#4f86ff]">
            Regard critique
          </p>
          <h2
            className="mt-4 text-[clamp(2rem,3.2vw,3rem)] leading-none font-black tracking-[-0.05em]"
            id="case-perspective-title"
          >
            Limites et suite logique
          </h2>

          <div className="mt-10 grid border border-[#111411]/20 md:grid-cols-2 dark:border-white/20">
            <article className="border-b border-[#111411]/20 p-[clamp(24px,3vw,36px)] md:border-r md:border-b-0 dark:border-white/20">
              <p className="text-[11px] font-extrabold text-[#1557e8] uppercase tracking-[0.11em] dark:text-[#4f86ff]">
                Limite actuelle
              </p>
              <p className="mt-5 leading-7 text-[#5c6059] dark:text-[#a9aea5]">
                {project.limitations}
              </p>
            </article>
            <article className="p-[clamp(24px,3vw,36px)]">
              <p className="text-[11px] font-extrabold text-[#1557e8] uppercase tracking-[0.11em] dark:text-[#4f86ff]">
                Prochaine étape
              </p>
              <p className="mt-5 leading-7 text-[#5c6059] dark:text-[#a9aea5]">
                {project.nextStep}
              </p>
            </article>
          </div>
        </section>

        <div className="mt-[110px] flex flex-wrap items-center justify-between gap-6 border-t border-[#111411]/20 pt-8 dark:border-white/20">
          <Link
            className="text-sm font-black text-[#1557e8] transition-colors hover:text-[#111411] dark:text-[#4f86ff] dark:hover:text-white"
            href="/#projets-selectionnes"
          >
            ← Revenir aux projets
          </Link>
          <a
            className="inline-flex min-h-11 items-center bg-[#246bfe] px-5 py-3 text-xs font-extrabold uppercase tracking-[0.09em] text-white transition-colors hover:bg-[#1557e8] dark:hover:bg-[#4f86ff]"
            href={project.demoUrl}
            target="_blank"
            rel="noreferrer"
          >
            Découvrir {project.title} <span className="ml-2" aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </main>
  );
};

export default CaseStudyPage;
