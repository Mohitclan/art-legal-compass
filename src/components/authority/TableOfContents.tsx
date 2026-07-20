import { useEffect, useState } from "react";
import { List } from "lucide-react";

export type TocItem = { id: string; label: string };

const TableOfContents = ({ items, sticky = true }: { items: TocItem[]; sticky?: boolean }) => {
  const [active, setActive] = useState<string>(items[0]?.id ?? "");
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (visible?.target?.id) setActive(visible.target.id);
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: 0.01 },
    );
    items.forEach((i) => { const el = document.getElementById(i.id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, [items]);

  if (!items.length) return null;

  return (
    <nav aria-label="Table of contents" className={sticky ? "lg:sticky lg:top-24" : ""}>
      <div className="rounded-md border-2 border-border bg-secondary/20 p-4">
        <p className="flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground mb-3">
          <List className="w-4 h-4 text-gold" /> On this page
        </p>
        <ul className="space-y-1.5 text-sm">
          {items.map((i) => (
            <li key={i.id}>
              <a
                href={`#${i.id}`}
                className={`block border-l-2 pl-3 py-0.5 transition-colors hover:text-gold ${
                  active === i.id ? "border-gold text-gold font-medium" : "border-transparent text-foreground/75"
                }`}
              >
                {i.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default TableOfContents;
