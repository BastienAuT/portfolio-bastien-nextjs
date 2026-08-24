const recommendationUrl =
  "https://www.linkedin.com/in/bastien-autem/details/recommendations/";

const Testimonial = () => {
  return (
    <section
      className="scroll-mt-[72px] border-b border-[#111411]/15 bg-[#f4f3ee] dark:border-white/15 dark:bg-[#0d0f0e]"
      id="recommandation"
      aria-labelledby="recommandation-title"
    >
      <div className="mx-auto w-[min(1160px,calc(100%-48px))] py-14 max-sm:w-[calc(100%-28px)] max-sm:py-12">
        <div className="grid gap-8 lg:grid-cols-[.65fr_1.35fr] lg:items-start lg:gap-12">
          <div>
            <p className="text-xs font-extrabold text-[#1557e8] uppercase tracking-[0.12em] dark:text-[#4f86ff]">
              Recommandation
            </p>
            <h2
              className="mt-3 max-w-[390px] text-[clamp(1.65rem,2.5vw,2.45rem)] leading-[1.05] font-black tracking-[-0.045em]"
              id="recommandation-title"
            >
              Ce qu’on dit de mon travail
            </h2>
            <p className="mt-4 max-w-[360px] text-sm leading-6 text-[#5c6059] dark:text-[#a9aea5]">
              Un retour reçu à l’issue de mon expérience chez Hoffmann AI.
            </p>
          </div>

          <figure className="relative border border-[#111411]/20 bg-[#ebeae5] p-[clamp(20px,3vw,32px)] dark:border-white/20 dark:bg-[#151816]">
            <span
              className="absolute top-2 right-4 text-[clamp(3rem,5vw,4.5rem)] leading-none font-black text-[#246bfe]/15 select-none dark:text-[#4f86ff]/20"
              aria-hidden="true"
            >
              “
            </span>

            <blockquote
              className="relative max-w-[760px] text-[clamp(1rem,1.25vw,1.18rem)] leading-[1.55] font-medium tracking-[-0.01em]"
              cite={recommendationUrl}
            >
              <p>
                « Bastien possède une solide compréhension des technologies
                Frontend et navigue avec habileté dans des défis complexes. »
              </p>
            </blockquote>

            <figcaption className="mt-6 flex flex-wrap items-end justify-between gap-5 border-t border-[#111411]/20 pt-5 dark:border-white/20">
              <div className="flex items-center gap-4">
                <span
                  className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#111411] text-[11px] font-black tracking-[0.08em] text-white dark:bg-[#edf0e8] dark:text-[#111411]"
                  aria-hidden="true"
                >
                  AH
                </span>
                <div>
                  <cite className="font-black not-italic">
                    Alexander Hoffmann
                  </cite>
                  <p className="mt-0.5 text-sm text-[#5c6059] dark:text-[#a9aea5]">
                    Ancien responsable direct · Hoffmann AI
                  </p>
                  <p className="mt-1 text-[11px] font-bold uppercase tracking-[0.08em] text-[#5c6059] dark:text-[#a9aea5]">
                    <time dateTime="2024-05-04">4 mai 2024</time> · LinkedIn
                  </p>
                </div>
              </div>

              <a
                className="inline-flex min-h-11 items-center gap-2 text-sm font-black text-[#1557e8] transition-colors hover:text-[#111411] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#246bfe] dark:text-[#4f86ff] dark:hover:text-white"
                href={recommendationUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="Voir la recommandation d’Alexander Hoffmann sur LinkedIn dans un nouvel onglet"
              >
                Voir sur LinkedIn <span aria-hidden="true">↗</span>
              </a>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
