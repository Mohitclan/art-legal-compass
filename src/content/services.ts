// ServiceContent — single source of truth for every /services/* page,
// the /services listing, sitemap generation, and related-services links.
//
// CONTENT SOURCING POLICY (see .lovable/plan.md §6–§7):
//   • Every string here is either verbatim from existing site copy
//     (Hero, PracticeAreas, LegalActs, Contact) or a direct paraphrase
//     kept faithful to it. No AI-generated filler.
//   • Where source material does not yet exist, the field is set to a
//     TODO marker. ServicePageTemplate hides TODO sections in production
//     and surfaces them (via <ContentGap/>) only in DEV.
//   • writingBrief[] is the roadmap for expanding each page to
//     1,500–3,000 words later — kept next to the data on purpose.

export type Todo = { status: "todo"; note: string };
export const isTodo = (v: unknown): v is Todo =>
  !!v && typeof v === "object" && (v as Todo).status === "todo";

export type FAQ = { q: string; a: string };

export type ServiceContent = {
  slug: string; // e.g. "surrogacy-law"
  title: string; // H1 + <title>
  navLabel: string; // Practice Areas dropdown label
  metaDescription: string;
  keywords: string[];
  heroTagline: string;
  intro: string[]; // paragraphs
  applicableAct?: {
    shortName: string;
    fullName: string;
    href: string; // /legal-acts#slug
  };
  whoNeeds: string[] | Todo;
  benefits: string[] | Todo;
  legalProcess: { title: string; body: string }[] | Todo;
  eligibility: string[] | Todo;
  requiredDocuments: string[] | Todo;
  timeline: { phase: string; duration: string }[] | Todo;
  faqs: FAQ[];
  related: string[]; // slugs of other services
  writingBrief: string[]; // prompts to expand this page later
};

const commonFaqs = {
  contact: {
    q: "How do I book a consultation with Advocate Barkha Tiwari?",
    a: "Reach out at +91 8392931025 (Call or WhatsApp) or email barkha.abha2@gmail.com. Chamber consultations are held at Rohini Court Complex, Delhi.",
  },
};

export const services: ServiceContent[] = [
  {
    slug: "surrogacy-law",
    title: "Surrogacy Law — Approvals, Agreements & Compliance",
    navLabel: "Surrogacy Law",
    metaDescription:
      "Legal support for surrogacy in India under the Surrogacy (Regulation) Act, 2021 — eligibility certificates, altruistic surrogacy agreements, and compliance for intending couples and clinics.",
    keywords: [
      "surrogacy lawyer India",
      "surrogacy regulation act 2021",
      "altruistic surrogacy",
      "surrogacy agreement Delhi",
      "eligibility certificate surrogacy",
    ],
    heroTagline:
      "Complete legal support for surrogacy agreements and regulatory compliance",
    intro: [
      "The Surrogacy (Regulation) Act, 2021 governs every surrogacy arrangement in India. Only altruistic surrogacy is permitted, and both intending couples and surrogate mothers must satisfy strict eligibility, documentation, and certification requirements before any arrangement can begin.",
      "Advocate Barkha Tiwari advises intending couples, surrogates, and fertility clinics through the full regulatory pathway — from initial eligibility assessment and Board approvals to the drafting of legally sound altruistic surrogacy agreements and post-birth documentation.",
    ],
    applicableAct: {
      shortName: "Surrogacy Act",
      fullName: "Surrogacy (Regulation) Act, 2021",
      href: "/legal-acts#surrogacy",
    },
    whoNeeds: [
      "Indian married couples with proven medical infertility seeking altruistic surrogacy",
      "Indian widows and divorcees between 35 and 45 years exploring surrogacy",
      "Surrogate mothers requiring independent legal counsel and consent documentation",
      "IVF and ART clinics facilitating surrogacy that need compliance vetting",
    ],
    benefits: [
      "End-to-end handling of eligibility certificates and Board approvals",
      "Legally enforceable altruistic surrogacy agreements",
      "Protection of surrogate mother's rights and welfare",
      "Full compliance with the Surrogacy (Regulation) Act, 2021",
    ],
    legalProcess: { status: "todo", note: "Step-by-step surrogacy pathway (medical certification → Board application → agreement → embryo transfer → birth registration) to be documented from live case flow." },
    eligibility: [
      "Indian citizenship of intending couple / woman",
      "Proven medical infertility (certified by a District Medical Board)",
      "Married couple: wife 25–50 years, husband 26–55 years",
      "Widow/divorcee: 35–45 years",
      "No existing biological, adopted, or surrogate child (subject to statutory exceptions)",
    ],
    requiredDocuments: { status: "todo", note: "Checklist of intending couple + surrogate documentation to be finalized with client." },
    timeline: { status: "todo", note: "Typical duration for eligibility certification and Board approvals to be added once client provides average case data." },
    faqs: [
      {
        q: "Who can opt for surrogacy in India under the Surrogacy Regulation Act 2021?",
        a: "Only Indian married couples with proven medical infertility, and Indian widows/divorcees aged 35–45, may opt for altruistic surrogacy under the Surrogacy (Regulation) Act, 2021. Commercial surrogacy is prohibited.",
      },
      {
        q: "Is commercial surrogacy legal in India?",
        a: "No. Only altruistic surrogacy — where the surrogate receives no monetary compensation beyond medical expenses and insurance — is permitted.",
      },
      commonFaqs.contact,
    ],
    related: ["ivf-legal-services", "art-act-compliance", "foreign-intended-parents", "pc-pndt-compliance"],
    writingBrief: [
      "Add real-case timelines for District Medical Board certification in Delhi.",
      "Document standard clauses in the altruistic surrogacy agreement drafted by the chamber.",
      "Add section on birth registration and parentage orders post-delivery.",
      "Include commentary on 2023–2024 amendments and notifications.",
    ],
  },
  {
    slug: "ivf-legal-services",
    title: "IVF & ART Bank Legal Compliance",
    navLabel: "IVF Legal Services",
    metaDescription:
      "Legal compliance advisory for IVF centres and ART banks in India — registration under the ART (Regulation) Act 2021, informed consent, record-keeping and PC-PNDT alignment.",
    keywords: [
      "IVF lawyer India",
      "ART bank registration",
      "IVF centre compliance",
      "informed consent IVF",
      "fertility clinic legal advisor",
    ],
    heroTagline: "Ensuring full adherence to legal frameworks for fertility centers",
    intro: [
      "IVF centres and ART banks in India operate under a layered regulatory regime — the ART (Regulation) Act 2021, the PC-PNDT Act 1994, the Surrogacy (Regulation) Act 2021, and clinical establishment rules.",
      "The chamber provides ongoing compliance advisory to fertility clinics: from initial registration and standard operating procedures to informed-consent templates, record-keeping audits, and defence in regulatory proceedings.",
    ],
    applicableAct: {
      shortName: "ART Act",
      fullName: "Assisted Reproductive Technology (Regulation) Act, 2021",
      href: "/legal-acts#art",
    },
    whoNeeds: [
      "IVF centres seeking initial registration under the ART Act",
      "ART banks handling gamete collection, storage and supply",
      "Existing clinics preparing for regulatory inspection or audit",
      "Hospital groups launching a new fertility vertical",
    ],
    benefits: [
      "Complete registration and renewal filings under the ART Act",
      "Legally reviewed patient consent and clinical documentation",
      "PC-PNDT compliance alignment for embedded diagnostic services",
      "Representation before regulators and appellate authorities",
    ],
    legalProcess: { status: "todo", note: "Clinic onboarding workflow (site survey → SOP audit → registration filing → inspection support) to be captured from a live engagement." },
    eligibility: [
      "Registered medical establishment operating in India",
      "Qualified medical director and embryologist on record",
      "Facilities meeting ART Act infrastructure standards",
    ],
    requiredDocuments: { status: "todo", note: "Full ART registration checklist to be attached (facility plans, staff credentials, SOP manual, PC-PNDT registration, biomedical waste authorisation, etc.)." },
    timeline: { status: "todo", note: "Typical clinic-onboarding duration to be added." },
    faqs: [
      {
        q: "Do IVF centres need legal compliance in India?",
        a: "Yes. IVF and ART clinics must be registered under the ART Act 2021, comply with PC-PNDT record-keeping and informed consent norms, and follow surrogacy law where applicable. Non-compliance attracts heavy penalties.",
      },
      commonFaqs.contact,
    ],
    related: ["art-act-compliance", "surrogacy-law", "pc-pndt-compliance", "foreign-intended-parents"],
    writingBrief: [
      "Document typical PC-PNDT + ART overlap issues seen in Delhi clinics.",
      "Add case study on a clinic audit / inspection defence (anonymised).",
      "Include commentary on National ART & Surrogacy Registry filings.",
    ],
  },
  {
    slug: "art-act-compliance",
    title: "ART Act Compliance & Legal Documentation",
    navLabel: "ART Act Compliance",
    metaDescription:
      "Comprehensive Level I and Level II ART documentation, registration and compliance advisory under the Assisted Reproductive Technology (Regulation) Act, 2021.",
    keywords: [
      "ART Act 2021",
      "assisted reproductive technology compliance",
      "ART Level I Level II",
      "ART clinic registration",
      "ART bank compliance",
    ],
    heroTagline:
      "Comprehensive Level I & II documentation for Assisted Reproductive Technology",
    intro: [
      "The Assisted Reproductive Technology (Regulation) Act, 2021 classifies ART service providers into Level I and Level II clinics and mandates separate compliance obligations for each — plus a distinct regime for ART banks.",
      "The chamber prepares and reviews the full documentation stack required under the Act: registration filings, gamete-donation records, patient consent, welfare-of-child declarations, and reporting to the National ART & Surrogacy Registry.",
    ],
    applicableAct: {
      shortName: "ART Act",
      fullName: "Assisted Reproductive Technology (Regulation) Act, 2021",
      href: "/legal-acts#art",
    },
    whoNeeds: [
      "Level I clinics offering counselling, sperm-collection or ART procedures without embryology",
      "Level II clinics operating full ART laboratory services",
      "ART banks providing gametes and gamete storage services",
      "Hospitals integrating ART into existing OB-GYN departments",
    ],
    benefits: [
      "Correct Level I / Level II classification and filing",
      "Standardised gamete-donation and consent templates",
      "Registry reporting compliance",
      "Ongoing regulatory representation",
    ],
    legalProcess: { status: "todo", note: "Level I vs Level II filing checklist and timelines to be captured." },
    eligibility: [
      "Registered clinical establishment",
      "Medical staff meeting ART Act qualifications",
      "Compliant infrastructure per ART Rules",
    ],
    requiredDocuments: { status: "todo", note: "Full documentation matrix by clinic level to be attached." },
    timeline: { status: "todo", note: "Registration turnaround times to be added." },
    faqs: [
      {
        q: "What is the ART (Regulation) Act 2021?",
        a: "The Assisted Reproductive Technology (Regulation) Act, 2021 regulates ART clinics and banks in India, mandates their registration with the National Registry, and safeguards the rights of donors, patients and children born through ART.",
      },
      commonFaqs.contact,
    ],
    related: ["ivf-legal-services", "surrogacy-law", "pc-pndt-compliance", "foreign-intended-parents"],
    writingBrief: [
      "Compare Level I vs Level II obligations in a detailed table.",
      "Add section on gamete-donor anonymity and record retention.",
      "Document National ART & Surrogacy Board interaction (drafts to be shared by chamber).",
    ],
  },
  {
    slug: "pc-pndt-compliance",
    title: "PC-PNDT Act Compliance & Legal Advisory",
    navLabel: "PC & PNDT Compliance",
    metaDescription:
      "Expert legal advisory on the Pre-Conception and Pre-Natal Diagnostic Techniques (PC-PNDT) Act, 1994 — clinic registration, record-keeping, and defence in prosecution matters.",
    keywords: [
      "PC-PNDT Act",
      "PNDT lawyer India",
      "sex determination law",
      "prenatal diagnostic techniques",
      "PC-PNDT compliance",
    ],
    heroTagline:
      "Expert guidance on Pre-Conception and Pre-Natal Diagnostic Techniques Act",
    intro: [
      "The Pre-Conception and Pre-Natal Diagnostic Techniques Act, 1994 prohibits sex-selection before or after conception and regulates the use of pre-natal diagnostic techniques. It imposes strict registration, record-keeping and reporting duties on genetic counselling centres, laboratories and ultrasound clinics.",
      "The chamber advises diagnostic centres, ultrasound clinics and hospitals on registration and renewal, Form F record-keeping, appropriate authority inspections, and defence in PC-PNDT prosecutions.",
    ],
    applicableAct: {
      shortName: "PC-PNDT Act",
      fullName: "Pre-Conception & Pre-Natal Diagnostic Techniques Act, 1994",
      href: "/legal-acts#pc-pndt",
    },
    whoNeeds: [
      "Ultrasound clinics and diagnostic centres",
      "Genetic counselling centres and laboratories",
      "Hospitals with radiology and obstetric imaging",
      "Clinics facing appropriate-authority notices or sealing orders",
    ],
    benefits: [
      "Registration and renewal filings under the PC-PNDT Act",
      "Form F audits and record-keeping SOPs",
      "Representation before Appropriate Authorities",
      "Defence in PC-PNDT criminal prosecutions",
    ],
    legalProcess: { status: "todo", note: "PC-PNDT notice → response → hearing → sealing/appeal pathway to be documented from live matters at Rohini Court." },
    eligibility: [
      "Registered medical / diagnostic establishment",
      "Qualified radiologist / sonologist on record",
      "Compliant equipment and premises",
    ],
    requiredDocuments: { status: "todo", note: "Registration and Form F checklist to be attached." },
    timeline: { status: "todo", note: "Typical PC-PNDT prosecution duration at Rohini Court to be added." },
    faqs: [
      {
        q: "What does the PC-PNDT Act 1994 prohibit?",
        a: "The Pre-Conception and Pre-Natal Diagnostic Techniques Act, 1994 prohibits sex-selection before or after conception and misuse of prenatal diagnostic techniques for determining the sex of the foetus.",
      },
      commonFaqs.contact,
    ],
    related: ["ivf-legal-services", "art-act-compliance", "surrogacy-law", "foreign-intended-parents"],
    writingBrief: [
      "Add checklist of common inspection findings and cures.",
      "Document Form F best practices with sample entries.",
      "Add commentary on notable PC-PNDT judgments cited in defence.",
    ],
  },
  {
    slug: "foreign-intended-parents",
    title: "Legal Advisory for Foreign Intended Parents",
    navLabel: "Foreign Intended Parents",
    metaDescription:
      "Legal advisory for foreign intended parents on the current position of surrogacy and ART in India — statutory restrictions, alternatives, and cross-border considerations.",
    keywords: [
      "foreign intended parents India",
      "cross-border surrogacy India",
      "OCI surrogacy",
      "NRI IVF India",
      "international surrogacy law",
    ],
    heroTagline:
      "Clarity on India's current legal position for foreign intended parents",
    intro: [
      "The Surrogacy (Regulation) Act, 2021 restricts surrogacy in India to Indian citizens; foreign nationals are outside the scope of the Act as it stands. NRI, OCI, and PIO status carries its own set of considerations that must be assessed carefully before any ART or surrogacy engagement in India.",
      "The chamber provides preliminary opinions to foreign intended parents on the current legal position, available options for ART treatment where permissible, and referrals for cross-border matters.",
    ],
    applicableAct: {
      shortName: "Surrogacy Act",
      fullName: "Surrogacy (Regulation) Act, 2021",
      href: "/legal-acts#surrogacy",
    },
    whoNeeds: [
      "NRI / OCI couples seeking clarity on ART or surrogacy eligibility in India",
      "Foreign intended parents evaluating cross-border options",
      "Fertility clinics receiving international patient enquiries",
    ],
    benefits: [
      "Written preliminary legal opinion on eligibility",
      "Clear explanation of statutory restrictions",
      "Guidance on ART treatment options where permissible",
    ],
    legalProcess: { status: "todo", note: "Client intake questionnaire and opinion workflow to be documented." },
    eligibility: { status: "todo", note: "Eligibility varies significantly by citizenship / OCI status — matrix to be prepared with the chamber." },
    requiredDocuments: { status: "todo", note: "Passport, visa, OCI/PIO documents and medical records list to be finalised." },
    timeline: { status: "todo", note: "Turnaround for preliminary opinions to be added." },
    faqs: [
      commonFaqs.contact,
    ],
    related: ["surrogacy-law", "ivf-legal-services", "art-act-compliance", "pc-pndt-compliance"],
    writingBrief: [
      "Draft an OCI / NRI eligibility matrix under the Surrogacy Act 2021.",
      "Document current MEA and Home Ministry advisories on cross-border surrogacy.",
      "Add jurisprudence: pre-2021 international surrogacy cases and post-Act clarifications.",
      "Include a section on ART treatment (as distinct from surrogacy) for foreign nationals.",
    ],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
export const getRelated = (slugs: string[]) =>
  slugs.map((s) => services.find((x) => x.slug === s)).filter(Boolean) as ServiceContent[];