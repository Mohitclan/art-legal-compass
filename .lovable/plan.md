## Objective

Convert the single-page site to a scalable multi-page architecture. Homepage stays visually identical. New routes are SEO-optimized, data-driven, share one reusable template, and ship with GA4 conversion tracking, dynamic SEO builders, image SEO conventions, and honest content sourced from the existing site — no AI filler.

## 1. Folder Structure

```
scripts/
  generate-sitemap.mjs           # predev + prebuild → public/sitemap.xml
src/
  App.tsx                        # routes only
  layouts/
    SiteLayout.tsx               # DisclaimerModal + Navbar + <main><Outlet/></main> + Footer
  components/
    ScrollToTop.tsx
    ScrollDepthTracker.tsx       # GA4 25/50/75/100 per route
    Breadcrumbs.tsx              # UI + BreadcrumbList JSON-LD
    ServicePageTemplate.tsx      # single template for every service page
    ServiceFAQ.tsx               # Accordion + FAQPage JSON-LD
    RelatedServices.tsx
    CTASection.tsx
    NavbarDropdown.tsx
    SmartImage.tsx               # enforces alt/width/height/loading/decoding/srcset
    ContentGap.tsx               # dev-only visible marker for TODO content (see §7)
    (existing Hero/About/PracticeAreas/LegalActs/IVFCenters/Contact/Footer
     /DisclaimerModal/SEO — untouched visually)
  content/
    site.ts                      # site-wide constants (name, url, socials, defaultOg)
    services.ts                  # 5 ServiceContent objects
    countries.ts                 # stub (same shape) — future /country/[slug]
    blog.ts                      # stub — future /blog/[slug]
  lib/
    seo/
      builders.ts                # buildPageSEO(source)
      schemas.ts                 # Organization/WebSite/LegalService/Person/
                                 # Breadcrumb/FAQ/Article/BlogPosting builders
      index.ts
    analytics/
      ga.ts                      # gtag init (no-op without VITE_GA_MEASUREMENT_ID)
      events.ts                  # trackPhoneClick/EmailClick/WhatsApp/CTA/
                                 # Consultation/NavClick/ServiceView/ScrollDepth/…
      useTrackPageView.ts
  pages/
    Index.tsx                    # unchanged
    AboutPage.tsx
    ServicesPage.tsx
    LegalActsPage.tsx
    AssociatedCentersPage.tsx
    ContactPage.tsx
    NotFound.tsx
    services/
      SurrogacyLawPage.tsx           # <ServicePageTemplate service={surrogacy}/>
      IvfLegalServicesPage.tsx
      ArtActCompliancePage.tsx
      PcPndtCompliancePage.tsx
      ForeignIntendedParentsPage.tsx
public/
  sitemap.xml
  robots.txt
```

## 2. Routing Map

```
/                                  Index (untouched homepage)
/about                             AboutPage
/services                          ServicesPage
/services/surrogacy-law            Service (template + data)
/services/ivf-legal-services       Service
/services/art-act-compliance       Service
/services/pc-pndt-compliance       Service
/services/foreign-intended-parents Service
/legal-acts                        LegalActsPage
/associated-centers                AssociatedCentersPage
/contact                           ContactPage
*                                  NotFound
```

All wrapped in `<SiteLayout>` via `<Outlet/>`. Reserved but not wired: `/blog`, `/blog/[slug]`, `/country/[slug]` — shape ready, no `<Route>` yet.

## 3. Dynamic SEO Builders (no hardcoded per-page tags)

`src/lib/seo/builders.ts` exposes `buildPageSEO(source)` where every page passes an `SEOSource`:

```
type SEOSource = {
  slug, title, description,
  keywords?, ogImage?, type?, publishedAt?, updatedAt?,
  breadcrumbs?, faqs?
}
```

Returns a full metadata object (title / description / canonical / og:* / twitter:* / robots / keywords) that `SEO` spreads into Helmet. Schema builders emit `BreadcrumbList` always, `FAQPage` if `faqs.length`, `LegalService` on service pages, `Article` / `BlogPosting` when `type: "article"`. Sitewide `Organization`, `WebSite`, `LegalService`, `Person` stay in `index.html`.

Same contract will drive blog and country routes — no SEO code changes required to launch them.

## 4. GA4 Conversion Tracking

`src/lib/analytics/ga.ts` initializes gtag from `VITE_GA_MEASUREMENT_ID`. Missing id → all helpers no-op (dev/preview clean). Loader deferred and mounted once in `SiteLayout`.

Reusable helpers in `events.ts` — one line per new event:

| Event               | Fired from                                              |
|---------------------|---------------------------------------------------------|
| `page_view`         | `useTrackPageView` on every route change                |
| `service_view`      | `ServicePageTemplate` mount                             |
| `nav_click`         | Navbar + NavbarDropdown link clicks                     |
| `cta_click`         | `CTASection` + any `data-cta` button                    |
| `consultation_click`| Hero / About / CTA "Request Consultation" buttons       |
| `phone_click`       | Any `tel:` link                                         |
| `email_click`       | Any `mailto:` link                                      |
| `whatsapp_click`    | WhatsApp button in Contact                              |
| `contact_submit`    | Reserved (form currently removed)                       |
| `scroll_depth`      | `ScrollDepthTracker` 25/50/75/100 % per route           |

`ScrollDepthTracker` mounts once in `SiteLayout`, resets on route change, passive listener + rAF throttling. Zero visual footprint.

`VITE_GA_MEASUREMENT_ID` is publishable → set via env var. User pastes their `G-XXXXXXXX` when ready.

## 5. Image SEO — `SmartImage`

All new images use `<SmartImage>`:

- `alt` **required** (typed) — no empty defaults.
- `width` + `height` **required** → no CLS.
- `loading="eager"` only when `priority` set; otherwise `"lazy"`.
- `decoding="async"` always; `fetchpriority` mirrors `priority`.
- Optional `srcSet` + `sizes` when width variants provided.
- File naming: descriptive kebab-case on import (e.g. `hero-legal-consultation.jpg`, `service-surrogacy-law.jpg`) — no `IMG_1234`.
- Format: JPG for photos, PNG only for transparency.

Existing Hero `<img>` retained (already alt / dimensions / eager / fetchpriority). Rules banner in `SmartImage.tsx`.

## 6. Content Sourcing — Reuse First, No AI Filler

**Every word on new pages comes from existing project content.** Concretely:

- `About` copy → `AboutPage` (kept intact, minimal restructure into semantic sections).
- The 5 practice-area boxes in `PracticeAreas.tsx` → seed the 5 `ServiceContent` intros verbatim.
- `LegalActs.tsx` cards → `LegalActsPage` + linked into each service's "Applicable Act" callout.
- `Contact.tsx` card (phone, email, WhatsApp, chamber, office) → `ContactPage`. No new addresses invented.
- `IVFCenters.tsx` list → `AssociatedCentersPage` (section reintroduced on its own route only — homepage stays without it, per earlier request).
- Homepage FAQ (in `seo-schemas.ts`) → seeds FAQ blocks where relevant.
- `Hero` tagline + subheading → root `SEOSource`.

Nothing beyond the site's own words is auto-written by AI. External research (Surrogacy Act 2021, ART Act 2021 etc.) already lives in `LegalActs.tsx` and is reused, not re-summarized.

## 7. Content Gap Policy — Marked, Not Faked

When a service page section has no source material, it is **not filled with generic AI text**. Instead:

- The `ServiceContent` field is either omitted or set to `{ status: "todo", note: "…" }`.
- `ServicePageTemplate` skips omitted sections entirely (no empty headings shipped).
- For `todo` sections, `<ContentGap>` renders **only when `import.meta.env.DEV` is true** — a visible amber block naming what's missing (e.g. "Timeline for PC-PNDT compliance pending — provide typical case duration from Rohini Court practice"). In production these sections are hidden, not filled with filler. This gives the client a clean production page today and a documented list of writing tasks for tomorrow.
- Every service's `ServiceContent` object also carries a `writingBrief` array — the specific prompts the client / a writer will answer to expand the page to 1,500–3,000 words later. Kept next to the data so the roadmap ships in git, not in a doc.

## 8. Long-Form Ready by Design

`ServiceContent` fields are typed as open arrays / rich-text-ready strings — the template renders whatever length arrives. Adding paragraphs, subsections, case studies, or citations later means editing `content/services.ts` only; no component, layout, or SEO code changes. All headings inside long-form body render as `<h2>` / `<h3>` (single `<h1>` per page enforced by the template).

The same shape works for `country/[slug]` and `blog/[slug]` — future authoritative pages plug in with zero architectural change.

## 9. Components Reused (no visual change)

`Hero`, `About`, `PracticeAreas`, `LegalActs`, `IVFCenters`, `Contact`, `Footer`, `DisclaimerModal`, `SEO`. Plus shadcn `Accordion`, `DropdownMenu`, `Card`. Only non-visual change: `Navbar` becomes route-aware + gets Practice Areas dropdown using existing tokens (pixel-identical on `/`).

## 10. Internal Linking

Non-home pages: Breadcrumbs → body `<Link>`s to About / related services / Legal Acts / Associated Centers → `RelatedServices` (≥ 4) → `CTASection` → Footer nav. Service cycle: Surrogacy → IVF → ART → PC-PNDT → Foreign Clients.

## 11. Automatic Sitemap

`scripts/generate-sitemap.mjs` reads static routes + imports `services` (and later `blog`, `countries`) from `src/content/*` → writes `public/sitemap.xml`. Wired via `predev` + `prebuild`. No new dependency (uses `bunx tsx`).

## 12. Performance

- Route-based code splitting: `React.lazy` + `<Suspense fallback={null}>` for every non-home route. Home eager → LCP unaffected.
- Hero image keeps `fetchPriority="high"`; all other images lazy.
- GA loader deferred; scroll listener passive + rAF-throttled.
- No new fonts, no new CSS files, no new npm packages.

## 13. Homepage Guarantee

`src/pages/Index.tsx` render tree is unchanged — same Disclaimer + Navbar + Hero + About + PracticeAreas + LegalActs + Contact + Footer, now under `<SiteLayout>` (which renders the exact same wrapper markup). Visually identical.

## 14. Deployment

- Only publishable env var introduced: `VITE_GA_MEASUREMENT_ID` (optional).
- Lovable SPA fallback covers deep-link refresh.
- Sitemap regeneration runs on every build.

Awaiting build-mode approval.
