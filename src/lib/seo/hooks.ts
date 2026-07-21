// Reusable SEO hooks. Compose canonical, OpenGraph, Twitter and
// breadcrumb data from a single source — with automatic fallbacks
// for missing description / OG image.

import { useLocation } from "react-router-dom";
import { SITE } from "@/content/site";
import { buildPageSEO, type PageSEO, type SEOSource } from "./builders";

const TRUNC = (s: string, n = 158) => (s.length <= n ? s : `${s.slice(0, n - 1).trimEnd()}…`);

export function useSEO(src: Partial<SEOSource> & { title: string; slug?: string }): PageSEO {
  const location = useLocation();
  const slug = src.slug ?? location.pathname;
  const description = TRUNC(src.description?.trim() || `${src.title} — ${SITE.tagline}.`);
  return buildPageSEO({
    slug,
    title: src.title,
    description,
    keywords: src.keywords,
    ogImage: src.ogImage,
    type: src.type ?? "website",
    publishedAt: src.publishedAt,
    updatedAt: src.updatedAt,
    breadcrumbs: src.breadcrumbs,
    faqs: src.faqs,
    robots: src.robots,
  });
}

export function useCanonical(path?: string): string {
  const location = useLocation();
  const p = path ?? location.pathname;
  return `${SITE.url}${p.startsWith("/") ? p : `/${p}`}`;
}

export function useBreadcrumbs(labels: Record<string, string> = {}) {
  const { pathname } = useLocation();
  const parts = pathname.split("/").filter(Boolean);
  const crumbs: { name: string; slug: string }[] = [{ name: "Home", slug: "/" }];
  let acc = "";
  parts.forEach((seg) => {
    acc += `/${seg}`;
    const name = labels[acc] ?? labels[seg] ?? seg.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
    crumbs.push({ name, slug: acc });
  });
  return crumbs;
}
