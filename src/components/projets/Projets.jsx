"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const projectPresentation = {
  newsalist: {
    category: "Actualité",
    cover: "/projects/newsalist-cover.png",
    description:
      "Pour alimenter et monétiser un média en continu, j’ai intégré un fil d’actualités piloté par Contentful et des emplacements Google AdSense responsives.",
  },
  jetscanner: {
    category: "Recherche de vols",
    cover: "/projects/jetscanner-cover.png",
    description:
      "Pour accélérer la réservation, j’ai développé la recherche en direct, le filtrage des vols et la géolocalisation afin de faire remonter les départs les plus proches.",
  },
  crwnclothing: {
    category: "E-commerce",
    cover: "/projects/crwn-clothing-cover.png",
    description:
      "Pour proposer un parcours e-commerce de bout en bout, j’ai relié catalogue par catégories, authentification Firebase, panier Redux et paiement Stripe jusqu’à la validation de commande.",
  },
  moneyconverter: {
    category: "Outil web",
    cover: "/projects/money-converter-cover.png",
    description:
      "Pour rendre la conversion immédiate, j’ai créé un outil React qui convertit un montant en euros vers 32 devises, avec recherche et mise à jour du résultat à chaque saisie.",
  },
  vortx: {
    category: "Réseau social · Microblogging",
    cover: "/projects/vortx-cover-v2.png",
    description:
      "Pour structurer des échanges publics autour d’un fil d’actualité, j’ai conçu un réseau social de microblogging avec publications, commentaires, likes, repartages, abonnements et messagerie entre membres.",
  },
};

const fallbackProjects = [
  {
    _id: "fallback-jetscanner",
    title: "JetScanner",
    desc: projectPresentation.jetscanner.description,
    url: "https://www.jetscanner.io",
    ...projectPresentation.jetscanner,
  },
  {
    _id: "fallback-newsalist",
    title: "Newsalist",
    desc: projectPresentation.newsalist.description,
    url: "https://www.newsalist.net",
    ...projectPresentation.newsalist,
  },
  {
    _id: "fallback-vortx",
    title: "Vortx",
    desc: projectPresentation.vortx.description,
    url: "https://vortx-five.vercel.app/",
    ...projectPresentation.vortx,
  },
];

const getProjectPresentation = (project) => {
  const normalizedTitle = project.title.toLowerCase().replace(/[^a-z0-9]/g, "");
  const presentation = Object.entries(projectPresentation).find(([key]) =>
    normalizedTitle.includes(key),
  )?.[1];

  return {
    category: presentation?.category || "Produit numérique",
    cover:
      presentation?.cover ||
      project.image ||
      "/projects/newsalist-cover.png",
    description: presentation?.description,
  };
};

const Projets = () => {
  const [projects, setProjects] = useState(fallbackProjects);
  const [activeSlide, setActiveSlide] = useState(0);
  const [isAutoplayPaused, setIsAutoplayPaused] = useState(false);
  const [isCarouselHovered, setIsCarouselHovered] = useState(false);
  const carouselRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [proResponse, personalResponse] = await Promise.all([
          fetch("/api/projetspro"),
          fetch("/api/projets"),
        ]);

        if (!proResponse.ok || !personalResponse.ok) {
          throw new Error("Impossible de charger les projets");
        }

        const [proData, personalData] = await Promise.all([
          proResponse.json(),
          personalResponse.json(),
        ]);

        const addPresentation = (project) => {
          const presentation = getProjectPresentation(project);

          return {
            ...project,
            ...presentation,
            desc: presentation.description || project.desc,
          };
        };
        const professional = (proData.projetspro || []).map(addPresentation);
        const personal = (personalData.projets || []).map(addPresentation);
        const vortxProject = personal.find(
          (project) =>
            project.title.toLowerCase().replace(/[^a-z0-9]/g, "") === "vortx",
        );
        const featuredPersonalProject = vortxProject || personal[0];

        const selectedProjects = [
          ...professional.slice(0, 2),
          ...(featuredPersonalProject ? [featuredPersonalProject] : []),
        ];

        setProjects(
          selectedProjects.length === 3 ? selectedProjects : fallbackProjects,
        );
      } catch (error) {
        console.warn("Project API unavailable, using local content:", error);
        setProjects(fallbackProjects);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (
      projects.length < 2 ||
      isAutoplayPaused ||
      isCarouselHovered ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return undefined;
    }

    const timer = window.setTimeout(() => {
      const nextIndex = (activeSlide + 1) % projects.length;
      const carousel = carouselRef.current;

      carousel?.scrollTo({
        left: carousel.clientWidth * nextIndex,
        behavior: "smooth",
      });
      setActiveSlide(nextIndex);
    }, 4000);

    return () => window.clearTimeout(timer);
  }, [
    activeSlide,
    isAutoplayPaused,
    isCarouselHovered,
    projects.length,
  ]);

  const goToSlide = (index) => {
    const carousel = carouselRef.current;

    if (!carousel || projects.length === 0) {
      return;
    }

    const nextIndex = Math.max(0, Math.min(index, projects.length - 1));
    carousel.scrollTo({
      left: carousel.clientWidth * nextIndex,
      behavior: "smooth",
    });
    setActiveSlide(nextIndex);
  };

  const handleCarouselScroll = () => {
    const carousel = carouselRef.current;

    if (!carousel || carousel.clientWidth === 0) {
      return;
    }

    setActiveSlide(Math.round(carousel.scrollLeft / carousel.clientWidth));
  };

  const handleCarouselKeyDown = (event) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      goToSlide(activeSlide - 1);
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      goToSlide(activeSlide + 1);
    }
  };

  return (
    <section
      className="mx-auto w-[min(1160px,calc(100%-48px))] scroll-mt-[72px] py-[110px] max-sm:w-[calc(100%-28px)] max-sm:py-20"
      id="projets-selectionnes"
    >
      <div className="mb-16 flex flex-wrap items-end justify-between gap-8">
        <div>
          <p className="mb-4 text-xs font-extrabold text-[#1557e8] uppercase tracking-[0.12em] dark:text-[#4f86ff]">
            Travaux récents
          </p>
          <h2 className="max-w-[700px] text-[clamp(2rem,3.6vw,3.5rem)] leading-[0.98] font-black tracking-[-0.055em]">
            Projets sélectionnés
          </h2>
        </div>
        <p className="max-w-[350px] text-sm leading-6 text-[#5c6059] dark:text-[#a9aea5]">
          Applications métier, plateformes éditoriales et produits web conçus
          dans des contraintes réelles.
        </p>
      </div>

      {projects.length > 0 && (
        <div className="border-y border-[#111411]/20 dark:border-white/20">
          <div className="flex items-center justify-between gap-6 py-5">
            <div>
              <p className="text-xs font-extrabold text-[#1557e8] uppercase tracking-[0.12em] dark:text-[#4f86ff]">
                Parcourir les projets
              </p>
              <p
                className="mt-1 text-xs text-[#5c6059] dark:text-[#a9aea5]"
                aria-live={isAutoplayPaused ? "polite" : "off"}
              >
                {String(activeSlide + 1).padStart(2, "0")} /{" "}
                {String(projects.length).padStart(2, "0")}
              </p>
            </div>

            <div className="flex gap-2">
              <button
                className="h-11 cursor-pointer border border-[#111411]/25 px-3 text-[10px] font-extrabold uppercase tracking-[0.1em] transition-colors hover:border-[#246bfe] hover:bg-[#246bfe] hover:text-white dark:border-white/25"
                type="button"
                onClick={() => setIsAutoplayPaused((isPaused) => !isPaused)}
                aria-label={
                  isAutoplayPaused
                    ? "Relancer le défilement automatique"
                    : "Mettre le défilement automatique en pause"
                }
              >
                {isAutoplayPaused ? "Lecture" : "Pause"}
              </button>
              <button
                className="grid size-11 cursor-pointer place-items-center border border-[#111411]/25 text-lg transition-colors hover:border-[#246bfe] hover:bg-[#246bfe] hover:text-white disabled:cursor-not-allowed disabled:opacity-25 dark:border-white/25"
                type="button"
                onClick={() => goToSlide(activeSlide - 1)}
                disabled={activeSlide === 0}
                aria-label="Projet précédent"
              >
                ←
              </button>
              <button
                className="grid size-11 cursor-pointer place-items-center border border-[#111411]/25 text-lg transition-colors hover:border-[#246bfe] hover:bg-[#246bfe] hover:text-white disabled:cursor-not-allowed disabled:opacity-25 dark:border-white/25"
                type="button"
                onClick={() => goToSlide(activeSlide + 1)}
                disabled={activeSlide === projects.length - 1}
                aria-label="Projet suivant"
              >
                →
              </button>
            </div>
          </div>

          <div
            ref={carouselRef}
            className="flex snap-x snap-mandatory overflow-x-auto overscroll-x-contain [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            onScroll={handleCarouselScroll}
            onKeyDown={handleCarouselKeyDown}
            tabIndex={0}
            role="region"
            aria-roledescription="carrousel"
            aria-label="Projets sélectionnés"
            onMouseEnter={() => setIsCarouselHovered(true)}
            onMouseLeave={() => setIsCarouselHovered(false)}
            onFocusCapture={() => setIsCarouselHovered(true)}
            onBlurCapture={() => setIsCarouselHovered(false)}
          >
            {projects.map((project, index) => (
              <article
                key={project._id}
                className="grid min-w-full snap-start overflow-hidden border-t border-[#111411]/20 md:grid-cols-[1.35fr_.65fr] dark:border-white/20"
                aria-label={`${index + 1} sur ${projects.length} : ${
                  project.title
                }`}
              >
                <a
                  className="group relative grid aspect-[16/9] place-items-center overflow-hidden bg-[#111411] md:aspect-auto md:min-h-[390px]"
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Voir le projet ${project.title}`}
                >
                  <Image
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                    src={project.cover}
                    alt={`Direction visuelle du projet ${project.title}`}
                    fill
                    priority={index === 0}
                    sizes="(max-width: 767px) 100vw, 68vw"
                  />
                  <span
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"
                    aria-hidden="true"
                  />
                </a>

                <div className="flex min-h-[390px] flex-col justify-between bg-[#e5e4de] p-[clamp(26px,4vw,48px)] max-md:min-h-0 dark:bg-[#151816]">
                  <div>
                    <p className="text-[10px] font-extrabold text-[#1557e8] uppercase tracking-[0.12em] dark:text-[#4f86ff]">
                      {project.category}
                    </p>
                    <h3 className="mt-4 text-[clamp(1.8rem,2.8vw,2.7rem)] leading-none font-black tracking-[-0.05em]">
                      {project.title}
                    </h3>
                    <p className="mt-6 leading-7 text-[#5c6059] dark:text-[#a9aea5]">
                      {project.desc}
                    </p>
                  </div>
                  <a
                    className="mt-10 flex items-center justify-between border-t border-[#111411]/20 pt-4 text-sm font-black dark:border-white/20"
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Découvrir <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </article>
            ))}
          </div>

          <div className="flex gap-2 py-5" aria-hidden="true">
            {projects.map((project, index) => (
              <span
                key={project._id}
                className={`h-1 transition-all duration-300 ${
                  index === activeSlide
                    ? "w-10 bg-[#246bfe]"
                    : "w-5 bg-[#111411]/20 dark:bg-white/20"
                }`}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default Projets;
