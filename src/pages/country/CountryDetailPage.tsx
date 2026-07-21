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

  const schemas = [
    buildBreadcrumbSchema(breadcrumbs),
    buildOrganizationSchema(),
    buildPersonSchema(),
    buildArticleSchema({
      slug: `/country/${c.slug}`,
      title: `${c.country} — Legal Guide for Intended Parents`,
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
        </div>
      </header>
      <article className="container mx-auto px-6 max-w-3xl py-12">
        <MDXRenderer blocks={c.body} />
      </article>
      {c.faqs?.length ? <EnhancedFAQ faqs={c.faqs} /> : null}
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
