// Prerenders every route into static HTML after `vite build` so search
// engines and AI crawlers (GPTBot, ClaudeBot, PerplexityBot…) that don't
// execute JavaScript still receive each page's content, title, meta and
// JSON-LD. Output: dist/index.html, dist/<route>.html (served via Vercel
// cleanUrls), dist/404.html and dist/llms.txt.

import { readFileSync, writeFileSync, mkdirSync, rmSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { pathToFileURL } from "node:url";

const dist = resolve("dist");
const ssrEntry = resolve("dist-ssr/entry-server.js");
const { render, routes, llmsTxt } = await import(pathToFileURL(ssrEntry).href);

// Per-page tags come from Helmet, so drop the homepage defaults in the
// template to avoid duplicate <title>/description/canonical/OG tags.
const template = readFileSync(resolve(dist, "index.html"), "utf8")
  .replace(/\s*<title>[\s\S]*?<\/title>/, "")
  .replace(/\s*<meta name="(description|keywords|robots|twitter:[^"]+)"[^>]*>/g, "")
  .replace(/\s*<meta property="og:[^"]+"[^>]*>/g, "")
  .replace(/\s*<link rel="canonical"[^>]*>/, "");

const page = ({ html, head }) =>
  template
    .replace("</head>", `    ${head}\n  </head>`)
    .replace('<div id="root"></div>', `<div id="root">${html}</div>`);

const outFile = (route) =>
  route === "/" ? resolve(dist, "index.html") : resolve(dist, `${route.slice(1)}.html`);

for (const route of routes) {
  const file = outFile(route);
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, page(await render(route)));
}
writeFileSync(resolve(dist, "404.html"), page(await render("/404")));
writeFileSync(resolve(dist, "llms.txt"), llmsTxt);

rmSync(resolve("dist-ssr"), { recursive: true, force: true });
console.log(`prerendered ${routes.length} routes + 404.html`);
