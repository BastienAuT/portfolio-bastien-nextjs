import { projects } from "@/src/data/projects";
import { siteUrl } from "@/src/lib/site";

const absoluteUrl = (pathname) => new URL(pathname, siteUrl).toString();

export default function sitemap() {
  const staticPages = [
    {
      url: absoluteUrl("/"),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: absoluteUrl("/cv"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];

  const projectPages = projects.map((project) => ({
    url: absoluteUrl(`/projets/${project.slug}`),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticPages, ...projectPages];
}
