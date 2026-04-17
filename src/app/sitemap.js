import { PAGE_SEO, SITE_URL } from "../data/siteData";

const PRIORITY = {
  "/": 1.0,
  "/prices_and_rooms/": 0.95,
  "/contact/": 0.85,
  "/about-us/": 0.8,
  "/fun_and_services/": 0.8,
  "/menu/": 0.8,
  "/disconts/": 0.75,
  "/reviews/": 0.7,
  "/terms/": 0.3,
  "/terms-of-use/": 0.3,
};

const CHANGE_FREQ = {
  "/": "weekly",
  "/prices_and_rooms/": "weekly",
  "/disconts/": "monthly",
  "/menu/": "monthly",
  "/fun_and_services/": "monthly",
  "/about-us/": "monthly",
  "/contact/": "monthly",
  "/reviews/": "monthly",
  "/terms/": "yearly",
  "/terms-of-use/": "yearly",
};

export default function sitemap() {
  const now = new Date();
  return Object.values(PAGE_SEO).map((page) => ({
    url: new URL(page.path, SITE_URL).toString(),
    lastModified: now,
    changeFrequency: CHANGE_FREQ[page.path] || "monthly",
    priority: PRIORITY[page.path] ?? 0.5,
  }));
}
