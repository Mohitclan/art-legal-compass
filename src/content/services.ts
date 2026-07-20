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
    title: "IVF Legal Services in India — Fertility Clinic & Patient Legal Advisory",
    navLabel: "IVF Legal Services",
    metaDescription:
      "Dedicated IVF legal services in India for fertility clinics, ART banks and patients — informed consent, embryo custody, donor agreements, PC-PNDT alignment and full ART Act compliance.",
    keywords: [
      "IVF legal services",
      "IVF lawyer India",
      "ART bank registration",
      "IVF centre compliance",
      "informed consent IVF",
      "fertility clinic legal advisor",
      "embryo custody India",
    ],
    heroTagline:
      "Specialised IVF legal services for fertility clinics, ART banks and patients across India.",
    intro: [
      "In vitro fertilisation has evolved from a niche medical intervention into one of the most litigated and regulated areas of Indian healthcare. Every IVF cycle sits at the intersection of the Assisted Reproductive Technology (Regulation) Act, 2021, the Pre-Conception and Pre-Natal Diagnostic Techniques Act, 1994, the Surrogacy (Regulation) Act, 2021, the Clinical Establishments Act, the Bio-Medical Waste Management Rules and the ordinary law of contract and tort. Robust IVF legal services are no longer optional; they are the foundation on which a modern fertility practice — and a patient's trust in that practice — is built.",
      "For patients, IVF is a deeply personal journey involving significant financial investment, emotional stress and highly technical medical decisions. Consent forms are signed at every stage — for controlled ovarian stimulation, oocyte retrieval, sperm collection, embryo creation, cryopreservation, embryo transfer, embryo disposition and, in donor cycles, third-party gametes. Each of these consents is a legal instrument with real consequences. Ambiguous or defective consents are the single largest source of IVF disputes in India.",
      "For clinics and ART banks, the risks are equally real. Regulators may inspect at short notice. Patients may allege negligence, misrepresentation or breach of confidentiality. Disputes may arise over embryo custody after separation, over donor identification or over the accuracy of medical records. Every one of these risks can be substantially mitigated by well-drafted documentation, disciplined record-keeping and a clear governance framework aligned with the ART Act and its Rules.",
      "Advocate Barkha Tiwari provides end-to-end IVF legal services from Delhi. The chamber acts for fertility clinics on registration, SOP development and inspection defence, and for patients on consent review, embryo custody, donor agreements and grievance representation. This resource explains the framework, the process, the mistakes to avoid and the safeguards every stakeholder should insist on.",
    ],
    applicableAct: {
      shortName: "ART Act",
      fullName: "Assisted Reproductive Technology (Regulation) Act, 2021",
      href: "/legal-acts#art",
    },
    legalOverview: [
      "The ART Act 2021 is the central legislation governing IVF in India. It requires every clinic and every ART bank to be registered with the National Registry of the Board through the State ART and Surrogacy Board. It classifies clinics into Level 1 (basic services such as ovulation induction and intra-uterine insemination) and Level 2 (advanced services including IVF, ICSI, embryo transfer, and cryopreservation), and imposes different infrastructure, staffing and record-keeping obligations for each.",
      "Beyond registration, the Act mandates informed written consent in the prescribed forms, restricts gamete donation to age-defined healthy adults, provides for donor screening for HIV, hepatitis and genetic disorders, protects donor anonymity while preserving traceability, and prohibits the sale, transfer or use of human embryos or gametes except as expressly permitted. Sex-selective ART is prohibited and cross-referenced to the PC-PNDT Act. Every clinic must file periodic returns and submit to inspection by the Appropriate Authority.",
      "For patients, the ART Act creates a substantive right to accurate information, informed consent, confidentiality, and safe medical procedures. It also empowers the Appropriate Authority to entertain complaints and impose penalties, offering a statutory remedy in addition to consumer forum and civil remedies. Contraventions attract imprisonment up to twelve years for the most serious offences and heavy fines for procedural lapses.",
    ],
    applicableLaws: [
      {
        name: "Assisted Reproductive Technology (Regulation) Act, 2021",
        summary:
          "Central statute governing IVF clinics and ART banks — registration, classification, gamete donation, informed consent, welfare of the child, national registry filings and enforcement.",
      },
      {
        name: "Assisted Reproductive Technology (Regulation) Rules, 2022",
        summary:
          "Operational rules prescribing infrastructure standards, staffing qualifications, prescribed consent forms, record retention periods and inspection protocols.",
      },
      {
        name: "Pre-Conception and Pre-Natal Diagnostic Techniques Act, 1994",
        summary:
          "Applies to every ultrasound and prenatal diagnostic test conducted as part of an IVF cycle or pregnancy. Requires PC-PNDT registration for the imaging facility and disciplined Form F entries for every scan.",
      },
      {
        name: "Surrogacy (Regulation) Act, 2021",
        summary:
          "Applies where an IVF cycle is undertaken as part of a surrogacy arrangement. Clinics performing embryo transfer in surrogacy must ensure the intending parents hold valid certificates of essentiality and eligibility.",
      },
      {
        name: "Consumer Protection Act, 2019",
        summary:
          "Patients qualify as consumers of medical services. Deficiency of service, misleading advertising and lack of informed consent may found consumer complaints alongside statutory remedies under the ART Act.",
      },
      {
        name: "Bio-Medical Waste Management Rules, 2016",
        summary:
          "Applicable to all clinical waste generated by IVF laboratories, including embryology waste and used culture media. Non-compliance can trigger enforcement action independent of the ART Act.",
      },
      {
        name: "Clinical Establishments (Registration and Regulation) Act, 2010",
        summary:
          "Where notified, mandates registration of clinical establishments including IVF centres. Operates alongside the ART Act as a parallel state-level compliance stream.",
      },
    ],
    whoNeeds: [
      "IVF centres seeking initial registration under the ART Act",
      "ART banks handling gamete collection, storage and supply",
      "Existing clinics preparing for regulatory inspection or audit",
      "Hospital groups launching a new fertility vertical",
      "Patients undergoing IVF who want independent review of consent forms",
      "Couples in dispute over the custody or disposition of stored embryos",
      "Donors of gametes seeking clarity on anonymity, screening and remuneration",
    ],
    benefits: [
      "Complete registration and renewal filings under the ART Act",
      "Legally reviewed patient consent and clinical documentation",
      "PC-PNDT compliance alignment for embedded diagnostic services",
      "Representation before regulators and appellate authorities",
      "Independent legal advice for patients before signing consent",
      "Structured resolution of embryo custody and donor disputes",
      "Litigation defence in consumer, civil and criminal forums",
    ],
    legalProcess: [
      {
        title: "Compliance diagnostic",
        body: "A structured review of the clinic's existing registrations, SOPs, consent library, staff qualifications, PC-PNDT records and inspection history to identify gaps against the ART Act, its Rules and allied laws.",
      },
      {
        title: "Registration and classification",
        body: "Preparation and filing of the ART Act registration application in the correct Level 1 or Level 2 category, coordinated with ART bank registration where applicable, and follow-up with the State Board through issuance of the registration certificate.",
      },
      {
        title: "Consent and documentation stack",
        body: "Drafting or overhaul of the full library of consents — stimulation, retrieval, sperm collection, ICSI, embryo transfer, cryopreservation, embryo disposition, donor agreements — in the prescribed forms and in plain, patient-comprehensible language.",
      },
      {
        title: "PC-PNDT integration",
        body: "Alignment of the clinic's ultrasound and imaging operations with PC-PNDT registration, Form F record-keeping and periodic returns, to prevent parallel prosecution risk during ART inspections.",
      },
      {
        title: "Standard operating procedures",
        body: "Development of SOPs for gamete handling, cryostorage, embryo tracking, incident reporting and record retention, mapped to statutory obligations and audit-ready at short notice.",
      },
      {
        title: "Ongoing advisory and inspection defence",
        body: "Retainer-based ongoing advisory covering new patient scenarios, staff changes, renewals and, where an Appropriate Authority notice or inspection is issued, immediate representation.",
      },
      {
        title: "Dispute resolution and litigation",
        body: "Representation before consumer forums, civil courts and criminal courts in patient disputes, embryo custody battles, donor-identity claims and defamation matters connected with IVF treatment.",
      },
    ],
    eligibility: [
      "Registered medical establishment operating in India",
      "Qualified medical director and embryologist on record",
      "Facilities meeting ART Act infrastructure standards for Level 1 or Level 2",
      "Compliance with Bio-Medical Waste Management Rules",
      "PC-PNDT registration for any ultrasound facility",
      "Willingness to submit to periodic returns and inspection",
    ],
    requiredDocuments: [
      "Constitution documents of the clinic (registration, partnership deed or incorporation)",
      "Building plan and infrastructure certificate",
      "Qualifications and registration certificates of medical and embryology staff",
      "Standard Operating Procedures manual",
      "Existing PC-PNDT registration certificate",
      "Bio-medical waste authorisation",
      "Fire safety and building safety certificates",
      "Consent form library for review",
      "Existing donor and surrogate agreements (if any)",
      "Records of previous inspections and any notices received",
    ],
    timeline: [
      { phase: "Compliance diagnostic", duration: "2–3 weeks" },
      { phase: "Consent and SOP overhaul", duration: "4–6 weeks" },
      { phase: "ART Act registration filing", duration: "2–4 weeks" },
      { phase: "State Board processing", duration: "8–16 weeks" },
      { phase: "Ongoing retainer", duration: "Rolling" },
    ],
    rightsResponsibilities: {
      rights: [
        "Patients' right to accurate, jargon-free information before consent",
        "Patients' right to confidentiality of medical and genetic data",
        "Donors' right to anonymity within the statutory framework",
        "Clinics' right to hearing before adverse regulatory action",
        "Right to appeal against orders of the Appropriate Authority",
      ],
      responsibilities: [
        "Clinics must maintain registration and file periodic returns",
        "Clinics must obtain written informed consent in the prescribed forms",
        "Clinics must comply with PC-PNDT record-keeping in parallel",
        "Donors must submit to screening and truthful health disclosure",
        "Patients must provide accurate medical history for safe treatment",
      ],
    },
    commonMistakes: [
      "Using generic hospital consent forms instead of ART Act prescribed forms",
      "Storing embryos without a written embryo disposition instruction",
      "Failing to renew ART Act or PC-PNDT registration on time",
      "Overstating clinic success rates in advertising or on social media",
      "Sharing donor identifying information with patients or intermediaries",
      "Undertaking embryo transfer for surrogacy without verifying certificates of essentiality and eligibility",
      "Overlooking Bio-Medical Waste authorisation renewals",
      "Poor documentation of adverse events and complications",
    ],
    complianceChecklist: [
      "Valid ART Act registration certificate on display",
      "PC-PNDT registration certificate on display",
      "Bio-medical waste authorisation current",
      "SOP manual updated within the last twelve months",
      "Consent form library aligned with ART Rules 2022",
      "Donor screening and record retention protocols in force",
      "Embryo storage register with disposition instructions",
      "Periodic returns filed with the State Board",
      "Complaint register and internal grievance mechanism",
      "Regular internal audit of Form F entries",
    ],
    internationalClients: [
      "IVF treatment for foreign patients is not blanket prohibited in the way surrogacy is, but it is subject to detailed statutory conditions and evolving Ministry of Health advisories. NRIs holding Indian citizenship generally retain their eligibility on par with resident Indians, whereas Overseas Citizen of India cardholders and foreign nationals require a case-by-case assessment before treatment begins.",
      "For international patients travelling to India for IVF, particular attention must be paid to visa category, custody and transport of frozen gametes or embryos, cross-border movement of biological material, and the legal position in the patient's home country regarding treatment received in India. Clinics accepting international patients should insist on written pre-treatment opinions and country-specific disclosures to avoid future disputes.",
      "Advocate Barkha Tiwari issues written opinions for both individual international patients and for fertility clinics that receive high volumes of international enquiries. These opinions cover eligibility, permissible procedures, documentation and post-treatment considerations, and are updated as the regulatory framework evolves.",
    ],
    whyChoose: [
      "Focused fertility-law practice at the intersection of ART, surrogacy and PC-PNDT",
      "Direct experience with State Boards and Appropriate Authorities in Delhi NCR",
      "Consent and SOP libraries built specifically for Indian ART Rules 2022",
      "Independent representation of both clinics and patients (with strict conflict checks)",
      "Discreet handling of sensitive medical and personal information",
      "Practical, business-aware advice suited to modern fertility practices",
      "Availability across chamber, virtual and clinic-site consultations",
    ],
    conclusion: [
      "IVF legal services are not a luxury reserved for large fertility chains — they are essential infrastructure for any clinic that intends to operate lawfully and any patient who intends to undergo treatment with clear eyes. The right time to engage counsel is before a problem arises, not after a notice or a dispute.",
      "To discuss IVF legal services with Advocate Barkha Tiwari, call or WhatsApp +91 8392931025 or email barkha.abha2@gmail.com. Consultations are held at the chamber at Rohini Court Complex, Delhi, and virtual consultations are available for out-of-station clients and clinics.",
    ],
    faqs: [
      {
        q: "Do IVF centres need legal compliance in India?",
        a: "Yes. Every IVF and ART clinic must be registered under the ART (Regulation) Act, 2021, comply with PC-PNDT record-keeping, use prescribed informed consent forms, and follow surrogacy law where applicable. Non-compliance attracts substantial penalties including cancellation of registration.",
      },
      {
        q: "What is the difference between a Level 1 and Level 2 IVF clinic?",
        a: "Level 1 clinics offer basic services such as ovulation induction, semen analysis and intra-uterine insemination. Level 2 clinics offer advanced services including IVF, ICSI, embryo transfer and cryopreservation. Each level has its own infrastructure, staffing and documentation requirements under the ART Rules 2022.",
      },
      {
        q: "Can stored embryos be used after separation or death of a partner?",
        a: "Only in accordance with the written embryo disposition instruction executed at the time of cryopreservation. Where no such instruction exists, or where it is silent on the event, court intervention may be required. This is a significant source of dispute and every couple should insist on clear disposition instructions upfront.",
      },
      {
        q: "Are donor identities disclosed to patients?",
        a: "No. Donor anonymity is protected under the ART Act, subject to defined exceptions. Clinics may only disclose non-identifying donor characteristics such as broad phenotype and medical screening summary, unless a statutory exception applies.",
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
    title: "ART Act Compliance in India — Complete Regulatory Advisory",
    navLabel: "ART Act Compliance",
    metaDescription:
      "ART Act compliance in India for Level 1 and Level 2 clinics and ART banks — registration, gamete-donor documentation, consent frameworks and National Registry reporting under the ART (Regulation) Act, 2021.",
    keywords: [
      "ART Act 2021 compliance",
      "assisted reproductive technology compliance",
      "ART Level 1 Level 2 clinic",
      "ART clinic registration India",
      "ART bank compliance",
      "gamete donor documentation",
    ],
    heroTagline:
      "Full-stack ART Act compliance advisory for Level 1 clinics, Level 2 clinics and ART banks in India.",
    intro: [
      "The Assisted Reproductive Technology (Regulation) Act, 2021 is the first-ever national statute in India dedicated exclusively to the regulation of ART services. It replaces a patchwork of guidelines with binding law and imposes serious criminal, civil and reputational consequences on clinics that fail to comply. For fertility clinics, ART banks and hospitals with an embryology laboratory, ART Act compliance is now a fundamental operating requirement — not a paper exercise.",
      "The Act was notified on 25 January 2022 and the Assisted Reproductive Technology (Regulation) Rules, 2022 followed shortly thereafter. Together, they establish the National ART and Surrogacy Board, State ART and Surrogacy Boards, and Appropriate Authorities empowered to inspect, register, suspend and prosecute. The statutory architecture is intentionally aligned with the Surrogacy (Regulation) Act, 2021 and the PC-PNDT Act, 1994 so that a compliance failure under any one of these Acts can quickly trigger consequences under the others.",
      "ART Act compliance is often the point at which a growing fertility practice becomes an institution. It forces the clinic to formalise its clinical governance, audit its record-keeping, document its consents in patient-comprehensible language, and treat its embryology laboratory as a regulated establishment rather than a scientific curiosity. Done well, it protects the clinic, the patients, the donors and the children born from ART.",
      "This resource sets out the ART Act framework in practical terms — who it applies to, what it requires, how the registration and renewal process actually works, the most common enforcement issues seen in Delhi NCR, and the compliance discipline every clinic should adopt. It is written for medical directors, embryologists, hospital administrators and compliance leads.",
    ],
    applicableAct: {
      shortName: "ART Act",
      fullName: "Assisted Reproductive Technology (Regulation) Act, 2021",
      href: "/legal-acts#art",
    },
    legalOverview: [
      "The ART Act 2021 covers any establishment offering ART services in India, whether standalone, hospital-embedded or part of a chain. It divides service providers into three categories: Level 1 ART clinics offering basic services such as ovulation induction and intra-uterine insemination, Level 2 ART clinics offering advanced services including IVF, ICSI, embryo transfer and cryopreservation, and ART banks that recruit, screen and supply gametes.",
      "Every category must be registered with the Board through the State ART and Surrogacy Board and the Appropriate Authority. Registration is contingent on satisfying prescribed infrastructure, staffing qualifications, laboratory standards and record-keeping systems. The Act mandates informed written consent using prescribed forms, protects donor anonymity while ensuring traceability, imposes age and health screening requirements on donors, restricts the number of times a donor may donate, and prohibits sex-selective ART.",
      "Every registered establishment must file periodic returns to the National Registry, permit inspection at short notice, maintain records for the statutory retention period and report on the welfare of any child born through ART. Contraventions attract graded penalties, including imprisonment ranging from three years to twelve years for the most serious offences and fines that may extend to twenty lakh rupees. Registration may be suspended or cancelled following a hearing.",
    ],
    applicableLaws: [
      {
        name: "Assisted Reproductive Technology (Regulation) Act, 2021",
        summary:
          "Principal legislation. Defines the regulatory architecture, categorises service providers, prescribes offences and penalties, and empowers the Boards and Appropriate Authorities.",
      },
      {
        name: "Assisted Reproductive Technology (Regulation) Rules, 2022",
        summary:
          "Prescribes forms, consent formats, infrastructure standards, staff qualifications, record retention, periodic returns and inspection protocols. The Rules are where day-to-day compliance actually lives.",
      },
      {
        name: "Surrogacy (Regulation) Act, 2021",
        summary:
          "Applies wherever ART is used as part of a surrogacy arrangement. Compliance under one Act does not substitute compliance under the other; both apply in parallel.",
      },
      {
        name: "Pre-Conception and Pre-Natal Diagnostic Techniques Act, 1994",
        summary:
          "Applies to every ultrasound and prenatal diagnostic test conducted before, during or after ART treatment. ART Act inspections routinely flag PC-PNDT record deficiencies.",
      },
      {
        name: "Drugs and Cosmetics Act, 1940 and Rules",
        summary:
          "Applies to fertility drugs, gonadotropins and other pharmacological components used in an ART cycle, particularly their storage, dispensing and record maintenance.",
      },
      {
        name: "Information Technology Act, 2000 and Rules",
        summary:
          "Applies to the storage, transmission and protection of sensitive personal medical data of patients and donors. Data breaches attract independent liability.",
      },
    ],
    whoNeeds: [
      "Level 1 clinics offering counselling, sperm collection or basic ART procedures",
      "Level 2 clinics operating full ART laboratory services",
      "ART banks providing gametes and gamete storage services",
      "Hospitals integrating ART into existing OB-GYN departments",
      "Fertility chains standardising compliance across multiple centres",
      "New entrants planning to launch an ART practice from scratch",
    ],
    benefits: [
      "Correct Level 1 or Level 2 classification and filing",
      "Standardised gamete-donation and informed consent templates",
      "National Registry reporting compliance",
      "Ongoing regulatory representation before Boards and Authorities",
      "Inspection preparedness with mock audits and gap analysis",
      "Alignment with PC-PNDT, Surrogacy and Bio-Medical Waste regimes",
    ],
    legalProcess: [
      {
        title: "Scoping and category confirmation",
        body: "The chamber reviews the clinic's service menu, equipment inventory, staff qualifications and infrastructure to confirm the correct ART category — Level 1, Level 2 or ART bank — before any filing is prepared.",
      },
      {
        title: "Documentation build",
        body: "The full application dossier is assembled: constitution documents, building plan, equipment list, staff credentials, SOP manual, PC-PNDT registration, bio-medical waste authorisation, fire safety certificate and consent library.",
      },
      {
        title: "Filing with the Appropriate Authority",
        body: "The application is filed with the State ART and Surrogacy Board through the Appropriate Authority. Fees are paid and acknowledgement is obtained. Any preliminary queries are addressed in a coordinated response.",
      },
      {
        title: "Inspection and site verification",
        body: "The Appropriate Authority conducts a site inspection to verify infrastructure, staffing and record-keeping. The chamber prepares the clinic through a mock inspection, ensures physical evidence of SOPs and consents, and represents the clinic during the site visit.",
      },
      {
        title: "Registration certificate and post-registration setup",
        body: "On approval, the registration certificate is collected and mounted at the clinic. Post-registration workflows are activated: periodic return schedule, National Registry filing calendar, staff training and internal audit cadence.",
      },
      {
        title: "Renewals, amendments and ongoing compliance",
        body: "The chamber tracks renewal deadlines, files amendments for any change in medical director, embryologist, premises or service menu, and maintains a rolling compliance calendar for the clinic.",
      },
    ],
    eligibility: [
      "Registered clinical establishment operating in India",
      "Medical director with qualifications prescribed under the ART Rules 2022",
      "Qualified embryologist and support staff for Level 2 clinics",
      "Compliant infrastructure for the applicable Level",
      "Existing PC-PNDT registration for ultrasound facilities",
      "Bio-medical waste authorisation in place",
    ],
    requiredDocuments: [
      "Constitution documents of the establishment",
      "Building plan and infrastructure certificate",
      "Equipment list with technical specifications",
      "Qualification and registration certificates of medical and embryology staff",
      "Standard Operating Procedures manual",
      "PC-PNDT registration certificate",
      "Bio-medical waste authorisation",
      "Fire safety and building safety certificates",
      "Consent form library aligned with ART Rules 2022",
      "Donor screening protocols and records",
      "Data protection and IT security policy",
    ],
    timeline: [
      { phase: "Scoping and gap analysis", duration: "2–3 weeks" },
      { phase: "Documentation build", duration: "4–6 weeks" },
      { phase: "Filing and Authority processing", duration: "8–16 weeks" },
      { phase: "Site inspection and registration", duration: "2–6 weeks" },
      { phase: "Ongoing compliance retainer", duration: "Rolling" },
    ],
    rightsResponsibilities: {
      rights: [
        "Right of the establishment to a hearing before adverse action",
        "Right to appeal against orders of the Appropriate Authority",
        "Right of donors to anonymity within the statutory framework",
        "Right of patients to informed consent and confidentiality",
        "Right to periodic clarity on evolving Board directions",
      ],
      responsibilities: [
        "Maintain registration and file periodic returns without lapse",
        "Preserve records for the statutory retention period",
        "Comply with donor screening, age limits and donation frequency",
        "Report adverse events and serious complications to the Authority",
        "Cooperate fully with inspection and audit",
      ],
    },
    commonMistakes: [
      "Registering in the wrong ART category (Level 1 vs Level 2)",
      "Assuming ART Act registration substitutes for PC-PNDT registration",
      "Using non-prescribed consent forms",
      "Failing to document gamete-donor screening and eligibility",
      "Poor traceability between donor, gametes, embryos and recipient",
      "Ignoring periodic return deadlines to the National Registry",
      "Overlooking staff-change intimation to the Appropriate Authority",
      "Advertising ART services in a manner prohibited by the Act",
    ],
    complianceChecklist: [
      "ART Act registration certificate current and displayed",
      "Correct Level classification with matching service menu",
      "PC-PNDT registration active and cross-linked",
      "Bio-medical waste authorisation current",
      "Consent library aligned with ART Rules 2022",
      "Donor register with screening evidence",
      "Embryo storage register with disposition instructions",
      "Periodic returns filed on time",
      "Internal audit conducted within the last six months",
      "Staff training records maintained",
      "Grievance mechanism documented and communicated to patients",
    ],
    internationalClients: [
      "Foreign nationals seeking ART treatment in India, and Indian ART clinics receiving international patients, must operate within the boundaries of the ART Act, the Surrogacy Act and applicable Ministry of Health advisories. Foreign patients cannot commission surrogacy, but ART treatment for such patients is not blanket prohibited and depends on the specific procedure, visa category and citizenship or OCI status.",
      "Clinics that treat international patients should adopt enhanced documentation — pre-treatment written opinions, country-specific disclosures, cross-border embryo transport protocols, and clear communication about what will and will not be reported to which authorities. Advocate Barkha Tiwari provides opinion letters that clinics can rely upon and, where appropriate, share with the patient before treatment begins.",
    ],
    whyChoose: [
      "Specialist focus on the ART Act, Surrogacy Act and PC-PNDT Act",
      "Compliance frameworks designed specifically for Indian clinics",
      "Direct dealings with State Board and Appropriate Authority in Delhi NCR",
      "Practical templates that reduce day-to-day compliance friction",
      "Confidential handling of clinical and commercial information",
      "Continuity between advisory work and litigation defence",
    ],
    conclusion: [
      "ART Act compliance is the difference between a fertility practice that grows with confidence and one that lives in fear of the next inspection. The investment in doing it properly — once, at the point of registration or renewal — pays back many times over in operational calm and patient trust.",
      "To discuss ART Act compliance for your clinic or ART bank, contact Advocate Barkha Tiwari at +91 8392931025 (Call / WhatsApp) or barkha.abha2@gmail.com. Chamber consultations are available at Rohini Court Complex, Delhi.",
    ],
    faqs: [
      {
        q: "What is the ART (Regulation) Act 2021?",
        a: "The Assisted Reproductive Technology (Regulation) Act, 2021 regulates ART clinics and banks in India, mandates their registration with the National Registry, and safeguards the rights of donors, patients and children born through ART. It categorises clinics into Level 1 and Level 2 and creates ART banks as a separate class of establishment.",
      },
      {
        q: "Do we need separate registration under the ART Act if we already hold PC-PNDT registration?",
        a: "Yes. The two Acts operate in parallel. PC-PNDT registration covers pre-natal diagnostic activities such as ultrasound; the ART Act covers assisted reproductive technology services. Both registrations are required and neither substitutes the other.",
      },
      {
        q: "How often are periodic returns required under the ART Act?",
        a: "Registered establishments must file periodic returns to the National Registry through the State Board in the prescribed format and frequency. Missing returns is one of the most common triggers for enforcement action.",
      },
      {
        q: "Can the Appropriate Authority cancel our registration?",
        a: "Yes. Registration may be suspended or cancelled following a show-cause notice and hearing, in cases of persistent non-compliance, serious offences or false information in the application. Timely legal representation at the notice stage significantly improves outcomes.",
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
    title: "PC-PNDT Compliance in India — Registration, Form F and Prosecution Defence",
    navLabel: "PC & PNDT Compliance",
    metaDescription:
      "PC-PNDT compliance advisory for ultrasound clinics, diagnostic centres and hospitals in India — registration, Form F record-keeping, appropriate-authority hearings and defence in PC-PNDT prosecutions.",
    keywords: [
      "PC-PNDT compliance",
      "PC-PNDT Act 1994",
      "PNDT lawyer India",
      "sex determination law",
      "prenatal diagnostic techniques",
      "Form F PC-PNDT",
    ],
    heroTagline:
      "Focused PC-PNDT compliance and prosecution defence for diagnostic clinics and hospitals across India.",
    intro: [
      "The Pre-Conception and Pre-Natal Diagnostic Techniques Act, 1994 is one of the most vigorously enforced medical laws in India. It was enacted to arrest the country's declining child sex ratio and it criminalises any use of pre-conception or pre-natal diagnostic techniques for the purpose of sex-selection. In the three decades since its enactment, and particularly since the 2003 amendments, it has become the principal statute affecting every ultrasound clinic, diagnostic centre and hospital radiology department in the country.",
      "PC-PNDT compliance is often misunderstood as a paperwork exercise around Form F. In reality, it is a comprehensive regime covering registration of the facility, qualifications of the person conducting the scan, physical infrastructure, mandatory declarations by pregnant women, meticulous record-keeping, monthly reporting to the Appropriate Authority, prohibition on advertising and cooperation with periodic inspection. Any gap in this chain can, and frequently does, trigger a sealing order, prosecution and cancellation of registration.",
      "For clinics and hospitals, PC-PNDT compliance is uniquely unforgiving. The Act creates strict liability for many procedural violations, and the penalties escalate quickly — imprisonment, seizure of ultrasound equipment, suspension of registration and adverse publicity. Even a well-run centre can find itself facing a show-cause notice arising from an incomplete Form F entry or an outdated staff qualification record.",
      "Advocate Barkha Tiwari has extensive experience representing ultrasound clinics, diagnostic centres and hospitals in PC-PNDT matters across Delhi NCR — from routine registration and renewal work to defence in criminal prosecutions and appeals against sealing orders. This resource explains the framework, the process, the mistakes to avoid and the practical steps every diagnostic facility should take today.",
    ],
    applicableAct: {
      shortName: "PC-PNDT Act",
      fullName: "Pre-Conception & Pre-Natal Diagnostic Techniques Act, 1994",
      href: "/legal-acts#pc-pndt",
    },
    legalOverview: [
      "The PC-PNDT Act, as amended in 2003, prohibits sex-selection before or after conception and regulates the use of pre-natal diagnostic techniques for the limited purposes of detecting genetic abnormalities, metabolic disorders, chromosomal abnormalities, congenital anomalies, haemoglobinopathies and sex-linked disorders. Any deviation from these permitted purposes is an offence.",
      "Every genetic counselling centre, genetic laboratory, genetic clinic and imaging/ultrasound facility must be registered under the Act. Registration is granted by the Appropriate Authority — typically at the district level — after inspection of premises, verification of staff qualifications and satisfaction with record-keeping systems. Registration is granted for a fixed period and must be renewed in advance of expiry.",
      "The most heavily-audited compliance obligation is the maintenance of Form F for every pregnant woman on whom a pre-natal diagnostic procedure is conducted. Form F must be filled fully and legibly, signed by both the pregnant woman and the person conducting the procedure, and preserved for the statutory retention period. Monthly summaries must be filed with the Appropriate Authority. Advertising of any facility for sex-determination is prohibited outright.",
      "Offences under the Act attract imprisonment, seizure of equipment, suspension or cancellation of registration and heavy fines. The Act reverses the ordinary burden of proof in specific circumstances and creates strict-liability offences for identified violations. Effective defence therefore begins long before any notice — at the level of daily record-keeping discipline.",
    ],
    applicableLaws: [
      {
        name: "Pre-Conception and Pre-Natal Diagnostic Techniques Act, 1994",
        summary:
          "Principal statute prohibiting sex-selection and regulating pre-natal diagnostic techniques. Provides for registration, offences, penalties, seizure and Appropriate Authorities.",
      },
      {
        name: "PC-PNDT Rules, 1996",
        summary:
          "Operational rules prescribing the forms (including Form F), procedures, retention periods, inspection protocols and reporting formats. Substantive day-to-day compliance is anchored in the Rules.",
      },
      {
        name: "Medical Termination of Pregnancy Act, 1971 (as amended)",
        summary:
          "Frequently intersects with PC-PNDT matters where a termination follows a diagnostic finding. Both regimes must be complied with in parallel and inconsistencies between records are a frequent enforcement trigger.",
      },
      {
        name: "Assisted Reproductive Technology (Regulation) Act, 2021",
        summary:
          "Applies to clinics where ART and ultrasound services are co-located. PC-PNDT compliance is a prerequisite to ART compliance for any facility conducting scans on ART patients.",
      },
      {
        name: "Indian Penal Code / Bharatiya Nyaya Sanhita",
        summary:
          "General offences may be invoked in aggravated cases, particularly where sex-selection results in termination and offences against life or conspiracy are alleged.",
      },
    ],
    whoNeeds: [
      "Ultrasound clinics and diagnostic centres",
      "Genetic counselling centres and laboratories",
      "Hospitals with radiology and obstetric imaging",
      "Fertility clinics with an in-house ultrasound facility",
      "Clinics facing Appropriate Authority notices or sealing orders",
      "Sonologists and radiologists named in a prosecution",
    ],
    benefits: [
      "Registration and renewal filings under the PC-PNDT Act",
      "Form F audits and record-keeping SOPs",
      "Mock inspections and staff training",
      "Representation before Appropriate Authorities",
      "Defence in PC-PNDT criminal prosecutions",
      "Appeals against sealing orders and cancellation",
    ],
    legalProcess: [
      {
        title: "Compliance audit and Form F review",
        body: "The chamber conducts a facility audit covering registration status, staff qualifications, equipment records, Form F register, monthly returns and internal SOPs. Findings are documented and remediation is prioritised by risk.",
      },
      {
        title: "Registration or renewal",
        body: "For new facilities, the registration application is filed with the Appropriate Authority. For existing facilities, renewal is filed well before expiry to avoid any lapse. The chamber coordinates the site inspection required for grant of registration.",
      },
      {
        title: "Form F systems and staff training",
        body: "A rigorous Form F workflow is put in place — entry checklist, sign-off, storage, monthly return preparation and archival. Sonologists and support staff are trained on the discipline required to survive an unannounced inspection.",
      },
      {
        title: "Response to show-cause notices",
        body: "Where a show-cause notice is issued, the chamber prepares a detailed reply with supporting records, appears before the Appropriate Authority and, where necessary, negotiates conditions to avoid sealing.",
      },
      {
        title: "Criminal defence in PC-PNDT prosecutions",
        body: "In prosecutions filed under the Act, the chamber conducts the defence from summons through evidence and judgment. This includes cross-examination of decoy witnesses, technical evidence on the operation of ultrasound equipment and challenges to procedural lapses in seizure and search.",
      },
      {
        title: "Appeals and revisions",
        body: "Adverse orders — sealing, cancellation of registration or conviction — are challenged in appeal or revision before the appropriate forum. Strategic decisions about interim relief are taken at this stage to protect the clinic's operations.",
      },
    ],
    eligibility: [
      "Registered medical or diagnostic establishment",
      "Qualified radiologist or sonologist on record",
      "Compliant equipment with valid installation and calibration records",
      "Premises meeting PC-PNDT infrastructure requirements",
      "Ability to maintain Form F register and file monthly returns",
    ],
    requiredDocuments: [
      "Constitution documents of the establishment",
      "Building plan and premises photographs",
      "Ultrasound equipment purchase invoices and installation certificates",
      "Qualifications and registration certificates of sonologists / radiologists",
      "Existing PC-PNDT registration certificate (for renewal)",
      "Form F register and monthly returns for the last twelve months (for audits)",
      "Staff attendance and duty roster",
      "Board displaying declaration against sex-determination",
      "Any previous notices or orders received from the Appropriate Authority",
    ],
    timeline: [
      { phase: "Compliance audit", duration: "2–3 weeks" },
      { phase: "Registration filing and inspection", duration: "6–12 weeks" },
      { phase: "Response to show-cause notice", duration: "1–3 weeks" },
      { phase: "Criminal trial before Magistrate", duration: "12–36 months" },
      { phase: "Appeal / revision", duration: "6–18 months" },
    ],
    rightsResponsibilities: {
      rights: [
        "Right to a fair hearing before adverse action",
        "Right to be represented by counsel in inspection and prosecution",
        "Right to challenge procedural lapses in search and seizure",
        "Right to appeal against sealing and cancellation orders",
      ],
      responsibilities: [
        "Maintain valid registration at all times",
        "Ensure only qualified personnel operate ultrasound equipment",
        "Complete Form F fully, legibly and contemporaneously",
        "File monthly returns with the Appropriate Authority",
        "Display the mandatory declaration against sex-determination",
        "Preserve records for the statutory retention period",
      ],
    },
    commonMistakes: [
      "Incomplete or illegible Form F entries",
      "Missing signature of the pregnant woman on Form F",
      "Late or missed monthly returns",
      "Continuing to operate an ultrasound machine after expiry of registration",
      "Employing a sonologist whose qualification is not recorded with the Authority",
      "Displaying advertisements that could be construed as offering sex-determination",
      "Ignoring show-cause notices in the hope that they will lapse",
      "Handing over records without proper legal representation during an inspection",
    ],
    complianceChecklist: [
      "PC-PNDT registration certificate current and displayed",
      "Mandatory declaration board displayed prominently",
      "Qualifications of sonologists intimated to Appropriate Authority",
      "Form F register bound, serially numbered and up to date",
      "Monthly returns filed on time for the last twelve months",
      "Equipment records, calibration and service reports maintained",
      "Internal audit of Form F entries in the last six months",
      "Staff training on PC-PNDT compliance in the last twelve months",
      "Response templates for notices and inspections prepared",
      "Legal counsel available on call for inspections and seizure",
    ],
    internationalClients: [
      "The PC-PNDT Act applies uniformly within India regardless of the nationality of the patient. Foreign nationals undergoing prenatal diagnostic tests in India are equally covered, and clinics serving international patients must ensure that Form F and consent documentation are compliant in every respect. Language differences do not relieve the clinic of its obligation to obtain informed, signed declarations.",
      "For clinics catering to international patients — including OCI and NRI families — additional care is required to ensure that any communication about the pregnancy, ultrasound findings or diagnostic conclusions is documented in a manner that cannot be interpreted as disclosing the sex of the foetus. Advocate Barkha Tiwari advises clinics on written communication protocols and consent documentation for international patients.",
    ],
    whyChoose: [
      "Extensive PC-PNDT prosecution defence experience at Rohini Court, Delhi",
      "Combined ART, surrogacy and PC-PNDT expertise under one roof",
      "Practical Form F and inspection-readiness frameworks",
      "Hands-on preparation of staff for unannounced inspections",
      "Discreet, disciplined handling of sensitive enforcement matters",
      "End-to-end continuity from advisory to trial to appeal",
    ],
    conclusion: [
      "PC-PNDT compliance is unforgiving in a way few other healthcare laws are. The clinics that survive and thrive are those that treat compliance as daily practice rather than emergency response. Investing in registration, Form F discipline and staff training today is dramatically less costly than defending a prosecution tomorrow.",
      "To discuss PC-PNDT compliance, registration, renewal or prosecution defence, contact Advocate Barkha Tiwari at +91 8392931025 (Call / WhatsApp) or barkha.abha2@gmail.com. Chamber consultations are available at Rohini Court Complex, Delhi.",
    ],
    faqs: [
      {
        q: "What does the PC-PNDT Act 1994 prohibit?",
        a: "The Pre-Conception and Pre-Natal Diagnostic Techniques Act, 1994 prohibits sex-selection before or after conception and misuse of prenatal diagnostic techniques for determining the sex of the foetus. It also prohibits any advertisement offering sex-determination services.",
      },
      {
        q: "How long must Form F records be preserved?",
        a: "Form F and connected records must be preserved for the statutory retention period prescribed under the PC-PNDT Rules, 1996. Loss, destruction or alteration of these records within the retention period is a serious offence.",
      },
      {
        q: "What should we do if our clinic receives a PC-PNDT show-cause notice?",
        a: "Do not respond casually and do not hand over original records without legal representation. Preserve all documentation as it stands, engage counsel immediately, and prepare a written reply with supporting records before appearing before the Appropriate Authority.",
      },
      {
        q: "Can our ultrasound machine be sealed?",
        a: "Yes. The Appropriate Authority is empowered to seal and seize ultrasound equipment in defined circumstances. Sealing orders can be challenged, but time is of the essence — the sooner counsel is engaged, the more scope there is to protect the clinic's operations.",
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
    title: "Legal Advisory for Foreign Intended Parents — Surrogacy and ART in India",
    navLabel: "Foreign Intended Parents",
    metaDescription:
      "Written legal opinions and advisory for foreign intended parents, NRI and OCI families on the current position of surrogacy and ART in India under the Surrogacy (Regulation) Act, 2021.",
    keywords: [
      "foreign intended parents India",
      "cross-border surrogacy India",
      "OCI surrogacy",
      "NRI IVF India",
      "international surrogacy law India",
      "foreign IVF patients India",
    ],
    heroTagline:
      "Clear, written legal opinions for foreign intended parents, NRI and OCI families exploring ART and surrogacy in India.",
    intro: [
      "For decades, India was one of the world's leading destinations for cross-border surrogacy. Foreign intended parents travelled to Indian fertility clinics from every continent, often supported by intermediaries who promised speed, affordability and legal simplicity. That era has come to a decisive end. The Surrogacy (Regulation) Act, 2021 restricts surrogacy in India to Indian citizens, and cross-border surrogacy for foreign nationals is no longer available in the form it once was.",
      "This shift has left many foreign families — including OCI card holders, NRIs and families with a historical connection to India — uncertain about where they stand. Well-meaning misinformation is common. Some clinics and consultants continue to make representations that cannot be reconciled with the statute. The result is that foreign intended parents often need a straightforward, written legal opinion before making any medical, financial or travel commitment.",
      "Advocate Barkha Tiwari issues such opinions from Delhi. Each opinion is grounded in the current text of the Surrogacy (Regulation) Act, 2021, the Surrogacy Rules, 2022, the ART Act, 2021 and the latest advisories from the Ministry of Health and Family Welfare and the Ministry of External Affairs. Where the law does not permit surrogacy, that is stated plainly. Where lawful ART alternatives exist, they are explained. Where cross-border referrals are appropriate, they are indicated.",
      "This resource sets out, in plain language, the current legal position for foreign intended parents; the position of NRIs and OCI card holders; the legal framework that applies to any ART treatment received in India by a foreign national; and the practical steps the chamber follows when advising international clients.",
    ],
    applicableAct: {
      shortName: "Surrogacy Act",
      fullName: "Surrogacy (Regulation) Act, 2021",
      href: "/legal-acts#surrogacy",
    },
    legalOverview: [
      "The Surrogacy (Regulation) Act, 2021 permits surrogacy only for intending couples and intending women who are Indian citizens and satisfy the statutory eligibility criteria. Foreign nationals are outside the scope of the Act. The Act's underlying policy — to prevent commercial exploitation of surrogate mothers — is deliberately restrictive.",
      "The position of NRIs (Non-Resident Indians who retain Indian citizenship) is qualitatively different from that of OCI card holders. NRIs, as citizens of India, remain within the scope of the Act and may be eligible provided they satisfy every other criterion — proven medical infertility, age limits, marital status and no existing biological, adopted or surrogate child. OCI card holders and foreign nationals do not enjoy citizenship for the purposes of the Act and cannot commission surrogacy in India under the current framework.",
      "For ART treatment (as distinct from surrogacy), the position is more nuanced. The ART Act, 2021 does not carry the same blanket citizenship restriction, and many procedures — IVF, ICSI, gamete donation within statutory limits — may be lawfully offered to international patients subject to the ART Rules 2022 and prevailing advisories. Careful pre-treatment opinions remain essential to avoid inadvertent violations of the Surrogacy Act, PC-PNDT Act or visa conditions.",
    ],
    applicableLaws: [
      {
        name: "Surrogacy (Regulation) Act, 2021",
        summary:
          "Central statute restricting surrogacy in India to Indian citizens meeting statutory eligibility criteria. Foreign nationals are outside its scope; NRIs and OCI holders require case-by-case assessment.",
      },
      {
        name: "Assisted Reproductive Technology (Regulation) Act, 2021",
        summary:
          "Governs IVF and ART services in India. Applies to any ART treatment received by an international patient at a registered Indian clinic.",
      },
      {
        name: "Passport Act, 1967 and Citizenship Act, 1955",
        summary:
          "Relevant to citizenship status, OCI classification and the legal effect of OCI cards for the purposes of statutes that use the term 'citizen of India'.",
      },
      {
        name: "Foreigners Act, 1946 and visa framework",
        summary:
          "Visa category (medical, tourist, business, employment) determines the lawful basis on which a foreign national is present in India and can affect the availability of medical services.",
      },
      {
        name: "Ministry of Health and Family Welfare and Ministry of External Affairs advisories",
        summary:
          "Evolving executive advisories that supplement the statutory framework and are regularly updated. Any opinion for a foreign intended parent must be tested against the latest advisory position.",
      },
      {
        name: "Private international law considerations",
        summary:
          "The intended parents' home-country law on recognition of parentage, birth registration and immigration of a child born through ART must be assessed alongside Indian law.",
      },
    ],
    whoNeeds: [
      "NRI couples seeking clarity on ART or surrogacy eligibility in India",
      "OCI card holders exploring options for parenthood involving India",
      "Foreign intended parents evaluating cross-border alternatives",
      "Mixed-citizenship couples (one Indian, one foreign national)",
      "Fertility clinics receiving international patient enquiries",
      "Families that received IVF or surrogacy services in India prior to 2022 and need documentation clarity",
    ],
    benefits: [
      "Written preliminary legal opinion on eligibility",
      "Clear explanation of statutory restrictions and rationale",
      "Guidance on ART treatment options where lawfully available",
      "Referral pathways for cross-border matters",
      "Documentation review for OCI, NRI and dual-citizenship situations",
      "Coordination with home-country counsel where required",
    ],
    legalProcess: [
      {
        title: "Confidential intake questionnaire",
        body: "Prospective clients complete a structured questionnaire covering citizenship, OCI status, marital history, medical history, prior ART or surrogacy attempts and country of residence. This forms the basis for the opinion.",
      },
      {
        title: "Document review",
        body: "Passport, OCI card, visa, marriage certificate, medical records and any pre-existing agreements or correspondence with Indian clinics are reviewed. Ambiguities are clarified in a follow-up call.",
      },
      {
        title: "Preliminary legal opinion",
        body: "A written opinion is issued setting out eligibility, applicable statutes, permissible procedures, restrictions and next steps. The opinion is drafted to be intelligible to clients unfamiliar with Indian law.",
      },
      {
        title: "Coordination with clinics and home-country counsel",
        body: "Where the opinion supports lawful ART treatment in India, the chamber coordinates with a registered ART clinic and, where necessary, with counsel in the client's home country to ensure that treatment received in India will be recognised abroad.",
      },
      {
        title: "Post-treatment documentation",
        body: "Following any ART treatment, the chamber assists with medical documentation, clinic certificates and, where relevant, apostille or legalisation of documents for use in the client's home country.",
      },
    ],
    eligibility: [
      "Indian citizenship (including NRI status) is generally required for surrogacy",
      "OCI card holders and foreign nationals are outside the surrogacy framework",
      "ART treatment eligibility depends on procedure, visa and citizenship",
      "Age, marital status and medical fitness criteria continue to apply",
      "Compliance with home-country law is a parallel eligibility question",
    ],
    requiredDocuments: [
      "Passport (bio-page and any Indian visas)",
      "OCI card (both sides), where applicable",
      "Proof of Indian citizenship for NRIs",
      "Marriage certificate",
      "Complete medical records of any prior fertility treatment",
      "Any correspondence or draft agreements shared by Indian clinics",
      "Details of country of residence and any home-country legal position",
    ],
    timeline: [
      { phase: "Intake and document collection", duration: "3–7 days" },
      { phase: "Preliminary legal opinion", duration: "2–3 weeks" },
      { phase: "Follow-up coordination", duration: "Rolling" },
    ],
    rightsResponsibilities: {
      rights: [
        "Right to a clear written legal opinion before any medical commitment",
        "Right to confidentiality of personal and medical information",
        "Right to plain-language explanation of statutory restrictions",
        "Right to a second opinion or referral where appropriate",
      ],
      responsibilities: [
        "Provide complete and truthful information at intake",
        "Refrain from acting on informal assurances from intermediaries",
        "Comply with visa conditions during any stay in India for treatment",
        "Assess and comply with home-country law in parallel",
      ],
    },
    commonMistakes: [
      "Relying on informal assurances from clinics or agents about eligibility",
      "Assuming that OCI status is equivalent to Indian citizenship for the Surrogacy Act",
      "Beginning IVF cycles in India without a pre-treatment written opinion",
      "Overlooking home-country law on parentage recognition and immigration of the child",
      "Signing draft agreements offered by intermediaries without independent legal review",
      "Travelling to India on the wrong visa category for the intended treatment",
    ],
    complianceChecklist: [
      "Written legal opinion on eligibility obtained before treatment",
      "Citizenship and OCI status independently verified from official documents",
      "Correct visa category for the intended procedure",
      "Registered ART clinic identified and its credentials verified",
      "Consent documentation reviewed by independent counsel",
      "Home-country legal position confirmed for recognition of any child",
      "Post-treatment documents preserved and, where required, legalised",
    ],
    internationalClients: [
      "Every client on this page is, by definition, an international client. The chamber's approach is deliberately conservative: no verbal opinions on eligibility are issued for foreign intended parents. Everything is documented in writing after review of citizenship documents, medical history and prior correspondence with Indian clinics.",
      "For OCI card holders in particular, the temptation to rely on informal advice can be considerable. Some fertility clinics continue to represent the position as though OCI holders remained on par with Indian citizens for surrogacy purposes. That position cannot be reconciled with the current statute and any client acting on such a representation exposes themselves and the clinic to serious legal risk.",
      "For NRIs who retain Indian citizenship, the door to surrogacy in India is not closed, but every element of the eligibility framework still applies. NRIs must be able to produce evidence of Indian citizenship, satisfy the age and marital-status criteria and obtain the same medical Board and Appropriate Authority certifications as resident Indians.",
      "In every international engagement, the chamber urges clients to instruct counsel in their home country in parallel. Recognition of parentage, birth certificates, passports and immigration of a child born through ART are all governed by the home-country's law and cannot be resolved by Indian counsel alone.",
    ],
    whyChoose: [
      "Focused specialism in Indian ART, surrogacy and PC-PNDT law",
      "Conservative, evidence-based opinions — no verbal assurances",
      "Direct experience with OCI, NRI and mixed-citizenship matters",
      "Coordination with foreign counsel where cross-border recognition is required",
      "Discreet, confidential handling of highly sensitive family matters",
      "Chamber based in Delhi with virtual consultation availability worldwide",
    ],
    conclusion: [
      "Foreign intended parents are best served by an early, honest, written legal opinion. The Indian statutory framework is now unambiguous in most respects, and the clarity it offers — even where the answer is restrictive — is preferable to the uncertainty of pursuing treatment based on informal representations.",
      "To request a preliminary legal opinion, contact Advocate Barkha Tiwari at +91 8392931025 (Call / WhatsApp) or barkha.abha2@gmail.com. Virtual consultations are available across time zones and written opinions are issued in English.",
    ],
    faqs: [
      {
        q: "Can foreign nationals commission surrogacy in India?",
        a: "No. The Surrogacy (Regulation) Act, 2021 restricts surrogacy in India to Indian citizens who satisfy the statutory eligibility criteria. Foreign nationals are outside the scope of the Act as it currently stands.",
      },
      {
        q: "Can OCI card holders commission surrogacy in India?",
        a: "OCI card holders are foreign citizens for the purposes of the Surrogacy Act and, on the current statutory position, cannot commission surrogacy in India. Any representation to the contrary should be independently verified in writing before acting on it.",
      },
      {
        q: "Can NRIs still undergo surrogacy in India?",
        a: "NRIs who retain Indian citizenship remain within the scope of the Act and may be eligible provided they satisfy every other criterion — proven medical infertility, age, marital status, no existing child and the required certifications from the Appropriate Authority.",
      },
      {
        q: "Is IVF treatment in India available to foreign patients?",
        a: "IVF and other ART procedures are not restricted to Indian citizens in the same way as surrogacy. However, treatment must comply with the ART Act, 2021 and the ART Rules, 2022, and should be preceded by a written legal opinion tailored to the patient's citizenship and intended procedures.",
      },
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