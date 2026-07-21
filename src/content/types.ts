// Content type contracts. Shared by every content collection (services,
// blog, countries) and every SEO / sitemap / schema builder. This file
// is the source of truth for content shape — a future CMS integration
// only needs to satisfy these interfaces.

export type ISODate = string;

export type SEOFields = {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  noindex?: boolean;
};

export type MDXBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string; id?: string }
  | { type: "h3"; text: string; id?: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "quote"; text: string; cite?: string }
  | { type: "callout"; tone?: "info" | "warn"; title?: string; text: string }
  | { type: "image"; src: string; alt: string; width: number; height: number };

export type Category = { slug: string; name: string; description?: string };
export type Tag = { slug: string; name: string };
export type Author = { slug: string; name: string; role?: string; url?: string };

export interface BlogPost extends SEOFields {
  slug: string;
  category: string;
  tags: string[];
  author: string;
  publishedAt: ISODate;
  updatedAt?: ISODate;
  hero?: { src: string; alt: string; width: number; height: number };
  excerpt: string;
  body: MDXBlock[];
  faqs?: { q: string; a: string }[];
  related?: string[];
}

export interface CountryContent extends SEOFields {
  slug: string;
  country: string;
  region?: string;
  flagEmoji?: string;
  publishedAt: ISODate;
  updatedAt?: ISODate;
  summary: string;
  eligibility?: string[];
  visaNotes?: string[];
  documents?: string[];
  body: MDXBlock[];
  faqs?: { q: string; a: string }[];
  related?: string[];
}

export type ContentCollection<T> = {
  name: string;
  basePath: string;
  all: T[];
  getBySlug: (slug: string) => T | undefined;
};
