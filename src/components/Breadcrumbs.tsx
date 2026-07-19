import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

type Crumb = { name: string; slug: string };

const Breadcrumbs = ({ items }: { items: Crumb[] }) => {
  if (!items.length) return null;
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground">
      <ol className="flex flex-wrap items-center gap-1.5">
        {items.map((c, i) => {
          const last = i === items.length - 1;
          const to = c.slug || "/";
          return (
            <li key={to} className="flex items-center gap-1.5">
              {i > 0 && <ChevronRight className="h-3.5 w-3.5 opacity-60" />}
              {last ? (
                <span className="font-medium text-primary" aria-current="page">
                  {c.name}
                </span>
              ) : (
                <Link to={to} className="hover:text-gold transition-colors">
                  {c.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;