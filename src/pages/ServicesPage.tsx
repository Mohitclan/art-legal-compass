import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import { services } from "@/content/services";
import { buildBreadcrumbSchema } from "@/lib/seo";
import { trackNavClick } from "@/lib/analytics/events";

const ServicesPage = () => {
  const crumbs = [
    { name: "Home", slug: "/" },
    { name: "Practice Areas", slug: "/services" },
  ];
  return (
    <>
      <SEO
        title="Practice Areas | IVF, Surrogacy, ART & PC-PNDT Legal Services"
        description="Dedicated legal services across Surrogacy, IVF/ART compliance, ART Act documentation, PC-PNDT advisory, and support for foreign intended parents."
        path="/services"
        keywords={services.map((s) => s.navLabel).join(", ")}
        jsonLd={[buildBreadcrumbSchema(crumbs)]}
      />
      <header className="bg-gradient-to-br from-primary via-navy to-primary pt-32 pb-16 text-ivory">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="mb-6"><Breadcrumbs items={crumbs} /></div>
          <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-4">Practice Areas</h1>
          <p className="text-lg text-ivory/85 max-w-3xl">
            Specialised legal services for infertility and reproductive healthcare — for
            intending parents, surrogates, IVF centres, and ART banks across India.
          </p>
        </div>
      </header>

      <section className="py-16 bg-gradient-to-br from-secondary/30 via-background to-secondary/20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((s) => (
              <Link
                key={s.slug}
                to={`/services/${s.slug}`}
                onClick={() => trackNavClick(s.navLabel, `/services/${s.slug}`)}
                className="group"
              >
                <Card className="h-full p-8 border-2 border-border hover:border-gold hover:shadow-gold transition-all">
                  <h2 className="font-playfair text-xl font-semibold text-primary group-hover:text-gold transition-colors mb-3">
                    {s.navLabel}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">{s.heroTagline}</p>
                  <span className="mt-4 inline-block text-sm text-gold font-medium">
                    Learn more →
                  </span>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CTASection source="services-listing" />
    </>
  );
};

export default ServicesPage;