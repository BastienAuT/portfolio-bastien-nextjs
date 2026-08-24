import Banner from "../components/banner/Banner";
import FeaturedProject from "../components/featuredProject/FeaturedProject";
import Projets from "../components/projets/Projets";
import Testimonial from "../components/testimonial/Testimonial";

const copy = {
  fr: {
    landmarksAria: "Repères sur le portfolio", landmarks: ["Full-stack, de bout en bout", "Produit · UI · API · Données · Tests", "Applications livrées en production"],
    experience: "Expérience professionnelle", responsibilities: "Produits et responsabilités", months6: "6 mois", hoffmannRole: "Développeur web full-stack", production: "Application métier en production",
    hoffmann: "J’ai fait évoluer une application de devis aéronautiques utilisée en production. J’ai créé de nouveaux modules et adapté les parcours aux réponses des utilisateurs. J’ai aussi intégré depuis Contentful les données des avions, comme le prix des places, le carburant ou les repas, puis automatisé avec Mailgun l’envoi des devis, les confirmations de réception et les relances lorsqu’une information manquait.",
    concretely: "Concrètement :", hoffmannResult: "j’ai ajouté les fonctionnalités qui manquaient à l’application en veillant à ce qu’elles s’intègrent naturellement aux parcours et à l’interface existants. Le traitement des devis a aussi gagné en automatisation, avec des données centralisées et moins d’échanges manuels.",
    month1: "1 mois", preperaRole: "Développeur JavaScript & Bubble", prepera: "Première expérience sur un projet no-code avec Bubble. J’ai participé à la création des pages et des parcours, ainsi qu’à la mise en place de plugins pour répondre à certains besoins spécifiques de l’application.", preperaResult: "mise en place de logiques métier, de quelques algorithmes et de plugins adaptés aux besoins du projet.",
    about: "À propos", approach: "Approche et compétences", aboutText: "Je travaille du cadrage produit à l’interface, aux API et aux données, avec une attention particulière portée à la maintenabilité, à la sécurité, aux performances et à l’usage réel du produit.", skillsTitle: "Compétences principales", skills: ["React", "Next.js", "TypeScript", "PostgreSQL", "Authentification", "Sécurité applicative", "API", "Temps réel", "Tests & CI", "Docker"], method: "Méthode de travail", aiTitle: "L’IA comme accélérateur, pas comme pilote automatique.", aiText: "Sur mes produits personnels, j’utilise un workflow de développement assisté par IA pour explorer et implémenter plus vite. Je conserve la responsabilité du cadrage, des choix d’architecture, de la revue du code, des tests et de la livraison.",
  },
  en: {
    landmarksAria: "Portfolio highlights", landmarks: ["Full-stack, end to end", "Product · UI · API · Data · Tests", "Applications shipped to production"],
    experience: "Professional experience", responsibilities: "Products and responsibilities", months6: "6 months", hoffmannRole: "Full-stack web developer", production: "Business application in production",
    hoffmann: "I developed an aviation quoting application used in production. I built new modules and adapted user journeys based on feedback. I also integrated aircraft data from Contentful, including seat pricing, fuel, and meals, then used Mailgun to automate quote delivery, receipt confirmations, and follow-ups when information was missing.",
    concretely: "In practice:", hoffmannResult: "I added missing features while ensuring they fitted naturally into the existing journeys and interface. Quote processing also became more automated, with centralized data and fewer manual exchanges.",
    month1: "1 month", preperaRole: "JavaScript & Bubble developer", prepera: "My first experience on a no-code project using Bubble. I helped create pages and user journeys and set up plugins to meet specific application requirements.", preperaResult: "implementation of business logic, several algorithms, and plugins tailored to the project’s needs.",
    about: "About", approach: "Approach and skills", aboutText: "I work from product scoping through interfaces, APIs, and data, with particular attention to maintainability, security, performance, and how the product is actually used.", skillsTitle: "Core skills", skills: ["React", "Next.js", "TypeScript", "PostgreSQL", "Authentication", "Application security", "APIs", "Real time", "Tests & CI", "Docker"], method: "How I work", aiTitle: "AI as an accelerator, not an autopilot.", aiText: "For my personal products, I use an AI-assisted development workflow to explore and implement faster. I remain responsible for scoping, architecture decisions, code review, testing, and delivery.",
  },
};

export function HomePage({ locale = "fr" }) {
  const t = copy[locale];
  return (
    <main>
      <Banner locale={locale} />

      <section
        className="border-y border-[#111411]/15 bg-[#111411] text-white dark:border-white/15"
        aria-label={t.landmarksAria}
      >
        <ul className="mx-auto grid w-[min(1160px,calc(100%-48px))] divide-y divide-white/15 py-2 sm:grid-cols-3 sm:divide-x sm:divide-y-0 max-sm:w-[calc(100%-28px)]">
          {t.landmarks.map((statement) => (
            <li
              className="flex items-center gap-4 py-5 sm:px-6 sm:first:pl-0 sm:last:pr-0"
              key={statement}
            >
              <span
                className="h-px w-8 shrink-0 bg-[#4f86ff]"
                aria-hidden="true"
              />
              <strong className="text-sm leading-5 font-extrabold">
                {statement}
              </strong>
            </li>
          ))}
        </ul>
      </section>

      <section
        className="scroll-mt-[72px] border-y border-[#111411]/15 bg-[#e5e4de] dark:border-white/15 dark:bg-[#151816]"
        id="experience"
      >
        <div className="mx-auto w-[min(1160px,calc(100%-48px))] py-24 max-sm:w-[calc(100%-28px)] max-sm:py-20">
          <div className="mb-14 grid gap-8 md:grid-cols-[.7fr_1.3fr]">
            <div>
              <p className="text-xs font-extrabold text-[#1557e8] uppercase tracking-[0.12em] dark:text-[#4f86ff]">
                {t.experience}
              </p>
            </div>
            <h2 className="max-w-[730px] text-[clamp(2rem,3.4vw,3.4rem)] leading-[1.02] font-black tracking-[-0.05em]">
              {t.responsibilities}
            </h2>
          </div>

          <div className="border-t border-[#111411]/20 dark:border-white/20">
            <article className="grid gap-6 border-b border-[#111411]/20 py-8 md:grid-cols-[.7fr_1.3fr] dark:border-white/20">
              <div>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-xl font-black">Hoffmann AI</h3>
                  <span className="text-xs font-extrabold text-[#1557e8] uppercase tracking-[0.1em] dark:text-[#4f86ff]">
                    {t.months6}
                  </span>
                </div>
                <p className="mt-1 text-sm text-[#5c6059] dark:text-[#a9aea5]">
                  {t.hoffmannRole}
                </p>
                <p className="mt-4 inline-flex border border-[#111411]/20 px-3 py-2 text-[11px] font-extrabold text-[#1557e8] uppercase tracking-[0.1em] dark:border-white/20 dark:text-[#4f86ff]">
                  {t.production}
                </p>
              </div>
              <div className="max-w-[690px] text-[#5c6059] dark:text-[#a9aea5]">
                <p className="leading-7">
                  {t.hoffmann}
                </p>
                <p className="mt-4 border-l-2 border-[#246bfe] pl-4 text-sm leading-6">
                  <strong className="text-[#111411] dark:text-[#edf0e8]">
                    {t.concretely}
                  </strong>{" "}
                  {t.hoffmannResult}
                </p>
              </div>
            </article>

            <article className="grid gap-6 border-b border-[#111411]/20 py-8 md:grid-cols-[.7fr_1.3fr] dark:border-white/20">
              <div>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-xl font-black">Prepera</h3>
                  <span className="text-xs font-extrabold text-[#1557e8] uppercase tracking-[0.1em] dark:text-[#4f86ff]">
                    {t.month1}
                  </span>
                </div>
                <p className="mt-1 text-sm text-[#5c6059] dark:text-[#a9aea5]">
                  {t.preperaRole}
                </p>
              </div>
              <div className="max-w-[690px] text-[#5c6059] dark:text-[#a9aea5]">
                <p className="leading-7">
                  {t.prepera}
                </p>
                <p className="mt-4 border-l-2 border-[#246bfe] pl-4 text-sm leading-6">
                  <strong className="text-[#111411] dark:text-[#edf0e8]">
                    {t.concretely}
                  </strong>{" "}
                  {t.preperaResult}
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <Testimonial locale={locale} />

      <FeaturedProject locale={locale} />

      <Projets locale={locale} />

      <section
        className="mx-auto w-[min(1160px,calc(100%-48px))] scroll-mt-[72px] py-[110px] max-sm:w-[calc(100%-28px)] max-sm:py-20"
        id="a-propos"
      >
        <div className="grid gap-12 md:grid-cols-[.72fr_1.28fr]">
          <p className="text-xs font-extrabold text-[#1557e8] uppercase tracking-[0.12em] dark:text-[#4f86ff]">
            {t.about}
          </p>
          <div>
            <h2 className="max-w-[800px] text-[clamp(1.9rem,3vw,3rem)] leading-[1.05] font-black tracking-[-0.045em]">
              {t.approach}
            </h2>

            <div className="mt-14 grid gap-12 border-t border-[#111411]/20 pt-8 md:grid-cols-[1.1fr_.9fr] dark:border-white/20">
              <p className="leading-7 text-[#5c6059] dark:text-[#a9aea5]">
                {t.aboutText}
              </p>
              <div>
                <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.1em]">
                  {t.skillsTitle}
                </p>
                <ul className="flex flex-wrap gap-2">
                  {t.skills.map((skill) => (
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

            <div className="mt-14 grid gap-8 border border-[#246bfe]/30 bg-[#246bfe]/5 p-[clamp(24px,4vw,42px)] md:grid-cols-[.72fr_1.28fr]">
              <p className="text-xs font-extrabold text-[#1557e8] uppercase tracking-[0.12em] dark:text-[#4f86ff]">
                {t.method}
              </p>
              <div>
                <h3 className="text-[clamp(1.45rem,2.2vw,2rem)] leading-tight font-black tracking-[-0.04em]">
                  {t.aiTitle}
                </h3>
                <p className="mt-4 max-w-[700px] leading-7 text-[#5c6059] dark:text-[#a9aea5]">
                  {t.aiText}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default function Home() {
  return <HomePage />;
}
