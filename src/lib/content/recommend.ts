// Keyword-based content recommendation engine. Scores candidates by
// shared keywords / tags / category and returns the top N.

export type Scorable = {
  slug: string;
  keywords?: string[];
  tags?: string[];
  category?: string;
};

const norm = (s: string) => s.toLowerCase().trim();

export function scoreOverlap(a: Scorable, b: Scorable): number {
  if (a.slug === b.slug) return -Infinity;
  const aTerms = new Set([...(a.keywords ?? []), ...(a.tags ?? [])].map(norm));
  const bTerms = new Set([...(b.keywords ?? []), ...(b.tags ?? [])].map(norm));
  let score = 0;
  bTerms.forEach((t) => { if (aTerms.has(t)) score += 2; });
  if (a.category && b.category && norm(a.category) === norm(b.category)) score += 3;
  return score;
}

export function recommend<T extends Scorable>(source: T, pool: T[], limit = 3): T[] {
  return pool
    .filter((p) => p.slug !== source.slug)
    .map((p) => ({ p, s: scoreOverlap(source, p) }))
    .sort((a, b) => b.s - a.s)
    .slice(0, limit)
    .map(({ p }) => p);
}

export function prevNext<T extends { slug: string; publishedAt?: string }>(current: T, pool: T[]) {
  const sorted = [...pool].sort((a, b) => (a.publishedAt ?? "").localeCompare(b.publishedAt ?? ""));
  const i = sorted.findIndex((p) => p.slug === current.slug);
  return {
    prev: i > 0 ? sorted[i - 1] : undefined,
    next: i >= 0 && i < sorted.length - 1 ? sorted[i + 1] : undefined,
  };
}
