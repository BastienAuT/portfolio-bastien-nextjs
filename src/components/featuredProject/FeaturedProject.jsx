const cycloneCaseStudy = [
  {
    label: "Enjeu",
    title: "Réunir le temps réel",
    description:
      "Concevoir un espace communautaire responsive où messages, conversations privées, présence, audio, vidéo et partage d’écran restent synchronisés, sans perdre le contrôle des permissions et de la confidentialité.",
  },
  {
    label: "Choix d’architecture",
    title: "Séparer les responsabilités",
    description:
      "Clerk gère l’identité, Next.js centralise les API et les contrôles d’accès, Supabase stocke les données et diffuse les événements privés, tandis que LiveKit transporte les médias avec des jetons courts générés côté serveur.",
  },
  {
    label: "Résultat livré",
    title: "Une expérience complète",
    description:
      "Une application full-stack déployée avec salons textuels et vocaux, messages privés, webcam et partage d’écran, mais aussi rôles, modération, confidentialité et navigation adaptée à l’ordinateur comme au mobile.",
  },
];

const FeaturedProject = () => {
  return (
    <section
      className="scroll-mt-[72px] border-y border-white/10 bg-[#111411] text-[#edf0e8]"
      id="projets"
    >
      <div className="mx-auto w-[min(1160px,calc(100%-48px))] py-[90px] max-sm:w-[calc(100%-28px)] max-sm:py-16">
        <div className="mb-7 flex flex-wrap items-center justify-between gap-x-6 gap-y-3">
          <p className="flex items-center gap-3 text-xs font-extrabold text-[#4f86ff] uppercase tracking-[0.12em]">
            <span className="h-px w-10 bg-current" />
            Mis en avant
          </p>
          <p className="text-[10px] font-bold text-[#a9aea5] uppercase tracking-[0.14em]">
            Version avancée · En ligne
          </p>
        </div>

        <article className="border border-white/15">
          <div className="aspect-video overflow-hidden bg-[#080b12]">
            <video
              className="block h-full w-full object-cover"
              aria-label="Démonstration de l’application Cyclone en une minute"
              controls
              playsInline
              poster="/projects/cyclone-poster.png"
              preload="metadata"
            >
              <source src="/videos/cyclone-demo-60s.mp4" type="video/mp4" />
              Votre navigateur ne prend pas en charge la lecture vidéo.
            </video>
          </div>

          <div className="grid gap-6 border-t border-white/15 px-[clamp(22px,4vw,46px)] py-[clamp(24px,3vw,36px)] md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <p className="mb-3 text-[10px] font-extrabold text-[#4f86ff] uppercase tracking-[0.12em]">
                Projet personnel
              </p>
              <h2 className="font-[var(--font-space-grotesk)] text-[clamp(2.3rem,3.8vw,3.6rem)] leading-none font-semibold tracking-[-0.05em]">
                Cyclone
              </h2>
              <p className="mt-4 max-w-[560px] text-sm leading-6 text-[#c9cec5]">
                Conçu et développé de bout en bout : produit, interface,
                architecture et développement full-stack.
              </p>
              <ul
                className="mt-4 flex flex-wrap gap-2"
                aria-label="Technologies principales du projet Cyclone"
              >
                {["Next.js", "Clerk", "Supabase", "LiveKit Cloud"].map(
                  (technology) => (
                    <li
                      className="border border-white/20 px-3 py-2 text-[10px] font-bold text-[#c9cec5] uppercase tracking-[0.08em]"
                      key={technology}
                    >
                      {technology}
                    </li>
                  ),
                )}
              </ul>
            </div>
            <div className="max-w-[310px] md:text-right">
              <p className="text-sm leading-6 text-[#a9aea5]">
                En une minute, découvrez Cyclone : messagerie, appels audio et
                vidéo, partage d’écran et interactions en temps réel.
              </p>
              <a
                className="mt-5 inline-flex items-center gap-2 border border-white/25 px-4 py-3 text-xs font-extrabold uppercase tracking-[0.1em] transition-colors hover:border-[#4f86ff] hover:bg-[#4f86ff] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#4f86ff]"
                href="https://cyclone-smoky.vercel.app/"
                target="_blank"
                rel="noreferrer"
                aria-label="Ouvrir l’application Cyclone dans un nouvel onglet"
              >
                Ouvrir Cyclone <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>

          <section
            className="grid border-t border-white/15 md:grid-cols-3"
            aria-label="Mini étude de cas Cyclone"
          >
            {cycloneCaseStudy.map((item, index) => (
              <div
                className="border-t border-white/15 p-[clamp(22px,3vw,36px)] first:border-t-0 md:border-t-0 md:border-l md:first:border-l-0"
                key={item.label}
              >
                <p className="flex items-center justify-between gap-4 text-[10px] font-extrabold text-[#4f86ff] uppercase tracking-[0.12em]">
                  <span>{item.label}</span>
                  <span className="text-[#a9aea5]" aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </p>
                <h3 className="mt-5 font-[var(--font-space-grotesk)] text-xl leading-tight font-semibold tracking-[-0.03em]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#a9aea5]">
                  {item.description}
                </p>
              </div>
            ))}
          </section>
        </article>
      </div>
    </section>
  );
};

export default FeaturedProject;
