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
  { slug: "foreign-nationals", name: "Foreign Nationals" },
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
  {
    slug: "ivf-legal-process-india-for-foreign-nationals",
    title: "IVF Legal Process in India for Foreign Nationals (2026 Complete Guide)",
    description:
      "Learn about the IVF legal process in India for foreign nationals, including documentation, ART Act 2021 compliance, informed consent, timelines, and legal guidance.",
    keywords: [
      "ivf legal process india for foreign nationals",
      "ivf india foreign nationals 2026",
      "art act 2021 compliance",
      "ivf documentation india",
      "informed consent ivf india",
      "fertility lawyer india for foreigners",
    ],
    category: "ivf",
    tags: ["documentation", "compliance", "foreign-nationals", "clinics"],
    author: "barkha-dwivedi",
    publishedAt: "2026-07-28",
    updatedAt: "2026-07-28",
    excerpt:
      "A complete 2026 guide to the IVF legal process in India for foreign nationals — eligibility, registered ART clinics, documentation, informed consent, privacy, timelines and common legal pitfalls.",
    related: ["surrogacy-regulation-act-2021-overview", "is-surrogacy-legal-in-india"],
    body: [
      { type: "p", text: "Navigating assisted reproductive technology (ART) in a foreign country involves a combination of medical expertise and legal diligence. For foreign nationals considering In Vitro Fertilization (IVF) in India, understanding the surrounding legal landscape is essential for ensuring a secure, transparent, and compliant treatment journey." },
      { type: "p", text: "In recent years, India's legal framework governing fertility care has undergone significant modernization, most notably with the enforcement of the Assisted Reproductive Technology (Regulation) Act, 2021. This landmark legislation established clear guidelines for registration, patient confidentiality, ethical practices, and consent protocols. Understanding the IVF legal process in India for foreign nationals allows intended parents to make informed decisions, minimize administrative delays, and focus on their path to parenthood." },

      { type: "h2", text: "Eligibility Criteria for IVF Treatment in India", id: "eligibility" },
      { type: "p", text: "Before initiating assisted reproductive care, every patient must satisfy the eligibility criteria set by both the treating clinic and the prevailing national legal framework. These measures ensure that fertility services are delivered ethically, responsibly, and in strict compliance with Indian laws." },
      { type: "p", text: "For international patients, eligibility involves both medical assessments and administrative verifications. Clinics routinely conduct comprehensive evaluations — including identity verification, medical history reviews, and consent documentation — prior to commencing treatment." },
      { type: "h3", text: "Key verification factors", id: "verification-factors" },
      { type: "ul", items: [
        "Medical history and comprehensive fertility assessments",
        "Government-issued identity and passport validation",
        "Relationship status documentation (where applicable)",
        "History of prior ART interventions",
        "Pre-existing health conditions",
        "Execution of prescribed statutory consent forms",
        "Compliance with applicable ART Act directives",
      ] },
      { type: "callout", tone: "info", title: "Note", text: "Because clinical policies and statutory regulations are subject to periodic updates, intended parents should verify specific requirements directly with their registered ART clinic and consult a legal professional experienced in Indian fertility law." },

      { type: "h2", text: "Choosing a Registered ART Clinic", id: "registered-clinic" },
      { type: "p", text: "Selecting a clinic that operates strictly within the statutory framework of the Assisted Reproductive Technology (Regulation) Act, 2021 is one of the most critical legal steps an international patient can take. When evaluating potential clinics, review the following essential criteria:" },
      { type: "ul", items: [
        "Regulatory registration: the facility must be registered with the appropriate National/State ART registry",
        "Specialist qualifications: accredited fertility specialists and certified embryologists",
        "Transparent documentation: clear consent protocols and medical record standards",
        "Privacy protocols: robust patient confidentiality and secure data protection measures",
        "Ethical donor practices: donor screening conforming strictly to state regulations",
        "Open communication on treatment expectations, costs, and legal obligations",
      ] },
      { type: "p", text: "Entrusting your care to a compliant facility significantly reduces administrative complications and legal risks throughout treatment." },

      { type: "h2", text: "Required Documentation Before Starting Treatment", id: "documentation" },
      { type: "p", text: "Proper documentation forms the foundation of a compliant IVF journey. Having complete, accurate records organized well in advance prevents avoidable administrative holds and ensures seamless coordination between local and international care providers." },
      { type: "h3", text: "Identity verification", id: "documents-identity" },
      { type: "ul", items: ["Valid passport", "Applicable visa documentation", "Government-issued photo identification"] },
      { type: "h3", text: "Medical history", id: "documents-medical" },
      { type: "ul", items: [
        "Comprehensive fertility evaluation reports",
        "Records of previous IVF/ART cycles",
        "Endocrine / hormonal investigation panels",
        "Diagnostic ultrasound scans",
        "Standard clinical lab clearances",
      ] },
      { type: "h3", text: "Legal and consent", id: "documents-legal" },
      { type: "ul", items: [
        "Standardised clinic consent agreements",
        "Declarations under statutory ART regulations",
        "Any additional administrative waivers required by the facility",
      ] },

      { type: "h2", text: "Step-by-Step IVF Legal and Clinical Process", id: "process" },
      { type: "p", text: "Understanding the dual medical and legal workflow helps intended parents set realistic expectations and navigate each phase with confidence." },
      { type: "h3", text: "Step 1 — Initial consultation and legal intake", id: "step-1" },
      { type: "p", text: "The process begins with an intake consultation at a registered fertility clinic. The medical team evaluates prior history, outlines recommended clinical paths, and introduces the applicable regulatory and documentation framework." },
      { type: "h3", text: "Step 2 — Comprehensive medical evaluation", id: "step-2" },
      { type: "p", text: "The clinic executes necessary diagnostic testing to tailor the clinical protocol. These typically include hormonal profiles, diagnostic ultrasounds, semen analysis (where applicable), and infectious disease screening." },
      { type: "h3", text: "Step 3 — Execution of legal documentation", id: "step-3" },
      { type: "p", text: "Once the clinical path is finalised, the necessary statutory disclosures and consent forms are reviewed and signed. Intended parents should take adequate time to review all clauses, ensuring all terms are fully understood before signing." },
      { type: "h3", text: "Step 4 — Protocol and treatment planning", id: "step-4" },
      { type: "p", text: "Following document execution, the care team details the individualised treatment protocol, establishing medication schedules, laboratory timelines, and monitoring visits." },
      { type: "h3", text: "Step 5 — IVF cycle execution", id: "step-5" },
      { type: "p", text: "With medical and legal requirements satisfied, the treatment cycle commences under clinical supervision. The clinic maintains administrative and laboratory logs throughout this phase in accordance with regulatory mandates." },

      { type: "h2", text: "Informed Consent and Patient Privacy", id: "consent-privacy" },
      { type: "h3", text: "Why documentation matters", id: "why-documentation" },
      { type: "ul", items: [
        "Demonstrates voluntary informed consent",
        "Ensures complete transparency between patients and care teams",
        "Supports ongoing regulatory compliance",
        "Maintains continuity of care when returning to your home country",
        "Prevents administrative or legal disputes post-treatment",
      ] },
      { type: "h3", text: "Understanding informed consent", id: "informed-consent" },
      { type: "p", text: "Informed consent in ART goes beyond signing a routine form. It is a structured process confirming that the patient understands the precise nature of the proposed procedures, associated success rates, potential risks and clinical limitations, available alternative treatment options, and the financial terms and follow-up responsibilities involved." },
      { type: "callout", tone: "warn", title: "Never sign under pressure", text: "Patients should never feel pressured to sign documentation without full clarity on its contents. Ask for time, and for a legal review where the terms are unclear." },
      { type: "h3", text: "Patient confidentiality and data protection", id: "confidentiality" },
      { type: "p", text: "Registered ART clinics are legally required to uphold strict confidentiality standards. This includes maintaining secure medical records, restricting unauthorised access to embryology and lab logs, and handling personal data in compliance with statutory privacy laws." },

      { type: "h2", text: "Important Considerations for Foreign Nationals", id: "foreign-nationals" },
      { type: "p", text: "Traveling abroad for medical care introduces unique legal and logistical factors. Thorough preparation prior to departure helps ensure a smooth experience." },
      { type: "h3", text: "Pre-travel checklist", id: "pre-travel" },
      { type: "ul", items: [
        "Advance coordination: obtain a full checklist of required medical records from your chosen clinic",
        "Document copies: keep secure digital backups and physical copies of all medical files, identity cards and travel documents",
        "Stay duration: plan accommodation flexible enough to adapt to clinical variations in the treatment schedule",
        "Immigration status: ensure full compliance with current Indian visa and immigration rules applicable to medical travel",
      ] },

      { type: "h2", text: "Common Legal Pitfalls to Avoid", id: "pitfalls" },
      { type: "ol", items: [
        "Signing unread documents — always review consent forms thoroughly and seek legal clarification if any terms appear unclear",
        "Incomplete disclosures — failing to disclose past medical history, surgeries or prior ART attempts can compromise care and legal standing",
        "Overlooking clinic accreditation — verify a facility's regulatory registration before making financial commitments",
        "Delayed record gathering — sourcing past medical files only after arrival in India can cause costly delays",
        "Assuming universal laws — fertility laws vary significantly by country; never assume your home country's rules apply in India",
      ] },

      { type: "h2", text: "Compliance Checklist Before Starting Treatment", id: "checklist" },
      { type: "ul", items: [
        "Primary medical consultation completed",
        "Comprehensive past fertility records compiled",
        "Valid passport and identity documents verified",
        "Mandatory diagnostic investigations updated",
        "Clinic-issued consent forms thoroughly reviewed",
        "Questions regarding risks and protocols addressed by the physician",
        "Treatment and monitoring timeline understood",
        "Travel and accommodation arrangements secured",
        "Digital and physical record backups stored securely",
      ] },

      { type: "h2", text: "The Role of Professional Legal Guidance", id: "legal-guidance" },
      { type: "p", text: "Fertility care intersects directly with health regulations, legal consent, and cross-border administrative frameworks. While fertility specialists manage medical procedures, an experienced ART legal professional can assist with:" },
      { type: "ul", items: [
        "Interpreting complex statutory mandates under the ART Act, 2021",
        "Reviewing consent agreements to ensure clarity and protection of rights",
        "Assisting foreign nationals with regulatory paperwork and cross-border compliance",
        "Mitigating potential administrative disputes before treatment begins",
      ] },

      { type: "h2", text: "Key Takeaways", id: "takeaways" },
      { type: "p", text: "Understanding the IVF legal process in India for foreign nationals is just as important as selecting the right medical care. The enforcement of the ART (Regulation) Act, 2021 has established a structured, transparent framework designed to protect patient rights and ensure ethical medical practices." },
      { type: "p", text: "By organising your documentation early, selecting a registered clinic, reviewing consent agreements carefully, and seeking legal advice when needed, you can approach your treatment journey with clarity and peace of mind." },

      { type: "callout", tone: "info", title: "Need professional legal guidance?", text: "Advocate Barkha Dwivedi provides specialised legal counsel in assisted reproductive technology regulations, fertility law, and compliance for domestic and international intended parents. Book a legal consultation through the contact page to review your specific situation." },

      { type: "links", title: "Continue reading", items: [
        { label: "IVF Legal Services", to: "/services/ivf-legal-services" },
        { label: "ART Act Compliance Guide", to: "/services/art-act-compliance" },
        { label: "Legal Guidance for Foreign Intended Parents", to: "/services/foreign-intended-parents" },
        { label: "Surrogacy Law Overview", to: "/services/surrogacy-law" },
        { label: "Statutory Legal Acts", to: "/legal-acts" },
        { label: "About Advocate Barkha Dwivedi", to: "/about" },
        { label: "Contact Us", to: "/contact" },
      ] },
    ],
    faqs: [
      { q: "Can foreign nationals undergo IVF treatment in India?", a: "Yes. Foreign nationals can undergo IVF treatment in India provided they satisfy the requirements under the applicable legal framework, medical evaluations, and clinic policies. Confirm current requirements with a registered clinic before traveling." },
      { q: "Which law regulates IVF clinics in India?", a: "Assisted reproductive technology services in India are primarily governed by the Assisted Reproductive Technology (Regulation) Act, 2021, along with its associated rules and administrative guidelines." },
      { q: "Why is legal guidance recommended before starting IVF treatment?", a: "Legal guidance helps intended parents understand complex documentation, consent agreements, statutory compliance requirements, and their legal rights throughout the treatment process." },
      { q: "How should international patients select an IVF clinic in India?", a: "Prioritise clinics officially registered under the ART Act that maintain transparent documentation practices, employ qualified specialists, and demonstrate clear patient privacy standards." },
      { q: "What documents are typically required prior to initiating treatment?", a: "Commonly required documents include a valid passport, visa documentation, comprehensive medical and fertility histories, diagnostic reports, and completed statutory consent forms." },
      { q: "What constitutes valid informed consent in IVF care?", a: "Informed consent requires that patients receive clear, comprehensive details regarding the proposed procedures, potential risks, expected outcomes, and alternative options, giving them the information needed to voluntarily agree to treatment." },
      { q: "How long does a typical IVF process take in India?", a: "Timelines vary based on individual medical protocols. A single cycle typically spans several weeks, covering diagnostic evaluations, ovarian stimulation, egg retrieval, fertilisation and transfer. Confirm specific timelines with your specialist." },
      { q: "How is patient confidentiality maintained during treatment?", a: "Registered ART clinics are legally required to manage medical records securely, restrict access to lab and clinical files, and comply with national privacy obligations." },
      { q: "Is it necessary to provide records of previous unsuccessful IVF attempts?", a: "Yes. A complete medical history allows the care team to adjust treatment strategies and ensures full administrative and clinical accuracy." },
      { q: "What travel preparations should foreign nationals complete in advance?", a: "Confirm document requirements, organise digital and physical record backups, secure suitable accommodation, and verify current visa and immigration guidelines." },
      { q: "Are fertility regulations in India subject to change?", a: "Yes. Statutory requirements, administrative mandates and healthcare policies evolve over time. Confirm current standards with qualified professionals before beginning treatment." },
      { q: "Where can intended parents obtain personalised legal advice?", a: "Intended parents seeking counsel on ART regulations, consent documentation or statutory compliance should consult a legal professional specialising in Indian fertility law, such as Advocate Barkha Dwivedi." },
    ],
  },
  {
    slug: "is-surrogacy-legal-in-india",
    title: "Is Surrogacy Legal in India? Complete Guide to Surrogacy Laws (2026)",
    description:
      "Learn whether surrogacy is legal in India, understand the Surrogacy (Regulation) Act, 2021, eligibility, documentation, the surrogacy process in India, and key legal considerations.",
    keywords: [
      "is surrogacy legal in india",
      "surrogacy laws in india",
      "surrogacy process in india",
      "surrogacy regulation act 2021",
      "surrogacy rules in india",
      "art act india",
      "surrogacy lawyer india",
      "legal surrogacy india",
      "fertility law india",
    ],
    category: "surrogacy",
    tags: ["eligibility", "compliance", "documentation"],
    author: "barkha-dwivedi",
    publishedAt: "2026-07-31",
    updatedAt: "2026-07-31",
    hero: {
      src: "/blog/is-surrogacy-legal-in-india.jpg",
      alt: "Is surrogacy legal in India — guide to the Surrogacy (Regulation) Act, 2021",
      width: 1200,
      height: 630,
    },
    excerpt:
      "Is surrogacy legal in India? A complete 2026 guide to the Surrogacy (Regulation) Act, 2021 — eligibility, the step-by-step surrogacy process in India, documentation, rights, timelines, common legal mistakes and a compliance checklist.",
    related: ["surrogacy-regulation-act-2021-overview", "ivf-legal-process-india-for-foreign-nationals"],
    body: [
      { type: "p", text: "Yes — surrogacy is legal in India, but only within the framework created by the Surrogacy (Regulation) Act, 2021. Commercial surrogacy is prohibited, while altruistic surrogacy is permitted subject to eligibility, documentation and clinic-registration requirements. This guide explains the surrogacy laws in India, who is eligible, the step-by-step surrogacy process in India, the documents usually required, rights and responsibilities, realistic timelines, and the legal mistakes intended parents most often make." },
      { type: "p", text: "Because the legal position can change through amendments, rules, notifications and judicial decisions, intended parents should always verify the latest position with a qualified surrogacy lawyer in India before making medical, travel or financial commitments." },

      { type: "h2", text: "Eligibility for surrogacy in India under the Surrogacy (Regulation) Act, 2021", id: "eligibility" },
      { type: "p", text: "Understanding who is eligible for surrogacy in India is one of the most important aspects of the legal process. The Act establishes a legal framework that specifies eligibility requirements and regulates the circumstances in which surrogacy may be undertaken." },
      { type: "h3", text: "Who can opt for surrogacy in India?", id: "intended-parents" },
      { type: "p", text: "The surrogacy laws in India prescribe eligibility requirements for intended parents and surrogates, designed to ensure that surrogacy is carried out ethically and in accordance with the law. Eligibility generally depends on:" },
      { type: "ul", items: [
        "Compliance with the applicable statutory requirements",
        "Medical necessity as assessed by qualified professionals",
        "Completion of the required documentation",
        "Compliance with the Surrogacy (Regulation) Act, 2021 and related rules",
      ] },
      { type: "p", text: "Because eligibility is determined under the applicable legal framework, every case should be assessed individually." },
      { type: "h3", text: "Who can become a surrogate mother?", id: "surrogate-eligibility" },
      { type: "p", text: "The law also establishes requirements relating to surrogate mothers, intended to protect the health, dignity and legal rights of the surrogate throughout the process. The legislation emphasises:" },
      { type: "ul", items: [
        "Informed consent",
        "Medical assessment by qualified professionals",
        "Insurance and health protections where required by law",
        "Compliance with applicable legal procedures",
      ] },
      { type: "callout", tone: "warn", title: "Important", text: "Choosing a surrogate outside the legal framework may result in serious legal complications and should be avoided." },

      { type: "h2", text: "The surrogacy process in India — step by step", id: "process" },
      { type: "p", text: "Many intended parents ask, \u201cwhat is the procedure of surrogacy?\u201d While the exact process depends on individual circumstances, the surrogacy process in India generally involves the following stages." },
      { type: "h3", text: "Step 1 — Initial legal consultation", id: "step-1" },
      { type: "p", text: "Before beginning any medical treatment, intended parents should obtain legal guidance on current legal eligibility, documentation requirements, the applicable regulatory framework, their rights and responsibilities, and coordination between the legal and medical processes. Early legal advice can identify issues before treatment begins." },
      { type: "h3", text: "Step 2 — Medical evaluation", id: "step-2" },
      { type: "p", text: "Following the initial legal review, the intended parents undergo medical evaluation by qualified fertility specialists. This assessment helps determine medical suitability, the appropriate fertility treatment, and whether assisted reproductive technology is required. Medical eligibility and legal eligibility are separate considerations, and both may be relevant." },
      { type: "h3", text: "Step 3 — Documentation and compliance", id: "step-3" },
      { type: "p", text: "Once eligibility is established, the necessary documentation is prepared — identity documents, address proof, medical records, required declarations, consent documentation, and other records required under applicable laws or by the treating clinic. Accurate documentation is essential for regulatory compliance." },
      { type: "h3", text: "Step 4 — Treatment through a registered clinic", id: "step-4" },
      { type: "p", text: "Treatment is conducted through a clinic operating within the applicable legal framework. Registered clinics are expected to comply with the Surrogacy (Regulation) Act, 2021, the Assisted Reproductive Technology (Regulation) Act, 2021, and applicable rules and professional standards." },
      { type: "h3", text: "Step 5 — Pregnancy and medical care", id: "step-5" },
      { type: "p", text: "After embryo transfer, the surrogate receives ongoing medical care and monitoring. Medical supervision continues, documentation is maintained, legal compliance remains important, and appropriate health protections should be observed in accordance with applicable law." },
      { type: "h3", text: "Step 6 — Birth and legal formalities", id: "step-6" },
      { type: "p", text: "After the child is born, applicable legal and administrative procedures are completed. These may include birth registration, documentation relating to parentage where applicable, and compliance with other legal requirements. The exact documentation depends on the facts of each case and the prevailing legal framework." },

      { type: "h2", text: "Documents commonly required during the surrogacy process", id: "documents" },
      { type: "p", text: "Documentation requirements vary depending on individual circumstances and legal requirements. Commonly requested documents include:" },
      { type: "ul", items: [
        "Government-issued identity proof",
        "Address proof",
        "Marriage-related documents, where applicable",
        "Medical reports and fertility treatment records",
        "Consent forms",
        "Affidavits or declarations, where required",
        "Insurance-related documentation, where applicable",
      ] },
      { type: "p", text: "Maintaining complete and accurate records helps reduce delays and supports compliance." },

      { type: "h2", text: "Understanding the ART Act, 2021", id: "art-act" },
      { type: "p", text: "The Assisted Reproductive Technology (Regulation) Act, 2021 — often called the ART Act — regulates assisted reproductive technologies including IVF, ICSI, egg donation, sperm donation, embryo handling, ART clinics and ART banks. It establishes standards for the operation of fertility clinics and aims to promote ethical, regulated reproductive healthcare. Because surrogacy frequently involves assisted reproductive technology, the ART Act and the Surrogacy Act often work together." },
      { type: "links", title: "Related legal services", items: [
        { label: "Surrogacy Law Services", to: "/services/surrogacy-law" },
        { label: "IVF Legal Services", to: "/services/ivf-legal-services" },
        { label: "ART Act Compliance", to: "/services/art-act-compliance" },
      ] },

      { type: "h2", text: "Rights and responsibilities of intended parents", id: "intended-parent-duties" },
      { type: "p", text: "Intended parents carry legal and ethical responsibilities alongside medical ones. Following the requirements of the Surrogacy (Regulation) Act, 2021 helps ensure the process is conducted lawfully and transparently. Intended parents should:" },
      { type: "ul", items: [
        "Provide complete and accurate information during the legal and medical process",
        "Cooperate with registered fertility clinics and healthcare professionals",
        "Ensure that all required legal documentation is prepared correctly",
        "Comply with the applicable provisions of the surrogacy laws in India",
        "Respect the dignity, privacy and rights of the surrogate mother",
        "Seek legal advice whenever questions arise regarding documentation or compliance",
      ] },
      { type: "h3", text: "Rights of the surrogate mother", id: "surrogate-rights" },
      { type: "p", text: "The Surrogacy (Regulation) Act, 2021 was introduced in part to strengthen protection of surrogate mothers. A surrogate mother is entitled to respect and dignity throughout the process, proper medical care from qualified professionals, health monitoring during pregnancy, insurance and protections where required under the applicable law, medical decisions based on professional standards, and a legally compliant process that protects her interests." },

      { type: "h2", text: "Timeline of the surrogacy process in India", id: "timeline" },
      { type: "p", text: "The timeline varies with medical circumstances, documentation, clinic procedures and legal compliance. A typical journey moves through five stages:" },
      { type: "ol", items: [
        "Initial consultation — legal and medical consultation, review of eligibility, preliminary planning",
        "Documentation — identity documents reviewed, medical reports collected, declarations and consent documents prepared, legal documentation finalised",
        "Medical treatment — IVF procedures where applicable, embryo transfer, medical monitoring",
        "Pregnancy — regular check-ups, compliance with clinic protocols, legal records updated where required",
        "Birth and legal formalities — birth registration and other administrative formalities under the prevailing legal framework",
      ] },
      { type: "p", text: "Incomplete documentation is the single most common cause of delay across these stages." },

      { type: "h2", text: "Common legal mistakes during the surrogacy process", id: "mistakes" },
      { type: "h3", text: "1. Not understanding the current law", id: "mistake-1" },
      { type: "p", text: "Many people rely on outdated online information that no longer reflects the current surrogacy laws in India. Always verify that the information you rely on is current." },
      { type: "h3", text: "2. Incomplete documentation", id: "mistake-2" },
      { type: "p", text: "Missing documents or incorrect information can delay approvals and create avoidable legal issues. Documentation should be reviewed carefully before submission." },
      { type: "h3", text: "3. Beginning treatment without legal advice", id: "mistake-3" },
      { type: "p", text: "Medical treatment and legal compliance go hand in hand. Consulting a lawyer before treatment begins helps identify legal requirements early." },
      { type: "h3", text: "4. Choosing clinics without due diligence", id: "mistake-4" },
      { type: "p", text: "Selecting experienced, registered and compliant fertility clinics is an important part of the overall process." },
      { type: "h3", text: "5. Ignoring changes in regulations", id: "mistake-5" },
      { type: "p", text: "The legal framework surrounding assisted reproductive technology can evolve. Intended parents should remain informed about changes that may affect their situation." },

      { type: "h2", text: "Compliance checklist before beginning surrogacy", id: "checklist" },
      { type: "ul", items: [
        "Understand the current surrogacy laws in India",
        "Review the Surrogacy (Regulation) Act, 2021",
        "Understand how the ART Act, 2021 applies to your treatment",
        "Consult qualified legal professionals",
        "Consult qualified fertility specialists",
        "Ensure documentation is complete and accurate",
        "Work only with registered fertility clinics",
        "Keep copies of all legal and medical records",
      ] },

      { type: "h2", text: "Surrogacy and foreign nationals", id: "foreign-nationals" },
      { type: "p", text: "India's legal framework governing surrogacy has undergone significant changes over the years. Because eligibility requirements have evolved, foreign nationals and individuals residing outside India should obtain updated legal advice before planning fertility treatment. Cross-border fertility matters may involve additional considerations relating to immigration, parentage, citizenship and documentation, and requirements differ with individual circumstances." },
      { type: "links", title: "Guidance for international intended parents", items: [
        { label: "Foreign Intended Parents", to: "/services/foreign-intended-parents" },
        { label: "Surrogacy & IVF Guide for Canadian Citizens", to: "/country/canada" },
        { label: "Surrogacy & IVF Guide for US Citizens", to: "/country/usa" },
        { label: "IVF Legal Process in India for Foreign Nationals", to: "/blog/ivf-legal-process-india-for-foreign-nationals" },
      ] },

      { type: "h2", text: "Why choosing an experienced surrogacy lawyer matters", id: "why-a-lawyer" },
      { type: "p", text: "Surrogacy is not solely a medical process — it also involves legal planning and documentation. An experienced surrogacy lawyer can explain the legal framework, review documentation, coordinate legal compliance, advise on applicable regulatory requirements, help intended parents understand their rights and responsibilities, and reduce the risk of avoidable legal complications." },
      { type: "p", text: "A successful surrogacy journey combines an understanding of the applicable law, qualified medical professionals, accurate documentation, timely legal advice, and adherence to the regulatory framework established by Indian law." },

      { type: "h2", text: "Why choose Advocate Barkha Dwivedi", id: "why-choose" },
      { type: "p", text: "Navigating the surrogacy process in India requires an understanding of both fertility law and the regulatory framework governing assisted reproductive technology. Advocate Barkha Dwivedi provides legal guidance to help clients understand documentation, compliance and the applicable legal process — whether you are researching whether surrogacy is legal in India, reviewing the surrogacy laws in India, or seeking clarity on the Surrogacy (Regulation) Act, 2021." },

      { type: "h2", text: "Final thoughts", id: "conclusion" },
      { type: "p", text: "The legal framework for surrogacy in India has evolved considerably with the introduction of the Surrogacy (Regulation) Act, 2021 and the Assisted Reproductive Technology (Regulation) Act, 2021. Every surrogacy journey is unique. Careful planning, complete documentation, qualified medical support and informed legal guidance help ensure the process is conducted responsibly and in accordance with the law." },
      { type: "callout", tone: "info", title: "Speak to a surrogacy lawyer", text: "If you are considering surrogacy in India, book a consultation with Advocate Barkha Dwivedi to review your eligibility, documentation and compliance requirements before treatment begins." },
      { type: "links", title: "Continue reading", items: [
        { label: "Surrogacy Law Services", to: "/services/surrogacy-law" },
        { label: "IVF Legal Services", to: "/services/ivf-legal-services" },
        { label: "ART Act Compliance", to: "/services/art-act-compliance" },
        { label: "PC-PNDT Compliance", to: "/services/pc-pndt-compliance" },
        { label: "Statutory Legal Acts", to: "/legal-acts" },
        { label: "About Advocate Barkha Dwivedi", to: "/about" },
        { label: "Contact Us", to: "/contact" },
      ] },
    ],
    faqs: [
      { q: "Is surrogacy legal in India?", a: "Yes. Surrogacy is legal in India under the Surrogacy (Regulation) Act, 2021, subject to the conditions and eligibility requirements established by law. Commercial surrogacy is prohibited, while altruistic surrogacy is permitted within the legal framework." },
      { q: "What is the Surrogacy (Regulation) Act, 2021?", a: "The Surrogacy (Regulation) Act, 2021 regulates surrogacy in India by establishing legal standards, protecting surrogate mothers, regulating clinics and prohibiting commercial surrogacy. It works alongside the Assisted Reproductive Technology (Regulation) Act, 2021." },
      { q: "What is the surrogacy process in India?", a: "The process generally involves an initial legal consultation, medical evaluation, eligibility assessment, preparation of required documentation, fertility treatment through a registered clinic, pregnancy monitoring, and birth registration with applicable legal formalities. The exact process depends on the circumstances of each case." },
      { q: "Is commercial surrogacy allowed in India?", a: "No. Commercial surrogacy is prohibited under Indian law. The current legal framework recognises altruistic surrogacy subject to the applicable legal requirements." },
      { q: "Who is eligible for surrogacy in India?", a: "Eligibility is determined under the Surrogacy (Regulation) Act, 2021 and related rules, and depends on compliance with statutory requirements, medical necessity certified by qualified professionals, and completion of the prescribed documentation. Every case should be assessed individually." },
      { q: "Who can become a surrogate mother in India?", a: "The law prescribes requirements for surrogate mothers that emphasise informed consent, medical assessment, and insurance and health protections where required by law. Arrangements made outside the legal framework can create serious legal complications." },
      { q: "Why is the ART Act important for surrogacy?", a: "The Assisted Reproductive Technology (Regulation) Act, 2021 regulates fertility treatments such as IVF, ART clinics, ART banks, embryo handling, egg donation and sperm donation. Since surrogacy often involves assisted reproductive technology, both the ART Act and the Surrogacy Act may apply." },
      { q: "Why should intended parents seek legal advice before starting surrogacy?", a: "Legal guidance helps intended parents understand applicable legal requirements, review documentation, coordinate with registered fertility clinics, clarify rights and responsibilities, and reduce the risk of legal complications." },
      { q: "What documents are usually required for surrogacy in India?", a: "Depending on circumstances, documentation may include identity proof, address proof, medical records, consent forms, declarations, insurance documentation where applicable, and other records required under the legal framework or by the treating clinic." },
      { q: "How long does the surrogacy process take in India?", a: "The timeline varies depending on medical treatment, documentation and regulatory requirements. Each case is unique and the duration may differ from one family to another." },
      { q: "Can foreign nationals opt for surrogacy in India?", a: "India's surrogacy framework has changed significantly over the years and eligibility requirements have evolved. Foreign nationals and persons residing outside India should obtain updated legal advice on parentage, immigration and documentation before making travel or financial commitments." },
      { q: "Can the laws governing surrogacy change?", a: "Yes. Laws, rules, notifications and judicial decisions may change over time. Anyone considering surrogacy should obtain updated legal advice before beginning the process." },
      { q: "Where can I get personalised legal advice on surrogacy in India?", a: "Advocate Barkha Dwivedi advises intended parents and fertility clinics on the Surrogacy (Regulation) Act, 2021, ART Act compliance and documentation. You can request a consultation through the contact page." },
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
