import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Scale } from "lucide-react";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import ContentGap from "@/components/ContentGap";
import RelatedServices from "@/components/RelatedServices";
import CTASection from "@/components/CTASection";
import { type ServiceContent, isTodo } from "@/content/services";
import {
  buildBreadcrumbSchema,
  buildFAQSchema,
  buildLegalServiceSchema,
  buildArticleSchema,
  buildPersonSchema,
  buildOrganizationSchema,
} from "@/lib/seo";
import { trackServiceView } from "@/lib/analytics/events";
import AuthorBio from "@/components/authority/AuthorBio";
import ArticleMeta from "@/components/authority/ArticleMeta";
import TableOfContents, { type TocItem } from "@/components/authority/TableOfContents";
import Disclaimers from "@/components/authority/Disclaimers";
import EnhancedFAQ from "@/components/authority/EnhancedFAQ";
import RelatedArticles from "@/components/authority/RelatedArticles";
import { LAST_UPDATED, readingTimeMinutes } from "@/content/authority";

type Props = { service: ServiceContent };

const ServicePageTemplate = ({ service }: Props) => {
  const path = `/services/${service.slug}`;

  useEffect(() => {
    trackServiceView(service.slug);
  }, [service.slug]);

  const breadcrumbs = [
    { name: "Home", slug: "/" },
    { name: "Practice Areas", slug: "/services" },
    { name: service.navLabel, slug: path },
  ];

  const readingMinutes = readingTimeMinutes(
    service.intro,
    service.legalOverview,
    service.applicableLaws?.map((l) => l.summary),
    service.internationalClients,
    service.conclusion,
    service.faqs.map((f) => `${f.q} ${f.a}`),
  );

  const toc: TocItem[] = [
    { id: "overview", label: "Overview" },
    ...(service.legalOverview?.length ? [{ id: "legal-overview", label: "Legal Overview" }] : []),
    ...(service.applicableLaws?.length ? [{ id: "applicable-laws", label: "Applicable Indian Laws" }] : []),
    ...(!isTodo(service.legalProcess) && service.legalProcess.length ? [{ id: "process", label: "Legal Process" }] : []),
    ...(!isTodo(service.eligibility) && (service.eligibility as string[])?.length ? [{ id: "eligibility", label: "Eligibility" }] : []),
    ...(!isTodo(service.requiredDocuments) && (service.requiredDocuments as string[])?.length ? [{ id: "documents", label: "Required Documents" }] : []),
    ...(!isTodo(service.timeline) && (service.timeline as unknown[])?.length ? [{ id: "timeline", label: "Timeline" }] : []),
    ...(service.rightsResponsibilities ? [{ id: "rights", label: "Rights & Responsibilities" }] : []),
    ...(service.commonMistakes?.length ? [{ id: "mistakes", label: "Common Mistakes" }] : []),
    ...(service.complianceChecklist?.length ? [{ id: "checklist", label: "Compliance Checklist" }] : []),
    ...(service.internationalClients?.length ? [{ id: "international", label: "International Clients" }] : []),
    ...(service.whyChoose?.length ? [{ id: "why-choose", label: "Why Choose Us" }] : []),
    { id: "faq", label: "FAQ" },
    { id: "author", label: "About the Author" },
  ];

  const schemas = [
    buildBreadcrumbSchema(breadcrumbs),
    buildOrganizationSchema(),
    buildPersonSchema(),
    buildLegalServiceSchema({
      slug: path,
      name: service.title,
      description: service.metaDescription,
      serviceType: service.keywords,
    }),
    buildArticleSchema({
      slug: path,
      title: service.title,
      description: service.metaDescription,
      type: "article",
      publishedAt: LAST_UPDATED,
      updatedAt: LAST_UPDATED,
    }),
    ...(service.faqs.length ? [buildFAQSchema(service.faqs)] : []),
  ];

  const Section = ({
    title,
    children,
    id,
  }: {
    title: string;
    children: React.ReactNode;
    id?: string;
  }) => (
    <section id={id} className="py-10">
      <h2 className="font-playfair text-2xl md:text-3xl font-bold text-primary mb-6">
        {title}
      </h2>
      {children}
    </section>
  );

  const renderList = (title: string, val: ServiceContent["whoNeeds"]) => {
    if (isTodo(val)) {
      return (
        <Section title={title}>
          <ContentGap title={title} note={val.note} />
        </Section>
      );
    }
    if (!val?.length) return null;
    return (
      <Section title={title}>
        <ul className="space-y-3">
          {val.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-gold" />
              <span className="text-foreground/85 leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </Section>
    );
  };

  return (
    <>
      <SEO
        title={`${service.title} | Advocate Barkha Tiwari`}
        description={service.metaDescription}
        path={path}
        keywords={service.keywords.join(", ")}
        jsonLd={schemas}
      />

      {/* Hero */}
      <header className="bg-gradient-to-br from-primary via-navy to-primary pt-32 pb-16 text-ivory">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="mb-6">
            <Breadcrumbs items={breadcrumbs} />
          </div>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 bg-gradient-gold rounded-full flex items-center justify-center shadow-gold">
              <Scale className="w-7 h-7 text-primary" />
            </div>
            {service.applicableAct && (
              <Link
                to={service.applicableAct.href}
                className="text-xs uppercase tracking-widest text-gold hover:underline"
              >
                Applicable Act: {service.applicableAct.shortName}
              </Link>
            )}
          </div>
          <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-4 leading-tight">
            {service.title}
          </h1>
          <p className="text-lg text-ivory/85 max-w-3xl">{service.heroTagline}</p>
          <div className="mt-6 max-w-3xl">
            <ArticleMeta readingMinutes={readingMinutes} />
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 max-w-6xl grid lg:grid-cols-[minmax(0,1fr)_260px] gap-10 py-4">
        <main>
        <Section title="Overview" id="overview">
          <div className="prose prose-lg max-w-none">
            {service.intro.map((p, i) => (
              <p key={i} className="text-foreground/85 leading-relaxed mb-4">
                {p}
              </p>
            ))}
          </div>
          {service.applicableAct && (
            <Card className="mt-6 p-5 border-2 border-gold/30 bg-secondary/30">
              <p className="text-sm">
                <span className="uppercase tracking-widest text-xs text-muted-foreground">
                  Applicable Legislation
                </span>
                <br />
                <Link
                  to={service.applicableAct.href}
                  className="font-playfair text-lg text-primary hover:text-gold"
                >
                  {service.applicableAct.fullName}
                </Link>
              </p>
            </Card>
          )}
        </Section>

        {renderList("Who Needs This Service", service.whoNeeds)}
        {renderList("Key Benefits", service.benefits)}

        {/* Legal Overview */}
        {service.legalOverview?.length ? (
          <Section title="Legal Overview" id="legal-overview">
            <div className="prose prose-lg max-w-none">
              {service.legalOverview.map((p, i) => (
                <p key={i} className="text-foreground/85 leading-relaxed mb-4">
                  {p}
                </p>
              ))}
            </div>
          </Section>
        ) : null}

        {/* Applicable Indian Laws */}
        {service.applicableLaws?.length ? (
          <Section title="Applicable Indian Laws" id="applicable-laws">
            <div className="space-y-5">
              {service.applicableLaws.map((l, i) => (
                <div key={i}>
                  <h3 className="font-playfair text-xl text-primary font-semibold mb-2">
                    {l.name}
                  </h3>
                  <p className="text-foreground/85 leading-relaxed">{l.summary}</p>
                </div>
              ))}
            </div>
          </Section>
        ) : null}

        {/* Legal Process */}
        {isTodo(service.legalProcess) ? (
          <Section title="Legal Process" id="process">
            <ContentGap title="Legal Process" note={service.legalProcess.note} />
          </Section>
        ) : service.legalProcess.length ? (
          <Section title="Complete Legal Process" id="process">
            <ol className="space-y-4">
              {service.legalProcess.map((step, i) => (
                <li key={i} className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-gold text-primary font-bold">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-semibold text-primary">{step.title}</h3>
                    <p className="text-foreground/80 mt-1">{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </Section>
        ) : null}

        <div id="eligibility">{renderList("Eligibility", service.eligibility)}</div>
        <div id="documents">{renderList("Required Documents", service.requiredDocuments)}</div>

        {/* Timeline */}
        {isTodo(service.timeline) ? (
          <Section title="Timeline" id="timeline">
            <ContentGap title="Timeline" note={service.timeline.note} />
          </Section>
        ) : service.timeline.length ? (
          <Section title="Timeline" id="timeline">
            <div className="grid md:grid-cols-2 gap-4">
              {service.timeline.map((t, i) => (
                <Card key={i} className="p-5 border-2 border-border">
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">
                    {t.phase}
                  </p>
                  <p className="font-playfair text-lg text-primary mt-1">
                    {t.duration}
                  </p>
                </Card>
              ))}
            </div>
          </Section>
        ) : null}

        {service.rightsResponsibilities ? (
          <Section title="Rights and Responsibilities" id="rights">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-5 border-2 border-border">
                <h3 className="font-playfair text-lg text-primary font-semibold mb-3">
                  Your Rights
                </h3>
                <ul className="space-y-2">
                  {service.rightsResponsibilities.rights.map((r, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-gold" />
                      <span className="text-foreground/85 text-sm leading-relaxed">
                        {r}
                      </span>
                    </li>
                  ))}
                </ul>
              </Card>
              <Card className="p-5 border-2 border-border">
                <h3 className="font-playfair text-lg text-primary font-semibold mb-3">
                  Your Responsibilities
                </h3>
                <ul className="space-y-2">
                  {service.rightsResponsibilities.responsibilities.map((r, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-gold" />
                      <span className="text-foreground/85 text-sm leading-relaxed">
                        {r}
                      </span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          </Section>
        ) : null}

        <div id="mistakes">{renderList("Common Legal Mistakes to Avoid", service.commonMistakes)}</div>
        <div id="checklist">{renderList("Compliance Checklist", service.complianceChecklist)}</div>

        {service.internationalClients?.length ? (
          <Section title="International Clients and Cross-Border Considerations" id="international">
            <div className="prose prose-lg max-w-none">
              {service.internationalClients.map((p, i) => (
                <p key={i} className="text-foreground/85 leading-relaxed mb-4">
                  {p}
                </p>
              ))}
            </div>
          </Section>
        ) : null}

        {service.whyChoose?.length ? (
          <Section title="Why Choose Advocate Barkha Tiwari" id="why-choose">
            <ul className="space-y-3">
              {service.whyChoose.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-gold" />
                  <span className="text-foreground/85 leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </Section>
        ) : null}

        {service.conclusion?.length ? (
          <Section title="Conclusion">
            <div className="prose prose-lg max-w-none">
              {service.conclusion.map((p, i) => (
                <p key={i} className="text-foreground/85 leading-relaxed mb-4">
                  {p}
                </p>
              ))}
            </div>
          </Section>
        ) : null}

        <section id="author" className="py-10">
          <AuthorBio />
        </section>
        </main>

        <aside className="hidden lg:block pt-10">
          <TableOfContents items={toc} />
        </aside>
      </div>

      <EnhancedFAQ faqs={service.faqs} />
      <Disclaimers />
      <RelatedServices slugs={service.related} currentSlug={service.slug} />
      <RelatedArticles excludeSlug={service.slug} />
      <CTASection source={`service:${service.slug}`} />
    </>
  );
};

export default ServicePageTemplate;