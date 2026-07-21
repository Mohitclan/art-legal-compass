import { ChevronLeft, ChevronRight } from "lucide-react";
import PrefetchLink from "@/components/PrefetchLink";

type Item = { slug: string; title: string };
type Props = { basePath: string; prev?: Item; next?: Item };

const PrevNext = ({ basePath, prev, next }: Props) => {
  if (!prev && !next) return null;
  return (
    <nav aria-label="Article navigation" className="grid sm:grid-cols-2 gap-4 py-8 border-t border-border">
      {prev ? (
        <PrefetchLink to={`${basePath}/${prev.slug}`} className="group flex items-start gap-3 p-4 rounded-md border border-border hover:border-gold transition-colors">
          <ChevronLeft className="mt-1 h-4 w-4 text-gold shrink-0" />
          <span>
            <span className="block text-xs uppercase tracking-widest text-muted-foreground">Previous</span>
            <span className="block font-playfair text-primary group-hover:text-gold transition-colors">{prev.title}</span>
          </span>
        </PrefetchLink>
      ) : <span />}
      {next ? (
        <PrefetchLink to={`${basePath}/${next.slug}`} className="group flex items-start gap-3 p-4 rounded-md border border-border hover:border-gold transition-colors sm:text-right sm:flex-row-reverse">
          <ChevronRight className="mt-1 h-4 w-4 text-gold shrink-0" />
          <span>
            <span className="block text-xs uppercase tracking-widest text-muted-foreground">Next</span>
            <span className="block font-playfair text-primary group-hover:text-gold transition-colors">{next.title}</span>
          </span>
        </PrefetchLink>
      ) : <span />}
    </nav>
  );
};

export default PrevNext;
