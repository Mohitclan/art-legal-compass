// Country collection. Future-ready — list page renders an empty state
// until content is populated. Each entry must satisfy CountryContent.
import type { CountryContent, ContentCollection } from "./types";
import { canada } from "./countries/canada";
import { usa } from "./countries/usa";

export const countries: CountryContent[] = [canada, usa];

export const getCountry = (slug: string) => countries.find((c) => c.slug === slug);

export const countryCollection: ContentCollection<CountryContent> = {
  name: "country",
  basePath: "/country",
  all: countries,
  getBySlug: getCountry,
};

export type { CountryContent } from "./types";
