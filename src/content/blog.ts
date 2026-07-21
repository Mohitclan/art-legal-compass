// Blog collection. Add posts by pushing objects that satisfy BlogPost.
import type { BlogPost, Category, Tag, Author, ContentCollection } from "./types";

export const blogCategories: Category[] = [
  { slug: "surrogacy", name: "Surrogacy Law", description: "Surrogacy (Regulation) Act, 2021 explained." },
  { slug: "art", name: "ART Compliance", description: "Assisted Reproductive Technology Act & Rules." },
  { slug: "pc-pndt", name: "PC-PNDT", description: "Pre-Conception & Pre-Natal Diagnostic Techniques Act." },
  { slug: "ivf", name: "IVF Legal", description: "IVF clinic and patient compliance." },
  { slug: "international", name: "International", description: "Cross-border and foreign intended parents." },
];

export const blogTags: Tag[] = [
  { slug: "eligibility", name: "Eligibility" },
  { slug: "compliance", name: "Compliance" },
  { slug: "documentation", name: "Documentation" },
  { slug: "oci-nri", name: "OCI / NRI" },
  { slug: "clinics", name: "Clinics" },
  { slug: "case-law", name: "Case Law" },
];

export const blogAuthors: Author[] = [
  { slug: "barkha-dwivedi", name: "Advocate Barkha Dwivedi", role: "Advocate & Solicitor, Delhi High Court", url: "/about" },
];

export const posts: BlogPost[] = [
  {
    slug: "surrogacy-regulation-act-2021-overview",
    title: "Surrogacy (Regulation) Act, 2021 — A Complete Overview",
    description: "Statutory framework, eligibility, Board approvals and compliance essentials under India's Surrogacy (Regulation) Act, 2021.",
    keywords: ["surrogacy act 2021", "altruistic surrogacy india", "surrogacy eligibility"],
    category: "surrogacy",
    tags: ["eligibility", "compliance"],
    author: "barkha-dwivedi",
    publishedAt: "2026-01-15",
    updatedAt: "2026-07-01",
    excerpt: "A working guide to the Surrogacy (Regulation) Act, 2021 — who qualifies, what documents matter, and how Board approvals work in practice.",
    body: [
      { type: "p", text: "The Surrogacy (Regulation) Act, 2021 restructures how surrogacy arrangements may be undertaken in India. This overview walks through the statutory scheme, eligibility criteria, and compliance touchpoints every intending couple and ART clinic must understand." },
      { type: "h2", text: "Statutory scheme", id: "scheme" },
      { type: "p", text: "The Act permits only altruistic surrogacy for Indian married couples with proven medical infertility, and for Indian widows / divorcees aged 35–45. Commercial surrogacy is prohibited." },
      { type: "h2", text: "Eligibility snapshot", id: "eligibility" },
      { type: "ul", items: [
        "Indian citizenship of both intending parents",
        "Medical indication certified by a District Medical Board",
        "Eligibility certificate from the Appropriate Authority",
        "Insurance cover for the surrogate for 36 months",
      ] },
    ],
    faqs: [
      { q: "Is commercial surrogacy allowed in India?", a: "No. Only altruistic surrogacy is permitted under the 2021 Act." },
    ],
  },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);
export const getCategory = (slug: string) => blogCategories.find((c) => c.slug === slug);
export const getTag = (slug: string) => blogTags.find((t) => t.slug === slug);
export const getAuthor = (slug: string) => blogAuthors.find((a) => a.slug === slug);

export const blog: ContentCollection<BlogPost> = {
  name: "blog",
  basePath: "/blog",
  all: posts,
  getBySlug: getPost,
};

export type { BlogPost } from "./types";
