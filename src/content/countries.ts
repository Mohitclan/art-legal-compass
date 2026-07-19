// Country content stub — shape only. No routes wired yet.
// Future /country/[slug] pages target foreign intended parents by
// jurisdiction and share the ServicePageTemplate.

import type { ServiceContent } from "./services";

export type CountryContent = ServiceContent & { country: string };

export const countries: CountryContent[] = [];