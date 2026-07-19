import { SITE } from "@/content/site";

export type SEOSource = {
  slug: string;
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  type?: "website" | "article";
  publishedAt?: string;
  updatedAt?: string;
  breadcrumbs?: { name: string; slug: string }[];
  faqs?: { q: string; a: string }[];
  robots?: string;
};

export type PageSEO = {
  title: string;
  description: string;
  canonical: string;
  url: string;
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
  ogType: "website" | "article";
  twitterCard: "summary_large_image";
  keywords?: string;
  robots: string;
};

const abs = (path: string) =>
  path.startsWith("http")
    ? path
    : `${SITE.url}${path.startsWith("/") ? path : `/${path}`}`;

export function pathFromSlug(slug: string): string {
  if (!slug || slug === "/") return "/";
  return slug.startsWith("/") ? slug : `/${slug}`;
}

export function buildPageSEO(src: SEOSource): PageSEO {
  const path = pathFromSlug(src.slug);
  const url = abs(path);
  const image = abs(src.ogImage || SITE.defaultOgImage);
  const keywords = src.keywords?.length ? src.keywords.join(", ") : undefined;

  return {
    title: src.title,
    description: src.description,
    canonical: url,
    url,
    ogTitle: src.title,
    ogDescription: src.description,
    ogImage: image,
    ogType: src.type || "website",
    twitterCard: "summary_large_image",
    keywords,
    robots:
      src.robots ||
      "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  };
}