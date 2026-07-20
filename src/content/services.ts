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
  // Rich long-form content (optional, rendered by ServicePageTemplate).
  legalOverview?: string[];
  applicableLaws?: { name: string; summary: string }[];
  rightsResponsibilities?: { rights: string[]; responsibilities: string[] };
  commonMistakes?: string[];
  complianceChecklist?: string[];
  internationalClients?: string[];
  whyChoose?: string[];
  conclusion?: string[];
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
    title: "Surrogacy Lawyer in India — Surrogacy Regulation Act, 2021 Compliance",
    navLabel: "Surrogacy Law",
    metaDescription:
      "India's leading surrogacy lawyer for altruistic surrogacy agreements, eligibility certificates, Board approvals and full compliance under the Surrogacy (Regulation) Act, 2021.",
    keywords: [
      "surrogacy lawyer India",
      "surrogacy regulation act 2021",
      "altruistic surrogacy India",
      "surrogacy agreement Delhi",
      "eligibility certificate surrogacy",
      "surrogacy law compliance",
    ],
    heroTagline:
      "End-to-end legal representation for altruistic surrogacy under the Surrogacy (Regulation) Act, 2021 — from eligibility certification to birth registration.",
    intro: [
      "Surrogacy in India is one of the most tightly regulated areas of medical law. The Surrogacy (Regulation) Act, 2021 and the Surrogacy (Regulation) Rules, 2022 have completely restructured how intending couples, single women, surrogate mothers and fertility clinics may participate in a surrogacy arrangement. What was once a largely contract-driven, commercial industry is now a statutory framework that requires certified medical indication, Board approvals, insurance cover and a legally vetted altruistic surrogacy agreement before a single embryo transfer can lawfully take place.",
      "For families struggling with infertility, this legislative shift has brought both clarity and complexity. Clarity because the rights of the child, the surrogate mother and the intending parents are now explicitly protected by statute. Complexity because every step — from proving medical infertility to drafting the agreement and registering the birth — must strictly conform to the Act. A single procedural lapse can invalidate the arrangement, expose clinics to criminal prosecution and leave the child's legal parentage uncertain.",
      "Advocate Barkha Tiwari has represented intending couples, surrogate mothers and ART clinics across Delhi NCR in every phase of the surrogacy pathway. As a dedicated surrogacy lawyer in India, the chamber focuses exclusively on the compliance-heavy areas of ART, surrogacy and PC-PNDT — advising on eligibility, drafting statutorily compliant altruistic surrogacy agreements, securing District Medical Board and Surrogacy Board approvals, and ensuring that the post-birth documentation withstands scrutiny by hospitals, registrars and passport authorities.",
      "This page is a working legal resource for anyone considering surrogacy in India. It explains the statute, walks through the process, sets out the eligibility criteria and documentation, addresses the most common legal mistakes, and answers the questions clients ask most often. If any element of your situation is unusual — a same-sex partner, an OCI card holder, an unresolved medical condition, an earlier failed IVF cycle abroad — treat this page as a starting point and follow up with a formal consultation before signing anything or beginning treatment.",
    ],
    applicableAct: {
      shortName: "Surrogacy Act",
      fullName: "Surrogacy (Regulation) Act, 2021",
      href: "/legal-acts#surrogacy",
    },
    legalOverview: [
      "The Surrogacy (Regulation) Act, 2021 came into force on 25 January 2022, followed by the Surrogacy (Regulation) Rules, 2022 in June the same year. The Act's central objective is to prohibit commercial surrogacy and permit only altruistic surrogacy for eligible Indian citizens. It creates a two-tier institutional architecture: a National Assisted Reproductive Technology and Surrogacy Board at the centre and State Boards in each State and Union Territory, along with Appropriate Authorities responsible for registration, inspection and enforcement.",
      "Under the statute, a surrogacy clinic cannot conduct any surrogacy procedure without being registered under the Act. An intending couple or intending woman cannot approach a clinic without first obtaining a certificate of essentiality and a certificate of eligibility from the Appropriate Authority. The surrogate mother must herself satisfy a separate eligibility standard, including being an ever-married woman aged 25 to 35 with a child of her own, and she must give informed written consent recorded in the prescribed format. She must also be insured for a period of thirty-six months covering any post-partum complications.",
      "The Act criminalises commercial surrogacy, sex-selective surrogacy, abandonment of the surrogate child, exploitation of the surrogate mother, and any advertisement of surrogacy services. Contraventions attract imprisonment that may extend to ten years and fines that may extend to ten lakh rupees. For clinics, non-compliance can also mean cancellation of registration under both the Surrogacy Act and the Assisted Reproductive Technology (Regulation) Act, 2021, which operate as parallel and complementary regimes.",
    ],
    applicableLaws: [
      {
        name: "Surrogacy (Regulation) Act, 2021",
        summary:
          "The principal legislation governing every surrogacy arrangement in India. It defines who may act as an intending parent or surrogate mother, mandates altruistic-only surrogacy, requires certificates of essentiality and eligibility, prescribes insurance cover for the surrogate, and criminalises commercial surrogacy and related exploitative practices.",
      },
      {
        name: "Surrogacy (Regulation) Rules, 2022",
        summary:
          "Operational rules that prescribe the forms, procedures, documentation, insurance particulars and record-keeping obligations under the Act. Every certificate application, consent record and clinic filing traces back to a numbered form under these Rules.",
      },
      {
        name: "Assisted Reproductive Technology (Regulation) Act, 2021",
        summary:
          "Companion legislation regulating IVF clinics and ART banks. Any surrogacy in India necessarily involves ART procedures — embryo creation, gamete handling and embryo transfer — which are governed by this Act. Surrogacy compliance is only complete when the underlying ART compliance is also in order.",
      },
      {
        name: "Pre-Conception and Pre-Natal Diagnostic Techniques Act, 1994",
        summary:
          "Prohibits sex determination and sex-selection. Every ultrasound and prenatal diagnostic test conducted during a surrogate pregnancy must comply with PC-PNDT record-keeping, Form F entries and registration requirements.",
      },
      {
        name: "Medical Termination of Pregnancy Act, 1971 (as amended in 2021)",
        summary:
          "Applies to any termination of a surrogate pregnancy. Written consent of the surrogate mother is indispensable and terminations must satisfy the statutory grounds and gestational limits.",
      },
      {
        name: "Indian Contract Act, 1872 and Registration Act, 1908",
        summary:
          "The altruistic surrogacy agreement is, at its core, a contract. Standard doctrines of free consent, competence and lawful object apply, alongside the statutory requirement that the agreement be reduced to writing and notarised in accordance with the Surrogacy Rules.",
      },
    ],
    whoNeeds: [
      "Indian married couples with proven medical infertility seeking altruistic surrogacy",
      "Indian widows aged 35 to 45 exploring surrogacy as a route to parenthood",
      "Indian divorcees aged 35 to 45 within the same statutory age band",
      "Surrogate mothers who require independent legal counsel and consent documentation",
      "IVF and ART clinics facilitating surrogacy who need pre-procedure compliance vetting",
      "Hospitals and nursing homes handling deliveries of surrogate pregnancies",
      "OCI or NRI families requiring an opinion on their eligibility under the Act",
    ],
    benefits: [
      "End-to-end handling of certificates of essentiality and eligibility",
      "Legally enforceable altruistic surrogacy agreements drafted to statute",
      "Independent representation of the surrogate mother's interests",
      "Coordination with clinics for compliant embryo transfer documentation",
      "Guidance on insurance cover for the surrogate mother",
      "Assistance with birth registration and parentage documentation",
      "Defence against notices from Appropriate Authorities and State Boards",
    ],
    legalProcess: [
      {
        title: "Initial legal consultation and eligibility screening",
        body: "A confidential intake session to review medical history, marital status, prior pregnancies, past IVF or surrogacy attempts and citizenship. The chamber issues a written opinion confirming whether the couple or woman qualifies under the Surrogacy (Regulation) Act, 2021 and identifies any documentation that needs to be reconstructed before the formal application.",
      },
      {
        title: "Medical certification of infertility",
        body: "The intending couple obtains a medical certificate of infertility from a District Medical Board. This certificate — not a private clinic opinion — is the statutory foundation for every subsequent step. The chamber liaises with clinics to ensure that the medical documentation supporting the Board's certification is coherent, complete and diagnosis-specific.",
      },
      {
        title: "Certificate of essentiality",
        body: "An application is filed with the Appropriate Authority for a certificate of essentiality, which records the medical indication for surrogacy, confirms insurance cover for the surrogate mother for thirty-six months, and evidences a court order (if required) concerning parentage and custody of the child.",
      },
      {
        title: "Certificate of eligibility",
        body: "A separate certificate of eligibility is applied for and issued once the Authority is satisfied that the intending couple or intending woman satisfies age, citizenship, marital status and no-existing-child conditions. The surrogate mother obtains her own certificate of eligibility documenting her age, marital status, existing child, medical fitness and consent.",
      },
      {
        title: "Drafting the altruistic surrogacy agreement",
        body: "The chamber drafts a bespoke agreement between the intending parties, the surrogate mother and (where appropriate) her spouse. The agreement covers medical decisions during pregnancy, insurance, permissible expenses, confidentiality, custody of the child from birth, and dispute resolution. It is executed on stamp paper and notarised.",
      },
      {
        title: "Embryo transfer and pregnancy monitoring",
        body: "Only after all certificates are in hand and the agreement is executed may the registered ART clinic proceed with embryo transfer. Every prenatal scan and diagnostic test must comply with PC-PNDT Form F requirements. The chamber remains available to review any adverse event or medical decision that has legal implications.",
      },
      {
        title: "Birth, custody and registration",
        body: "On delivery, the child is placed in the custody of the intending parents. The birth certificate is applied for in the intending parents' names in accordance with the Surrogacy Rules. The chamber assists with the hospital discharge summary, birth registration and, where needed, passport, Aadhaar and school-admission documentation.",
      },
    ],
    eligibility: [
      "Indian citizenship of the intending couple or intending woman",
      "Proven medical infertility certified by a District Medical Board",
      "Intending couple: wife 23 to 50 years and husband 26 to 55 years (as prescribed)",
      "Intending woman (widow or divorcee): 35 to 45 years",
      "Legally married for at least five years, in the case of an intending couple",
      "No existing biological, adopted or surrogate child, subject to statutory exceptions for a child with a life-threatening disorder or fatal illness",
      "Surrogate mother: ever-married woman aged 25 to 35 with a child of her own, acting as surrogate only once in her lifetime",
      "Surrogate mother must be medically and psychologically fit as certified by a registered medical practitioner",
      "Insurance cover for the surrogate mother for thirty-six months",
    ],
    requiredDocuments: [
      "Aadhaar, PAN and passport copies of the intending couple or intending woman",
      "Marriage certificate and proof of duration of marriage",
      "Medical certificate of infertility from the District Medical Board",
      "Complete medical records of prior IVF or fertility treatments",
      "Certificate of essentiality and certificate of eligibility issued by the Appropriate Authority",
      "Surrogate mother's Aadhaar, marriage certificate and identity proof",
      "Consent affidavit of the surrogate mother and her spouse",
      "Medical fitness and psychological evaluation of the surrogate mother",
      "Insurance policy for the surrogate mother for thirty-six months",
      "Court order (where required) regarding parentage and custody",
      "Executed and notarised altruistic surrogacy agreement",
      "Registration certificate of the surrogacy clinic and treating ART clinic",
    ],
    timeline: [
      { phase: "Initial legal opinion", duration: "3–5 working days" },
      { phase: "Medical Board certification", duration: "3–6 weeks" },
      { phase: "Certificates of essentiality and eligibility", duration: "6–10 weeks" },
      { phase: "Drafting and execution of agreement", duration: "1–2 weeks" },
      { phase: "Embryo transfer to delivery", duration: "~9 months" },
      { phase: "Birth registration and post-delivery documents", duration: "2–4 weeks" },
    ],
    rightsResponsibilities: {
      rights: [
        "Right of the intending parents to sole legal and physical custody of the child from birth",
        "Right of the surrogate mother to full informed consent at every stage",
        "Right of the surrogate mother to insurance cover, medical care and permissible expenses",
        "Right of the child to have parentage recorded in the intending parents' names",
        "Right to confidentiality of medical and personal records",
        "Right to withdraw consent by the surrogate before embryo implantation",
      ],
      responsibilities: [
        "Obligation of the intending parents to bear all medical expenses and insurance costs",
        "Obligation to accept custody of the child regardless of gender or medical condition",
        "Obligation of the clinic to maintain statutory records and file periodic returns",
        "Obligation of the surrogate mother to follow prescribed medical care during pregnancy",
        "Obligation of all parties to comply with the executed altruistic surrogacy agreement",
        "Obligation to preserve documentation for the statutory retention period",
      ],
    },
    commonMistakes: [
      "Beginning treatment before certificates of essentiality and eligibility are actually issued",
      "Relying on a private clinic infertility certificate instead of a District Medical Board certification",
      "Using a template surrogacy agreement not aligned with the Surrogacy Rules, 2022",
      "Failing to purchase the thirty-six-month insurance cover for the surrogate mother",
      "Recording the surrogate mother's name on the birth certificate contrary to the Rules",
      "Engaging a surrogate mother who has previously acted as a surrogate in another arrangement",
      "Advertising surrogacy services online — an offence attracting imprisonment and fine",
      "Skipping PC-PNDT Form F entries during ultrasound scans of the surrogate pregnancy",
      "Making any payment to the surrogate mother beyond permissible medical expenses and insurance",
    ],
    complianceChecklist: [
      "Registration certificate of the surrogacy clinic under the Surrogacy Act",
      "Registration certificate of the ART clinic and ART bank under the ART Act",
      "PC-PNDT registration for any ultrasound facility used for prenatal scans",
      "District Medical Board certificate of infertility on record",
      "Certificate of essentiality issued and cross-referenced to insurance policy",
      "Certificate of eligibility of intending parents on record",
      "Certificate of eligibility of surrogate mother on record",
      "Executed and notarised altruistic surrogacy agreement in the prescribed form",
      "Written informed consent of the surrogate mother in the prescribed form",
      "Thirty-six-month insurance policy in the surrogate mother's name",
      "Periodic returns to the Appropriate Authority filed on time",
      "Complete case file preserved for the statutory retention period",
    ],
    internationalClients: [
      "The Surrogacy (Regulation) Act, 2021 restricts surrogacy in India to Indian citizens. As a result, foreign nationals — including those holding tourist, business or employment visas — are not eligible to commission surrogacy in India as the law presently stands. This is a firm statutory bar, and no clinic or lawyer can lawfully proceed on behalf of a foreign passport holder simply because a hospital or agent has represented otherwise.",
      "The position of Overseas Citizen of India (OCI) card holders and Non-Resident Indians (NRIs) requires case-by-case assessment. NRIs who hold Indian citizenship remain within the scope of the Act and may, subject to satisfying every other eligibility criterion, participate as intending parents. OCI card holders are foreign citizens for statutory purposes; their eligibility is therefore highly restricted and requires a written legal opinion referencing the latest Ministry of Health and Family Welfare and Ministry of External Affairs advisories.",
      "The chamber issues preliminary opinions to OCI and NRI families based on their passport, OCI card, marriage certificate and medical history. Where a client is ineligible to pursue surrogacy in India, the opinion also identifies lawful alternatives — such as ART treatment (as distinct from surrogacy) where permissible — and referral routes for cross-border matters. Under no circumstances should a client rely on informal assurances from clinics or intermediaries when foreign citizenship is involved.",
    ],
    whyChoose: [
      "Focused practice in ART, surrogacy and PC-PNDT compliance — not a general litigation chamber",
      "Hands-on experience with District Medical Boards, State Boards and Appropriate Authorities in Delhi NCR",
      "Bespoke drafting of altruistic surrogacy agreements, not template downloads",
      "Independent legal representation of surrogate mothers where required",
      "Coordinated approach across the Surrogacy Act, ART Act and PC-PNDT Act",
      "Discreet, confidential handling of sensitive medical and personal information",
      "Chamber based at Rohini Court Complex, Delhi, with direct access to matrimonial and civil forums",
    ],
    conclusion: [
      "Surrogacy in India is achievable, lawful and safe when the statutory framework is respected in full. It is fraught with legal and personal risk when it is not. If you are considering surrogacy — whether as an intending parent, a prospective surrogate or a fertility clinic — the correct first step is a written legal opinion tailored to your facts, followed by a compliant end-to-end pathway executed under professional supervision.",
      "To speak with Advocate Barkha Tiwari about a surrogacy matter, call or WhatsApp +91 8392931025 or email barkha.abha2@gmail.com. Consultations are held at the chamber in Rohini Court Complex, Delhi, and virtual consultations are available for out-of-station clients.",
    ],
    faqs: [
      {
        q: "Who can opt for surrogacy in India under the Surrogacy Regulation Act 2021?",
        a: "Only Indian married couples with proven medical infertility, and Indian widows or divorcees aged 35 to 45, may opt for altruistic surrogacy under the Surrogacy (Regulation) Act, 2021. All parties must satisfy statutory age, citizenship, marital status and no-existing-child requirements, and must hold valid certificates of essentiality and eligibility before any procedure begins.",
      },
      {
        q: "Is commercial surrogacy legal in India?",
        a: "No. Commercial surrogacy is expressly prohibited. Only altruistic surrogacy is permitted, meaning the surrogate mother may receive medical expenses and insurance cover for thirty-six months, but no additional compensation. Any monetary inducement is a criminal offence attracting imprisonment and a substantial fine.",
      },
      {
        q: "How long does it take to complete the certification process for surrogacy?",
        a: "In our experience across Delhi NCR, medical Board certification typically takes three to six weeks, followed by six to ten weeks for the certificates of essentiality and eligibility. Actual timelines depend on the completeness of medical records and the workload of the Appropriate Authority.",
      },
      {
        q: "Can a single unmarried woman opt for surrogacy in India?",
        a: "The Act limits surrogacy for single women to widows and divorcees aged 35 to 45. Unmarried women who have never been married are outside the current statutory framework for surrogacy, though they may separately be eligible for ART treatment.",
      },
      {
        q: "What happens if the intending parents refuse to accept the child after birth?",
        a: "Abandonment or refusal to accept the surrogate child is an offence under the Surrogacy (Regulation) Act, 2021. The intending parents are legally obliged to accept the child irrespective of gender, health condition or any change in personal circumstances, and the child's rights are protected by statute.",
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