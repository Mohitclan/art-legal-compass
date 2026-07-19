// Site-wide constants. Single source of truth for SEO builders,
// sitemap generation, JSON-LD schemas, and analytics.

export const SITE = {
  name: "Infertility Legal Solutions",
  legalName: "Infertility Legal Solutions — Advocate Barkha Tiwari",
  tagline: "Best Lawyer for IVF, Surrogacy, ART & PC-PNDT",
  url: "https://art-legal-compass.lovable.app",
  locale: "en_IN",
  defaultOgImage: "/og-image.jpg",
  person: {
    name: "Advocate Barkha Tiwari",
    jobTitle: "Advocate & Solicitor",
    phone: "+91-8392931025",
    phoneDigits: "918392931025",
    email: "barkha.abha2@gmail.com",
    chamber:
      "Chamber No.-920, Lawyers Chamber Block, Rohini Court Complex, Rohini, Delhi-110085",
    office:
      "Flat No. 737, Baghban Apartment, Pocket-GH2, Sector-28, Rohini, Delhi-110042",
    court: "Delhi High Court",
    experienceYears: 10,
  },
  whatsappMessage:
    "Hello, I would like to schedule a consultation regarding ART, Surrogacy, or IVF legal matters.",
} as const;

export const WHATSAPP_URL = `https://wa.me/${SITE.person.phoneDigits}?text=${encodeURIComponent(SITE.whatsappMessage)}`;
export const TEL_URL = `tel:${SITE.person.phone.replace(/\s|-/g, "")}`;
export const MAILTO_URL = `mailto:${SITE.person.email}`;