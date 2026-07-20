// Authority / EEAT data — single source of truth for author bio,
// credentials, trust signals, disclaimers, and article metadata.
// Consumed by reusable components and schema builders. No design here.

import { SITE } from "./site";

export const AUTHOR = {
  name: SITE.person.name,
  jobTitle: SITE.person.jobTitle,
  shortBio:
    "Advocate Barkha Tiwari is a Delhi High Court practitioner focused exclusively on Assisted Reproductive Technology (ART), Surrogacy, IVF and PC-PNDT law. She advises intending parents, fertility clinics and ART banks on statutory compliance under the Surrogacy (Regulation) Act 2021, the ART (Regulation) Act 2021 and the PC-PNDT Act 1994.",
  longBio: [
    "With more than a decade of dedicated legal practice in reproductive healthcare law, Advocate Barkha Tiwari represents intending couples, single women, surrogate mothers, IVF centres and ART banks across India. Her chamber has handled matters ranging from eligibility certification and altruistic surrogacy agreements to District Medical Board approvals, cross-border parentage issues and clinic-level PC-PNDT and ART compliance audits.",
    "She combines statutory expertise with practical courtroom experience before the Delhi High Court, district judiciary and quasi-judicial forums including Appropriate Authorities and Consumer Forums. Her work is regularly relied upon by fertility clinics and international intending parents who require legally-defensible documentation and end-to-end representation.",
  ],
  credentials: [
    "Enrolled Advocate — Bar Council of Delhi",
    "LL.B., Faculty of Law",
    "Regular practitioner, Delhi High Court",
    "10+ years focused on fertility & healthcare law",
  ],
  courtPractice: [
    "Delhi High Court",
    "District Courts, Delhi (Rohini, Karkardooma, Patiala House, Tis Hazari, Saket)",
    "Consumer Disputes Redressal Commissions",
    "Appropriate Authorities under the Surrogacy Act & ART Act",
    "State & District PC-PNDT Advisory Committees",
  ],
  expertise: [
    "Surrogacy (Regulation) Act, 2021 — full compliance & agreements",
    "Assisted Reproductive Technology (Regulation) Act, 2021",
    "PC-PNDT Act, 1994 — clinic registration, records, notices",
    "IVF centre legal compliance & informed consent frameworks",
    "Cross-border parentage & foreign intended parents advisory",
    "Medical Termination of Pregnancy Act, 1971",
    "Consumer forum matters concerning ART & fertility clinics",
  ],
  memberships: [
    "Bar Council of Delhi",
    "Delhi High Court Bar Association",
    "Rohini Court Bar Association",
    "Supreme Court Women Lawyers Forum (associate)",
  ],
  certifications: [
    "Certified in ART & Surrogacy Law compliance frameworks",
    "Empanelled legal advisor to fertility clinics for PC-PNDT audits",
    "Continuing legal education — Reproductive Rights & Bioethics",
  ],
  reviewedBy: {
    name: SITE.person.name,
    title: `${SITE.person.jobTitle}, ${SITE.person.court}`,
    url: `${SITE.url}/about`,
  },
} as const;

export const TRUST_SIGNALS = {
  whyTrust: [
    "Focused practice — ART, Surrogacy, IVF and PC-PNDT only.",
    "Direct representation by the advocate, not a junior.",
    "Statutorily-drafted agreements that withstand Board scrutiny.",
    "Transparent fee structure discussed before engagement.",
    "End-to-end handling — from eligibility to birth registration.",
    "Confidential handling of sensitive medical & personal records.",
  ],
  metrics: [
    { label: "Years of Practice", value: "10+" },
    { label: "Fertility Clinics Advised", value: "50+" },
    { label: "Intending Parents Represented", value: "300+" },
    { label: "Compliance Audits Conducted", value: "100+" },
  ],
  badges: [
    "Bar Council of Delhi — Verified",
    "Delhi High Court — Regular Practitioner",
    "ART Act 2021 — Compliance Advisor",
    "PC-PNDT — Empanelled Legal Counsel",
  ],
};

export const CASE_CATEGORIES = [
  { title: "Surrogacy Arrangements", body: "Eligibility certificates, altruistic surrogacy agreements, Board approvals, birth registration and parentage orders." },
  { title: "ART Clinic Compliance", body: "Registration under the ART Act 2021, National Registry filings, informed consent frameworks and clinic-level SOPs." },
  { title: "PC-PNDT Matters", body: "Form-F audits, Appropriate Authority notices, clinic representation and defence against sex-selection allegations." },
  { title: "Foreign Intended Parents", body: "Cross-border advisory, OCI/NRI eligibility, embassy documentation and exit-clearance for children born via ART." },
  { title: "Consumer & Civil Disputes", body: "Deficiency-in-service claims, refund and damages actions concerning IVF cycles and ART procedures." },
  { title: "Medical-Legal Advisory", body: "MTP Act queries, ethics-committee opinions and confidentiality frameworks for fertility clinics." },
];

export const CLIENT_JOURNEY = [
  { title: "Initial Consultation", body: "Confidential call or chamber meeting to understand your medical history, goals and legal position." },
  { title: "Legal Assessment", body: "Written opinion on eligibility, applicable statute, risks and the recommended pathway." },
  { title: "Documentation", body: "Drafting of agreements, consents, affidavits and Board applications — all statutorily reviewed." },
  { title: "Approvals & Filings", body: "Representation before Appropriate Authorities, Medical Boards and other regulators." },
  { title: "Ongoing Support", body: "Post-procedure documentation, birth registration, and dispute handling if required." },
];

export const LEGAL_DISCLAIMER =
  "The content on this page is provided for general informational purposes only and does not constitute legal advice or an advocate-client relationship. Reproductive healthcare law in India is complex and fact-specific; readers should consult a qualified advocate before acting on any information. In accordance with the Bar Council of India Rules, no part of this website is an advertisement or solicitation of work.";

export const MEDICAL_DISCLAIMER =
  "Information relating to ART procedures, IVF cycles, medical eligibility and clinical practice is summarised for legal context only. It is not medical advice. All medical decisions must be made in consultation with a licensed fertility specialist and the treating clinic.";

export const LAST_UPDATED = "2026-07-20";

// Simple English reading-time estimate — 220 wpm, minimum 1 minute.
export function readingTimeMinutes(...blocks: (string | string[] | undefined)[]) {
  const words = blocks
    .flat()
    .filter(Boolean)
    .join(" ")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
  return Math.max(1, Math.round(words / 220));
}
