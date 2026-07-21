// Country collection. Future-ready — list page renders an empty state
// until content is populated. Each entry must satisfy CountryContent.
import type { CountryContent, ContentCollection } from "./types";

export const countries: CountryContent[] = [];

export const getCountry = (slug: string) => countries.find((c) => c.slug === slug);

export const countryCollection: ContentCollection<CountryContent> = {
  name: "country",
  basePath: "/country",
  all: countries,
  getBySlug: getCountry,
};

export type { CountryContent } from "./types";
