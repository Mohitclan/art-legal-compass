import { useParams, Navigate } from "react-router-dom";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import MDXRenderer from "@/components/mdx/MDXRenderer";
import EnhancedFAQ from "@/components/authority/EnhancedFAQ";
import PrefetchLink from "@/components/PrefetchLink";
import { countries, getCountry } from "@/content/countries";
import { useSEO } from "@/lib/seo/hooks";
import { recommend } from "@/lib/content/recommend";
import {
  buildBreadcrumbSchema,
  buildFAQSchema,
  buildArticleSchema,
  buildOrganizationSchema,
  buildPersonSchema,
} from "@/lib/seo";
import { buildLegalServiceSchema } from "@/lib/seo/schemas";
import ArticleMeta from "@/components/authority/ArticleMeta";
import AuthorBio from "@/components/authority/AuthorBio";
import { TrustBadges } from "@/components/authority/TrustSignals";
import Disclaimers from "@/components/authority/Disclaimers";
import CTASection from "@/components/CTASection";
import { readingTimeMinutes } from "@/content/authority";

const CountryDetailPage = () => {
  const { slug = "" } = useParams();
  const c = getCountry(slug);
  const seo = useSEO({
    slug: c ? `/country/${c.slug}` : "/country",
    title: c ? `${c.country} — Legal Guide for Intended Parents` : "Country Guide",
    description: c?.description ?? "",
    keywords: c?.keywords,
    type: "article",
    publishedAt: c?.publishedAt,
    updatedAt: c?.updatedAt,
  });
  if (!c) return <Navigate to="/country" replace />;

  const breadcrumbs = [
    { name: "Home", slug: "/" },
    { name: "Country Guides", slug: "/country" },
    { name: c.country, slug: `/country/${c.slug}` },
  ];
  const related = recommend(c, countries, 3);
  const bodyText = c.body
    .map((b) =>
      "text" in b ? b.text : "items" in b ? b.items.join(" ") : ""
    )
    .join(" ");
  const readingMinutes = readingTimeMinutes(
    c.summary,
    bodyText,
    ...(c.faqs ?? []).map((f) => `${f.q} ${f.a}`)
  );

  const schemas = [
    buildBreadcrumbSchema(breadcrumbs),
    buildOrganizationSchema(),
    buildPersonSchema(),
    buildLegalServiceSchema({
      slug: `/country/${c.slug}`,
      name: `Surrogacy, IVF & ART Legal Services in India — ${c.country}`,
      description: c.description,
      serviceType: [
        "Surrogacy Law",
        "ART Act Compliance",
        "IVF Legal Services",
        "Foreign Intended Parents Advisory",
      ],
    }),
    buildArticleSchema({
      slug: `/country/${c.slug}`,
      title: c.title,
      description: c.description,
      type: "article",
      publishedAt: c.publishedAt,
      updatedAt: c.updatedAt,
    }),
    ...(c.faqs?.length ? [buildFAQSchema(c.faqs)] : []),
  ];

  return (
    <>
      <SEO {...seo} jsonLd={schemas} />
      <header className="bg-gradient-to-br from-primary via-navy to-primary pt-32 pb-14 text-ivory">
        <div className="container mx-auto px-6 max-w-4xl">
          <Breadcrumbs items={breadcrumbs} />
          <h1 className="font-playfair text-3xl md:text-5xl font-bold mt-4 mb-4">{c.flagEmoji} {c.country}</h1>
          <p className="text-lg text-ivory/85 max-w-3xl">{c.summary}</p>
          <div className="mt-6 max-w-3xl">
            <ArticleMeta readingMinutes={readingMinutes} updatedAt={c.updatedAt || c.publishedAt} />
          </div>
        </div>
      </header>
      <article className="container mx-auto px-6 max-w-3xl py-12">
        <MDXRenderer blocks={c.body} />
        {c.eligibility?.length ? (
          <>
            <h2 id="eligibility-snapshot" className="font-playfair text-2xl md:text-3xl font-bold text-primary mt-10 mb-4 scroll-mt-24">Eligibility Snapshot</h2>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              {c.eligibility.map((e) => <li key={e} className="text-foreground/85">{e}</li>)}
            </ul>
          </>
        ) : null}
        {c.visaNotes?.length ? (
          <>
            <h2 id="visa-notes" className="font-playfair text-2xl md:text-3xl font-bold text-primary mt-10 mb-4 scroll-mt-24">Visa & Travel Notes</h2>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              {c.visaNotes.map((v) => <li key={v} className="text-foreground/85">{v}</li>)}
            </ul>
          </>
        ) : null}
        {c.documents?.length ? (
          <>
            <h2 id="documents" className="font-playfair text-2xl md:text-3xl font-bold text-primary mt-10 mb-4 scroll-mt-24">Documents Checklist</h2>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              {c.documents.map((d) => <li key={d} className="text-foreground/85">{d}</li>)}
            </ul>
          </>
        ) : null}
        <h2 id="why-choose-barkha-dwivedi" className="font-playfair text-2xl md:text-3xl font-bold text-primary mt-10 mb-4 scroll-mt-24">Why Choose Advocate Barkha Dwivedi</h2>
        <p className="text-foreground/85 leading-relaxed mb-4">
          The chambers of Advocate Barkha Dwivedi focus exclusively on ART, Surrogacy, IVF and PC-PNDT law. Foreign intended parents receive statute-first written opinions, verified clinic engagements and end-to-end representation — from eligibility through birth registration. Explore our{" "}
          <PrefetchLink to="/services/surrogacy-law" className="text-gold hover:underline">Surrogacy Law</PrefetchLink>,{" "}
          <PrefetchLink to="/services/ivf-legal-services" className="text-gold hover:underline">IVF Legal Services</PrefetchLink>,{" "}
          <PrefetchLink to="/services/art-act-compliance" className="text-gold hover:underline">ART Act Compliance</PrefetchLink>,{" "}
          <PrefetchLink to="/services/pc-pndt-compliance" className="text-gold hover:underline">PC-PNDT Compliance</PrefetchLink> and{" "}
          <PrefetchLink to="/services/foreign-intended-parents" className="text-gold hover:underline">Foreign Intended Parents</PrefetchLink> practice pages, review the{" "}
          <PrefetchLink to="/legal-acts" className="text-gold hover:underline">applicable Indian statutes</PrefetchLink>, or{" "}
          <PrefetchLink to="/about" className="text-gold hover:underline">read the advocate's full profile</PrefetchLink>. When ready,{" "}
          <PrefetchLink to="/contact" className="text-gold hover:underline">request a consultation</PrefetchLink>.
        </p>
        <div className="mt-10">
          <AuthorBio />
        </div>
      </article>
      <TrustBadges />
      {c.faqs?.length ? <EnhancedFAQ faqs={c.faqs} /> : null}
      <CTASection source={`country:${c.slug}`} />
      <Disclaimers />
      {related.length > 0 && (
        <section className="py-14 bg-secondary/20">
          <div className="container mx-auto px-6 max-w-5xl">
            <h2 className="font-playfair text-3xl font-bold text-primary text-center mb-8">Other Country Guides</h2>
            <ul className="grid md:grid-cols-3 gap-6">
              {related.map((r) => (
                <li key={r.slug}>
                  <PrefetchLink to={`/country/${r.slug}`} className="block h-full p-6 rounded-md border-2 border-border hover:border-gold transition-colors">
                    <h3 className="font-playfair text-lg font-semibold text-primary mb-2">{r.flagEmoji} {r.country}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-3">{r.summary}</p>
                  </PrefetchLink>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </>
  );
};

export default CountryDetailPage;
