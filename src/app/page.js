import Banner from "../components/banner/Banner";
import FeaturedProject from "../components/featuredProject/FeaturedProject";
import Projets from "../components/projets/Projets";

export default function Home() {
  return (
    <main>
      <Banner />
      <FeaturedProject />

      <section
        className="scroll-mt-[72px] border-y border-[#111411]/15 bg-[#e5e4de] dark:border-white/15 dark:bg-[#151816]"
        id="experience"
      >
        <div className="mx-auto w-[min(1160px,calc(100%-48px))] py-24 max-sm:w-[calc(100%-28px)] max-sm:py-20">
          <div className="mb-14 grid gap-8 md:grid-cols-[.7fr_1.3fr]">
            <div>
              <p className="text-xs font-extrabold text-[#1557e8] uppercase tracking-[0.12em] dark:text-[#4f86ff]">
                Expérience professionnelle
              </p>
            </div>
            <h2 className="max-w-[730px] text-[clamp(2rem,3.4vw,3.4rem)] leading-[1.02] font-black tracking-[-0.05em]">
              Produits et responsabilités
            </h2>
          </div>

          <div className="border-t border-[#111411]/20 dark:border-white/20">
            <article className="grid gap-6 border-b border-[#111411]/20 py-8 md:grid-cols-[.7fr_1.3fr] dark:border-white/20">
              <div>
                <h3 className="text-xl font-black">Hoffmann AI</h3>
                <p className="mt-1 text-sm text-[#5c6059] dark:text-[#a9aea5]">
                  Développeur web full-stack
                </p>
                <p className="mt-4 inline-flex border border-[#111411]/20 px-3 py-2 text-[10px] font-extrabold text-[#1557e8] uppercase tracking-[0.1em] dark:border-white/20 dark:text-[#4f86ff]">
                  Application métier en production
                </p>
              </div>
              <div className="max-w-[690px] text-[#5c6059] dark:text-[#a9aea5]">
                <p className="leading-7">
                  J’ai fait évoluer une application de devis aéronautiques
                  utilisée en production. J’ai créé de nouveaux modules et
                  adapté les parcours aux réponses des utilisateurs. J’ai aussi
                  intégré depuis Contentful les données des avions, comme le
                  prix des places, le carburant ou les repas, puis automatisé
                  avec Mailgun l’envoi des devis, les confirmations de réception
                  et les relances lorsqu’une information manquait.
                </p>
                <p className="mt-4 border-l-2 border-[#246bfe] pl-4 text-sm leading-6">
                  <strong className="text-[#111411] dark:text-[#edf0e8]">
                    Concrètement :
                  </strong>{" "}
                  j’ai ajouté les fonctionnalités qui manquaient à l’application
                  en veillant à ce qu’elles s’intègrent naturellement aux
                  parcours et à l’interface existants. Le traitement des devis
                  a aussi gagné en automatisation, avec des données centralisées
                  et moins d’échanges manuels.
                </p>
              </div>
            </article>

            <article className="grid gap-6 border-b border-[#111411]/20 py-8 md:grid-cols-[.7fr_1.3fr] dark:border-white/20">
              <div>
                <h3 className="text-xl font-black">Prepera</h3>
                <p className="mt-1 text-sm text-[#5c6059] dark:text-[#a9aea5]">
                  Développeur JavaScript & Bubble
                </p>
              </div>
              <div className="max-w-[690px] text-[#5c6059] dark:text-[#a9aea5]">
                <p className="leading-7">
                  Première expérience sur un projet no-code avec Bubble. J’ai
                  participé à la création des pages et des parcours, ainsi qu’à
                  la mise en place de plugins pour répondre à certains besoins
                  spécifiques de l’application.
                </p>
                <p className="mt-4 border-l-2 border-[#246bfe] pl-4 text-sm leading-6">
                  <strong className="text-[#111411] dark:text-[#edf0e8]">
                    Concrètement :
                  </strong>{" "}
                  mise en place de logiques métier, de quelques algorithmes et
                  de plugins adaptés aux besoins du projet.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <Projets />

      <section
        className="mx-auto w-[min(1160px,calc(100%-48px))] scroll-mt-[72px] py-[110px] max-sm:w-[calc(100%-28px)] max-sm:py-20"
        id="a-propos"
      >
        <div className="grid gap-12 md:grid-cols-[.72fr_1.28fr]">
          <p className="text-xs font-extrabold text-[#1557e8] uppercase tracking-[0.12em] dark:text-[#4f86ff]">
            À propos
          </p>
          <div>
            <h2 className="max-w-[800px] text-[clamp(1.9rem,3vw,3rem)] leading-[1.05] font-black tracking-[-0.045em]">
              Approche et compétences
            </h2>

            <div className="mt-14 grid gap-12 border-t border-[#111411]/20 pt-8 md:grid-cols-[1.1fr_.9fr] dark:border-white/20">
              <p className="leading-7 text-[#5c6059] dark:text-[#a9aea5]">
                Je travaille de la conception de l’interface à l’intégration
                des API, avec une attention particulière portée à la
                maintenabilité, aux performances et à l’usage réel du produit.
              </p>
              <div>
                <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.1em]">
                  Compétences principales
                </p>
                <ul className="flex flex-wrap gap-2">
                  {[
                    "React",
                    "Next.js",
                    "JavaScript",
                    "Supabase / PostgreSQL",
                    "LiveKit Cloud",
                    "API",
                    "Temps réel",
                    "Performance",
                  ].map((skill) => (
                    <li
                      key={skill}
                      className="border border-[#111411]/20 px-3 py-2 text-xs font-bold transition-colors hover:border-[#246bfe] hover:bg-[#246bfe] hover:text-white dark:border-white/20"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
