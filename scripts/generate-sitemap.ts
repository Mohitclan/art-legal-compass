// Generates public/sitemap.xml from static routes + content sources.
// Runs automatically before `vite dev` and `vite build`.
//
// Executed via bun (native TS support); no additional deps required.

import { writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { services } from "../src/content/services";
import { posts } from "../src/content/blog";
import { countries } from "../src/content/countries";
import { SITE } from "../src/content/site";

type Entry = {
  path: string;
  lastmod?: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: string;
};

const staticEntries: Entry[] = [
  // No lastmod: these pages have no authoritative per-page timestamp.
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/about", changefreq: "monthly", priority: "0.9" },
  { path: "/services", changefreq: "monthly", priority: "0.9" },
  { path: "/legal-acts", changefreq: "monthly", priority: "0.8" },
  { path: "/associated-centers", changefreq: "monthly", priority: "0.7" },
  { path: "/contact", changefreq: "yearly", priority: "0.8" },
];

const serviceEntries: Entry[] = services.map((s) => ({
  path: `/services/${s.slug}`,
  changefreq: "monthly",
  priority: "0.9",
}));

const blogEntries: Entry[] = posts.map((p) => ({
  path: `/blog/${p.slug}`,
  changefreq: "monthly",
  priority: "0.7",
  lastmod: (p.updatedAt || p.publishedAt).slice(0, 10),
}));

const countryEntries: Entry[] = countries.map((c) => ({
  path: `/country/${c.slug}`,
  changefreq: "monthly",
  priority: "0.7",
  lastmod: (c.updatedAt || c.publishedAt)?.slice(0, 10),
}));

const entries = [...staticEntries, ...serviceEntries, ...blogEntries, ...countryEntries];

const xml = [
  `<?xml version="1.0" encoding="UTF-8"?>`,
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
  ...entries.map((e) =>
    [
      `  <url>`,
      `    <loc>${SITE.url}${e.path}</loc>`,
      e.lastmod ? `    <lastmod>${e.lastmod}</lastmod>` : null,
      e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
      e.priority ? `    <priority>${e.priority}</priority>` : null,
      `  </url>`,
    ]
      .filter(Boolean)
      .join("\n")
  ),
  `</urlset>`,
].join("\n");

writeFileSync(resolve("public/sitemap.xml"), xml);
console.log(`sitemap.xml written (${entries.length} entries)`);