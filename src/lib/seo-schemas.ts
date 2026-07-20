const SITE_URL = "https://www.infertilitylegalsolutions.com";

export const homeSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Who can opt for surrogacy in India under the Surrogacy Regulation Act 2021?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Only Indian married couples with proven medical infertility, and Indian widows/divorcees aged 35-45, may opt for altruistic surrogacy under the Surrogacy (Regulation) Act, 2021. Commercial surrogacy is prohibited.",
        },
      },
      {
        "@type": "Question",
        name: "What is the ART (Regulation) Act 2021?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The Assisted Reproductive Technology (Regulation) Act, 2021 regulates ART clinics and banks in India, mandates their registration with the National Registry, and safeguards the rights of donors, patients and children born through ART.",
        },
      },
      {
        "@type": "Question",
        name: "What does the PC-PNDT Act 1994 prohibit?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The Pre-Conception and Pre-Natal Diagnostic Techniques Act, 1994 prohibits sex-selection before or after conception and misuse of prenatal diagnostic techniques for determining the sex of the foetus.",
        },
      },
      {
        "@type": "Question",
        name: "Do IVF centres need legal compliance in India?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. IVF and ART clinics must be registered under the ART Act 2021, comply with PC-PNDT record-keeping, informed consent norms, and follow surrogacy law where applicable. Non-compliance attracts heavy penalties.",
        },
      },
      {
        "@type": "Question",
        name: "How to contact Advocate Barkha Dwivedi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can reach Advocate Barkha Dwivedi at +91-8392931025 or email infertilitylegalsolutions@gmail.com for consultations on IVF, Surrogacy, ART and PC-PNDT legal matters.",
        },
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Infertility Legal Solutions in India: IVF, Surrogacy, ART & PC-PNDT",
    description:
      "Guide to reproductive healthcare law in India covering the Surrogacy Regulation Act 2021, ART Act 2021, PC-PNDT Act 1994 and MTP Act 1971.",
    author: { "@type": "Person", name: "Advocate Barkha Dwivedi" },
    publisher: {
      "@type": "Organization",
      name: "Infertility Legal Solutions",
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}/` },
    inLanguage: "en-IN",
  },
];

export const notFoundSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Not Found", item: `${SITE_URL}/404` },
    ],
  },
];