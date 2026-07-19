// Blog content stub — shape only. No routes wired yet.
// Future /blog and /blog/[slug] pages will read from this array
// using the same SEO builders and sitemap generator as services.

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  keywords?: string[];
  publishedAt: string;
  updatedAt?: string;
  body: string[];
};

export const posts: BlogPost[] = [];