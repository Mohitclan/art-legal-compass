import SEO from "@/components/SEO";
import LegalActs from "@/components/LegalActs";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import { buildBreadcrumbSchema } from "@/lib/seo";

const LegalActsPage = () => {
  const crumbs = [
    { name: "Home", slug: "/" },
    { name: "Legal Acts", slug: "/legal-acts" },
  ];
  return (
    <>
      <SEO
        title="Legal Acts | Surrogacy Act, ART Act, PC-PNDT Act & MTP Act"
        description="Overview of India's key reproductive healthcare legislation — Surrogacy (Regulation) Act 2021, ART (Regulation) Act 2021, PC-PNDT Act 1994, and MTP Act 1971."
        path="/legal-acts"
        keywords="Surrogacy Regulation Act 2021, ART Act 2021, PC-PNDT Act 1994, MTP Act 1971, reproductive healthcare law India"
        jsonLd={[buildBreadcrumbSchema(crumbs)]}
      />
      <div className="pt-24">
        <div className="container mx-auto px-6 max-w-7xl">
          <Breadcrumbs items={crumbs} />
        </div>
        <LegalActs />
      </div>
      <CTASection source="legal-acts-page" />
    </>
  );
};

export default LegalActsPage;