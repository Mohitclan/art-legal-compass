import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { getRelated } from "@/content/services";
import { trackNavClick } from "@/lib/analytics/events";

const RelatedServices = ({ slugs, currentSlug }: { slugs: string[]; currentSlug?: string }) => {
  const items = getRelated(slugs.filter((s) => s !== currentSlug));
  if (!items.length) return null;

  return (
    <section className="py-16 bg-secondary/20">
      <div className="container mx-auto px-6">
        <h2 className="font-playfair text-3xl font-bold text-primary text-center mb-2">
          Related Practice Areas
        </h2>
        <div className="h-1 w-24 bg-gradient-gold mx-auto mb-10" />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {items.map((s) => (
            <Link
              key={s.slug}
              to={`/services/${s.slug}`}
              onClick={() => trackNavClick(s.navLabel, `/services/${s.slug}`)}
              className="block group"
            >
              <Card className="h-full p-6 border-2 border-border hover:border-gold hover:shadow-gold transition-all">
                <h3 className="font-playfair text-lg font-semibold text-primary group-hover:text-gold transition-colors mb-2">
                  {s.navLabel}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-3">
                  {s.heroTagline}
                </p>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedServices;