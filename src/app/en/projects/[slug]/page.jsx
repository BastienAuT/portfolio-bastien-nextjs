import { notFound } from "next/navigation";
import { projects } from "@/src/data/projects";
import { localizeProjects } from "@/src/data/projects.en";
import { CaseStudyContent } from "@/src/app/projets/[slug]/page";

const englishProjects = localizeProjects(projects);
const englishProjectsBySlug = Object.fromEntries(
  englishProjects.map((project) => [project.slug, project]),
);

export const generateStaticParams = () =>
  englishProjects.map((project) => ({ slug: project.slug }));

export const generateMetadata = async ({ params }) => {
  const { slug } = await params;
  const project = englishProjectsBySlug[slug];

  if (!project) return {};

  const title = `${project.title} · Case study`;

  return {
    title,
    description: project.summary,
    alternates: {
      canonical: `/en/projects/${slug}`,
      languages: {
        "fr-FR": `/projets/${slug}`,
        "en-US": `/en/projects/${slug}`,
      },
    },
    openGraph: {
      type: "article",
      locale: "en_US",
      title,
      description: project.summary,
      url: `/en/projects/${slug}`,
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

export default async function EnglishCaseStudyPage({ params }) {
  const { slug } = await params;
  const project = englishProjectsBySlug[slug];

  if (!project) notFound();

  return <CaseStudyContent project={project} locale="en" />;
}
