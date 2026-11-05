// Build-time renderer used by scripts/prerender.mjs. Renders one route to
// HTML (waiting for lazy routes to resolve) and returns the Helmet head tags.

import { Writable } from "node:stream";
import { renderToPipeableStream } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { HelmetProvider, type HelmetServerState } from "react-helmet-async";
import App from "./App";
import { services } from "./content/services";
import { posts } from "./content/blog";
import { countries } from "./content/countries";
import { SITE } from "./content/site";
import { AUTHOR } from "./content/authority";

export const routes = [
  "/",
  "/about",
  "/services",
  "/legal-acts",
  "/associated-centers",
  "/contact",
  "/blog",
  "/country",
  "/query-success",
  ...services.map((s) => `/services/${s.slug}`),
  ...posts.map((p) => `/blog/${p.slug}`),
  ...countries.map((c) => `/country/${c.slug}`),
];

// llms.txt (https://llmstxt.org): a plain-markdown map of the site that AI
// assistants read to find and cite the most relevant pages.
export const llmsTxt = [
  `# ${SITE.name}`,
  "",
  `> ${AUTHOR.shortBio}`,
  "",
  `Contact: ${SITE.person.phone} · ${SITE.person.email} · ${SITE.person.chamber}`,
  "",
  "## Practice areas",
  ...services.map((s) => `- [${s.title}](${SITE.url}/services/${s.slug}): ${s.metaDescription}`),
  "",
  "## Guides",
  ...posts.map((p) => `- [${p.title}](${SITE.url}/blog/${p.slug}): ${p.description}`),
  ...countries.map((c) => `- [${c.title}](${SITE.url}/country/${c.slug}): ${c.description}`),
  "",
  "## About",
  `- [About ${SITE.person.name}](${SITE.url}/about): credentials, court practice and experience`,
  `- [Indian reproductive laws](${SITE.url}/legal-acts): Surrogacy Act 2021, ART Act 2021, PC-PNDT Act 1994, MTP Act 1971`,
  `- [Contact](${SITE.url}/contact): consultation by phone, WhatsApp or email`,
  "",
].join("\n");

export function render(url: string): Promise<{ html: string; head: string }> {
  const helmetContext: { helmet?: HelmetServerState } = {};
  return new Promise((resolve, reject) => {
    let html = "";
    const sink = new Writable({
      write(chunk, _enc, cb) {
        html += chunk.toString();
        cb();
      },
      final(cb) {
        const h = helmetContext.helmet;
        const head = h
          ? [h.title, h.meta, h.link, h.script].map((t) => t.toString()).join("\n    ")
          : "";
        resolve({ html, head });
        cb();
      },
    });
    const stream = renderToPipeableStream(
      <HelmetProvider context={helmetContext}>
        <StaticRouter location={url}>
          <App />
        </StaticRouter>
      </HelmetProvider>,
      {
        onAllReady: () => stream.pipe(sink),
        onShellError: reject,
        onError: (err) => reject(err),
      }
    );
  });
}
