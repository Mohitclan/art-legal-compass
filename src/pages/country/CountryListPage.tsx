import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import PrefetchLink from "@/components/PrefetchLink";
import { countries } from "@/content/countries";
import { useSEO } from "@/lib/seo/hooks";
import { buildBreadcrumbSchema } from "@/lib/seo";

const CountryListPage = () => {
  const seo = useSEO({
    slug: "/country",
    title: "Country Guides for International Intended Parents | Advocate Barkha Dwivedi",
    description: "Jurisdiction-specific guides for foreign intended parents considering ART, IVF or surrogacy in India.",
    keywords: ["international surrogacy india", "oci ivf india", "nri surrogacy"],
  });
  const breadcrumbs = [{ name: "Home", slug: "/" }, { name: "Country Guides", slug: "/country" }];
  return (
    <>
      <SEO {...seo} jsonLd={[buildBreadcrumbSchema(breadcrumbs)]} />
      <header className="bg-gradient-to-br from-primary via-navy to-primary pt-32 pb-14 text-ivory">
        <div className="container mx-auto px-6 max-w-5xl">
          <Breadcrumbs items={breadcrumbs} />
          <h1 className="font-playfair text-4xl md:text-5xl font-bold mt-4 mb-3">Country Guides</h1>
          <p className="text-ivory/85 max-w-2xl">Jurisdiction-specific briefings for foreign intended parents.</p>
        </div>
      </header>
      <section className="container mx-auto px-6 max-w-5xl py-14">
        {countries.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-muted-foreground mb-3">Country-specific guides are being prepared.</p>
            <PrefetchLink to="/services/foreign-intended-parents" className="text-gold hover:underline">Read our Foreign Intended Parents overview →</PrefetchLink>
          </div>
        ) : (
          <ul className="grid md:grid-cols-3 gap-6">
            {countries.map((c) => (
              <li key={c.slug}>
                <PrefetchLink to={`/country/${c.slug}`} className="block h-full p-6 rounded-md border-2 border-border hover:border-gold transition-colors">
                  <p className="text-2xl mb-2">{c.flagEmoji}</p>
                  <h2 className="font-playfair text-xl font-semibold text-primary mb-2">{c.country}</h2>
                  <p className="text-sm text-muted-foreground line-clamp-3">{c.summary}</p>
                </PrefetchLink>
              </li>
            ))}
          </ul>
        )}
      </section>
    </>
  );
};

export default CountryListPage;
