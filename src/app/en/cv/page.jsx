import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Résumé",
  description: "Résumé and professional overview of Bastien Autem, a product-minded full-stack developer specializing in React, Next.js, and TypeScript.",
  alternates: {
    canonical: "/en/cv",
    languages: { "fr-FR": "/cv", "en-US": "/en/cv" },
  },
  openGraph: {
    locale: "en_US",
    title: "Résumé · Bastien Autem",
    description: "Professional overview of Bastien Autem, product-minded full-stack developer.",
    url: "/en/cv",
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Resume · Bastien Autem",
    description: "Professional overview of Bastien Autem, product-minded full-stack developer.",
    images: ["/opengraph-image"],
  },
};

const expertise = [
  "React, Next.js, and TypeScript",
  "APIs, authentication, and SQL / NoSQL data",
  "Responsive interfaces, accessibility, and performance",
  "Real time, testing, CI, and Docker",
];

export default function EnglishResume() {
  return (
    <main>
      <header className="border-b border-white/15 bg-[#111411] text-[#edf0e8]">
        <div className="mx-auto grid w-[min(1100px,calc(100%-32px))] gap-10 py-[clamp(52px,7vw,88px)] md:grid-cols-[1.2fr_.8fr] md:items-end">
          <div>
            <p className="text-xs font-extrabold text-[#4f86ff] uppercase tracking-[0.12em]">Résumé</p>
            <h1 className="mt-5 max-w-[760px] font-[family-name:var(--font-space-grotesk)] text-[clamp(2.7rem,5.5vw,5.6rem)] leading-[0.9] font-semibold tracking-[-0.065em]">
              Bastien Autem
              <span className="mt-3 block text-[.46em] leading-tight text-[#4f86ff] tracking-[-0.04em]">Product-minded full-stack developer</span>
            </h1>
          </div>
          <div>
            <p className="leading-7 text-[#c9cec5]">I design and build web applications end to end with React, Next.js, and TypeScript, from interfaces to APIs and data.</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a className="inline-flex min-h-11 items-center bg-[#246bfe] px-5 py-3 text-xs font-extrabold uppercase tracking-[0.09em] text-white transition-colors hover:bg-[#4f86ff]" href="/CV_Bastien_Autem_portfolio_EN.pdf" download="CV-Bastien-Autem-Portfolio-EN.pdf">
                Download PDF <span className="ml-2" aria-hidden="true">↓</span>
              </a>
              <a className="inline-flex min-h-11 items-center border border-white/25 px-5 py-3 text-xs font-extrabold uppercase tracking-[0.09em] transition-colors hover:border-[#4f86ff] hover:text-[#4f86ff]" href="mailto:deh2win@gmail.com">Contact me</a>
            </div>
          </div>
        </div>
      </header>

      <div className="mx-auto w-[min(1100px,calc(100%-32px))] py-[clamp(64px,8vw,104px)]">
        <section aria-labelledby="resume-summary-title">
          <div className="grid gap-8 md:grid-cols-[.65fr_1.35fr]">
            <div>
              <p className="text-xs font-extrabold text-[#1557e8] uppercase tracking-[0.12em] dark:text-[#4f86ff]">Readable version</p>
              <h2 className="mt-4 text-[clamp(1.9rem,3vw,3rem)] leading-none font-black tracking-[-0.05em]" id="resume-summary-title">Professional overview</h2>
            </div>
            <div className="border-t border-[#111411]/20 dark:border-white/20">
              <article className="border-b border-[#111411]/20 py-7 dark:border-white/20">
                <h3 className="text-sm font-black uppercase tracking-[0.08em]">Expertise</h3>
                <ul className="mt-4 grid gap-2 text-[#5c6059] sm:grid-cols-2 dark:text-[#a9aea5]">
                  {expertise.map((item) => <li className="flex gap-3 leading-6" key={item}><span className="text-[#1557e8] dark:text-[#4f86ff]" aria-hidden="true">•</span>{item}</li>)}
                </ul>
              </article>
              <article className="border-b border-[#111411]/20 py-7 dark:border-white/20">
                <h3 className="text-sm font-black uppercase tracking-[0.08em]">Professional experience</h3>
                <p className="mt-4 leading-7 text-[#5c6059] dark:text-[#a9aea5]">At Hoffmann AI, I developed an aviation quoting application with new modules, Contentful data, and Mailgun automations. At Prepera, I contributed pages, user journeys, and JavaScript plugins in Bubble.</p>
              </article>
              <article className="border-b border-[#111411]/20 py-7 dark:border-white/20">
                <h3 className="text-sm font-black uppercase tracking-[0.08em]">Recent personal projects</h3>
                <p className="mt-4 leading-7 text-[#5c6059] dark:text-[#a9aea5]">Cyclone explores real-time communication, VortX the interactions of a social network, and Lyreah a secure EPUB reading pipeline. Their demos, repositories, and case studies are available in the selected projects.</p>
                <Link className="mt-4 inline-flex text-sm font-black text-[#1557e8] dark:text-[#4f86ff]" href="/en#projets-selectionnes">View projects <span className="ml-2" aria-hidden="true">→</span></Link>
              </article>
              <article className="py-7">
                <h3 className="text-sm font-black uppercase tracking-[0.08em]">Education and languages</h3>
                <p className="mt-4 leading-7 text-[#5c6059] dark:text-[#a9aea5]">Level 5 professional qualification in Web and Mobile Web Development (two-year higher-education level) and Opquast certification, score 740/1000. Professional English (C1) and intermediate German.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="mt-[clamp(64px,8vw,104px)]" aria-labelledby="resume-preview-title">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-5">
            <div><p className="text-xs font-extrabold text-[#1557e8] uppercase tracking-[0.12em] dark:text-[#4f86ff]">Preview</p><h2 className="mt-4 text-[clamp(1.9rem,3vw,3rem)] leading-none font-black tracking-[-0.05em]" id="resume-preview-title">2026 English PDF</h2></div>
            <a className="text-sm font-black text-[#1557e8] dark:text-[#4f86ff]" href="/CV_Bastien_Autem_portfolio_EN.pdf" download="CV-Bastien-Autem-Portfolio-EN.pdf">Download document <span aria-hidden="true">↓</span></a>
          </div>
          <figure>
            <Image src="/CV_Bastien_Autem_portfolio_EN.png" className="h-auto w-full border border-black/15 dark:border-white/15" alt="" height={2022} width={1429} sizes="(max-width: 1132px) calc(100vw - 32px), 1100px" />
            <figcaption className="mt-4 text-sm leading-6 text-[#5c6059] dark:text-[#a9aea5]">Visual preview of the English résumé. Its main content is also available as accessible text above.</figcaption>
          </figure>
        </section>
      </div>
    </main>
  );
}
