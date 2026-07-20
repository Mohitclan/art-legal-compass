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
    author: { "@id": `${SITE.url}/#person` },
    reviewedBy: { "@id": `${SITE.url}/#person` },
    publisher: { "@id": `${SITE.url}/#organization` },
    mainEntityOfPage: { "@type": "WebPage", "@id": abs(src.slug || "/") },
    inLanguage: "en-IN",
  };
}

export function buildPersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE.url}/#person`,
    name: SITE.person.name,
    jobTitle: SITE.person.jobTitle,
    telephone: SITE.person.phone,
    email: SITE.person.email,
    url: `${SITE.url}/about`,
    worksFor: { "@id": `${SITE.url}/#organization` },
    knowsAbout: [
      "Surrogacy (Regulation) Act, 2021",
      "Assisted Reproductive Technology (Regulation) Act, 2021",
      "PC-PNDT Act, 1994",
      "Medical Termination of Pregnancy Act, 1971",
      "IVF clinic compliance",
      "Cross-border ART parentage",
    ],
    alumniOf: { "@type": "EducationalOrganization", name: "Faculty of Law" },
    memberOf: [
      { "@type": "Organization", name: "Bar Council of Delhi" },
      { "@type": "Organization", name: "Delhi High Court Bar Association" },
    ],
  };
}

export function buildOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE.url}/#organization`,
    name: SITE.name,
    legalName: SITE.legalName,
    url: SITE.url,
    logo: `${SITE.url}${SITE.defaultOgImage}`,
    founder: { "@id": `${SITE.url}/#person` },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: SITE.person.phone,
      email: SITE.person.email,
      contactType: "customer support",
      areaServed: "IN",
      availableLanguage: ["en", "hi"],
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.person.office,
      addressCountry: "IN",
    },
  };
}

export function buildAuthorSchema() {
  // Alias — Google accepts Person as author. Kept as a distinct export
  // so pages can attach it explicitly for Article/BlogPosting contexts.
  return buildPersonSchema();
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