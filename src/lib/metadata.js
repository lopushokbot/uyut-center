import { PAGE_SEO, SITE_NAME } from "../data/siteData";

export function getPageMetadata(key) {
  const page = PAGE_SEO[key];

  return {
    title: page.title,
    description: page.description,
    alternates: {
      canonical: page.path,
    },
    openGraph: {
      title: page.title,
      description: page.description,
      type: "website",
      locale: "ru_RU",
      siteName: SITE_NAME,
      url: page.path,
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
    },
  };
}
