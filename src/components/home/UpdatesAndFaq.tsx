import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { posts } from "@/content/blog";

const faqs = [
  {
    q: "Can foreign nationals opt for surrogacy in India?",
    a: "Commercial surrogacy is prohibited and surrogacy is restricted to eligible Indian citizens. OCI card-holders and NRIs must be assessed individually under the Surrogacy (Regulation) Act, 2021 before proceeding.",
  },
  {
    q: "What documents are required for surrogacy?",
    a: "A certificate of essentiality, a District Medical Board infertility certificate, an eligibility certificate from the Appropriate Authority, 36-month insurance cover for the surrogate and a registered altruistic surrogacy agreement.",
  },
  {
    q: "How long does the legal process take?",
    a: "Eligibility and certification typically take 6-12 weeks depending on Board scheduling, followed by documentation and clinic-level compliance steps.",
  },
  {
    q: "Is egg or sperm donation legal in India?",
    a: "Yes, through registered ART banks under the ART (Regulation) Act, 2021, subject to strict donor eligibility, consent and record-keeping requirements.",
  },
  {
    q: "Do you advise IVF clinics and ART banks?",
    a: "Yes. Clinic registration, National Registry filings, informed consent frameworks, PC-PNDT audits and inspection defence are a core part of the practice.",
  },
];

const UpdatesAndFaq = () => {
  const latest = posts.slice(0, 3);

  return (
    <section className="py-20 bg-secondary/25">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-card rounded-lg border border-border p-8 shadow-elegant">
            <div className="flex items-center justify-between mb-2">
              <h2 className="font-playfair text-2xl font-bold text-primary">
                Latest Legal Updates
              </h2>
              <Link
                to="/blog"
                className="text-sm text-gold font-semibold inline-flex items-center gap-1 hover:opacity-80"
              >
                View All <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="h-1 w-16 bg-gradient-gold mb-7" />
            <ul className="space-y-5">
              {latest.map((p) => (
                <li key={p.slug} className="border-b border-border pb-5 last:border-0 last:pb-0">
                  <p className="text-xs text-muted-foreground mb-1">
                    {new Date(p.publishedAt).toLocaleDateString("en-IN", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </p>
                  <Link
                    to={`/blog/${p.slug}`}
                    className="font-playfair text-lg font-semibold text-primary hover:text-gold transition-colors"
                  >
                    {p.title}
                  </Link>
                  <p className="text-sm text-muted-foreground mt-1.5 line-clamp-2">{p.excerpt}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-card rounded-lg border border-border p-8 shadow-elegant">
            <h2 className="font-playfair text-2xl font-bold text-primary mb-2">
              Frequently Asked Questions
            </h2>
            <div className="h-1 w-16 bg-gradient-gold mb-5" />
            <Accordion type="single" collapsible>
              {faqs.map((f, i) => (
                <AccordionItem key={f.q} value={`faq-${i}`}>
                  <AccordionTrigger className="text-left text-sm font-semibold text-primary">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground leading-relaxed">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpdatesAndFaq;
