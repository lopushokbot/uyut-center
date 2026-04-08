import { PAGE_SEO, SITE_URL } from "../data/siteData";

export default function sitemap() {
  return Object.values(PAGE_SEO).map((page) => ({
    url: new URL(page.path, SITE_URL).toString(),
    lastModified: new Date(),
    changeFrequency: page.path === "/" ? "weekly" : "monthly",
    priority: page.path === "/" ? 1 : 0.8,
  }));
}
