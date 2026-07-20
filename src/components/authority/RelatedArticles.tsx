import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { BookOpen } from "lucide-react";
import { services } from "@/content/services";

// Blog is not wired yet; until then we source "articles" from the closest
// long-form pages we have: services + legal acts. Once /blog is live, swap
// the source to `posts` from @/content/blog and keep the same shape.
type Item = { title: string; href: string; excerpt: string };

const defaultItems = (excludeSlug?: string): Item[] =>
  services
    .filter((s) => s.slug !== excludeSlug)
    .slice(0, 3)
    .map((s) => ({
      title: s.title,
      href: `/services/${s.slug}`,
      excerpt: s.metaDescription,
    }));

const RelatedArticles = ({ excludeSlug, items }: { excludeSlug?: string; items?: Item[] }) => {
  const list = items?.length ? items : defaultItems(excludeSlug);
  if (!list.length) return null;
  return (
    <section className="py-16">
      <div className="container mx-auto px-6 max-w-6xl">
        <h2 className="font-playfair text-3xl font-bold text-primary text-center mb-2">Related Reading</h2>
        <div className="h-1 w-24 bg-gradient-gold mx-auto mb-10" />
        <div className="grid md:grid-cols-3 gap-6">
          {list.map((a) => (
            <Link key={a.href} to={a.href} className="block group">
              <Card className="h-full p-6 border-2 border-border hover:border-gold hover:shadow-gold transition-all">
                <BookOpen className="w-5 h-5 text-gold mb-3" />
                <h3 className="font-playfair text-lg font-semibold text-primary group-hover:text-gold transition-colors mb-2 line-clamp-2">{a.title}</h3>
                <p className="text-sm text-muted-foreground line-clamp-3">{a.excerpt}</p>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedArticles;
