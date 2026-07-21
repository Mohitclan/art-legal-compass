import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import PrefetchLink from "@/components/PrefetchLink";
import Newsletter from "@/components/Newsletter";
import { posts, blogCategories, blogTags } from "@/content/blog";
import { useSEO } from "@/lib/seo/hooks";
import { buildBreadcrumbSchema } from "@/lib/seo";

const BlogListPage = () => {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string | null>(null);
  const [tag, setTag] = useState<string | null>(null);

  const seo = useSEO({
    slug: "/blog",
    title: "Legal Insights & Briefings | Advocate Barkha Dwivedi",
    description: "Long-form briefings on ART, Surrogacy, PC-PNDT and IVF compliance in India.",
    keywords: ["surrogacy blog india", "art act updates", "pc-pndt case law"],
  });

  const breadcrumbs = [{ name: "Home", slug: "/" }, { name: "Blog", slug: "/blog" }];

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return posts.filter((p) => {
      if (category && p.category !== category) return false;
      if (tag && !p.tags.includes(tag)) return false;
      if (!q) return true;
      const hay = `${p.title} ${p.excerpt} ${p.keywords?.join(" ") ?? ""} ${p.tags.join(" ")}`.toLowerCase();
      return hay.includes(q);
    });
  }, [query, category, tag]);

  return (
    <>
      <SEO {...seo} jsonLd={[buildBreadcrumbSchema(breadcrumbs)]} />
      <header className="bg-gradient-to-br from-primary via-navy to-primary pt-32 pb-14 text-ivory">
        <div className="container mx-auto px-6 max-w-5xl">
          <Breadcrumbs items={breadcrumbs} />
          <h1 className="font-playfair text-4xl md:text-5xl font-bold mt-4 mb-3">Legal Insights & Briefings</h1>
          <p className="text-ivory/85 max-w-2xl">Long-form articles on India's ART, Surrogacy and PC-PNDT frameworks.</p>
        </div>
      </header>

      <section className="py-10">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between mb-8">
            <label className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input type="search" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search articles…" className="w-full h-10 pl-9 pr-3 rounded-md border border-border bg-background outline-none focus:border-gold" aria-label="Search articles" />
            </label>
            <div className="flex flex-wrap gap-2">
              <button onClick={() => setCategory(null)} className={`px-3 py-1 rounded-full text-xs border ${!category ? "bg-primary text-primary-foreground border-primary" : "border-border text-muted-foreground hover:border-gold"}`}>All</button>
              {blogCategories.map((c) => (
                <button key={c.slug} onClick={() => setCategory(c.slug)} className={`px-3 py-1 rounded-full text-xs border ${category === c.slug ? "bg-primary text-primary-foreground border-primary" : "border-border text-muted-foreground hover:border-gold"}`}>{c.name}</button>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-1.5 mb-8">
            {blogTags.map((t) => (
              <button key={t.slug} onClick={() => setTag(tag === t.slug ? null : t.slug)} className={`text-[11px] uppercase tracking-widest px-2 py-1 rounded ${tag === t.slug ? "bg-gold text-primary" : "text-muted-foreground hover:text-gold"}`}>#{t.name}</button>
            ))}
          </div>

          {filtered.length === 0 ? (
            <p className="py-16 text-center text-muted-foreground">No articles match your filters yet.</p>
          ) : (
            <ul className="grid md:grid-cols-2 gap-6">
              {filtered.map((p) => (
                <li key={p.slug}>
                  <PrefetchLink to={`/blog/${p.slug}`} className="group block h-full p-6 rounded-md border-2 border-border hover:border-gold transition-colors">
                    <p className="text-xs uppercase tracking-widest text-gold mb-2">{blogCategories.find((c) => c.slug === p.category)?.name}</p>
                    <h2 className="font-playfair text-xl font-semibold text-primary group-hover:text-gold transition-colors mb-2">{p.title}</h2>
                    <p className="text-sm text-muted-foreground line-clamp-3">{p.excerpt}</p>
                    <p className="mt-4 text-xs text-muted-foreground">{new Date(p.publishedAt).toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })}</p>
                  </PrefetchLink>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      <Newsletter />
    </>
  );
};

export default BlogListPage;
