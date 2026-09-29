// Renders block-based MDXBlock[] content. Shim for a future MDX /
// Contentlayer / CMS migration — the content shape stays stable
// while the source can change.

import type { MDXBlock } from "@/content/types";
import SmartImage from "@/components/SmartImage";
import PrefetchLink from "@/components/PrefetchLink";

const slug = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

const MDXRenderer = ({ blocks }: { blocks: MDXBlock[] }) => (
  <div className="prose prose-lg max-w-none">
    {blocks.map((b, i) => {
      switch (b.type) {
        case "p": return <p key={i} className="text-foreground/85 leading-relaxed mb-4">{b.text}</p>;
        case "h2": return <h2 key={i} id={b.id ?? slug(b.text)} className="font-playfair text-2xl md:text-3xl font-bold text-primary mt-10 mb-4 scroll-mt-24">{b.text}</h2>;
        case "h3": return <h3 key={i} id={b.id ?? slug(b.text)} className="font-playfair text-xl font-semibold text-primary mt-6 mb-3 scroll-mt-24">{b.text}</h3>;
        case "ul": return <ul key={i} className="list-disc pl-6 space-y-2 mb-4">{b.items.map((it, j) => <li key={j} className="text-foreground/85">{it}</li>)}</ul>;
        case "ol": return <ol key={i} className="list-decimal pl-6 space-y-2 mb-4">{b.items.map((it, j) => <li key={j} className="text-foreground/85">{it}</li>)}</ol>;
        case "quote": return <blockquote key={i} className="border-l-4 border-gold pl-4 italic text-foreground/80 my-4">"{b.text}"{b.cite && <cite className="block not-italic text-sm text-muted-foreground mt-1">— {b.cite}</cite>}</blockquote>;
        case "callout": return (
          <aside key={i} className={`my-6 p-4 rounded-md border-l-4 ${b.tone === "warn" ? "border-destructive bg-destructive/5" : "border-gold bg-secondary/40"}`}>
            {b.title && <p className="font-semibold text-primary mb-1">{b.title}</p>}
            <p className="text-foreground/85 leading-relaxed">{b.text}</p>
          </aside>
        );
        case "image": return <SmartImage key={i} src={b.src} alt={b.alt} width={b.width} height={b.height} className="my-6 rounded-md" />;
        case "links": return (
          <nav key={i} className="my-6 p-5 rounded-md border-2 border-border bg-secondary/30">
            {b.title && <p className="font-playfair text-lg font-semibold text-primary mb-3">{b.title}</p>}
            <ul className="grid sm:grid-cols-2 gap-2">
              {b.items.map((l, j) => (
                <li key={j}>
                   {l.to.startsWith("https://") ? (
                     <a href={l.to} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-gold underline underline-offset-4 transition-colors">{l.label}</a>
                   ) : (
                     <PrefetchLink to={l.to} className="text-primary hover:text-gold underline underline-offset-4 transition-colors">{l.label}</PrefetchLink>
                   )}
                </li>
              ))}
            </ul>
          </nav>
        );
      }
    })}
  </div>
);

export default MDXRenderer;
