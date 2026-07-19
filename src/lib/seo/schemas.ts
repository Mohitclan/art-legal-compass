import { SITE } from "@/content/site";
import type { SEOSource } from "./builders";

const abs = (path: string) =>
  `${SITE.url}${path.startsWith("/") ? path : `/${path}`}`;

export function buildBreadcrumbSchema(breadcrumbs: { name: string; slug: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((b, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: b.name,
      item: abs(b.slug || "/"),
    })),
  };
}

export function buildFAQSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function buildLegalServiceSchema(opts: {
  slug: string;
  name: string;
  description: string;
  serviceType?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": ["LegalService", "ProfessionalService"],
    "@id": `${abs(opts.slug)}#service`,
    name: opts.name,
    description: opts.description,
    url: abs(opts.slug),
    areaServed: { "@type": "Country", name: "India" },
    provider: { "@id": `${SITE.url}/#person` },
    telephone: SITE.person.phone,
    email: SITE.person.email,
    serviceType: opts.serviceType || [],
  };
}

export function buildArticleSchema(src: SEOSource) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: src.title,
    description: src.description,
    datePublished: src.publishedAt,
    dateModified: src.updatedAt || src.publishedAt,
    author: { "@type": "Person", name: SITE.person.name },
    publisher: { "@type": "Organization", name: SITE.name },
    mainEntityOfPage: { "@type": "WebPage", "@id": abs(src.slug || "/") },
    inLanguage: "en-IN",
  };
}

export function buildSchemasForPage(
  src: SEOSource,
  extra: Record<string, unknown>[] = []
): Record<string, unknown>[] {
  const out: Record<string, unknown>[] = [];
  if (src.breadcrumbs?.length) out.push(buildBreadcrumbSchema(src.breadcrumbs));
  if (src.faqs?.length) out.push(buildFAQSchema(src.faqs));
  if (src.type === "article") out.push(buildArticleSchema(src));
  return [...out, ...extra];
}