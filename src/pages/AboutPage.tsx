import SEO from "@/components/SEO";
import About from "@/components/About";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import {
  buildBreadcrumbSchema,
  buildPersonSchema,
  buildOrganizationSchema,
} from "@/lib/seo";
import CredentialsShowcase from "@/components/authority/CredentialsShowcase";
import TrustSignals from "@/components/authority/TrustSignals";
import CaseCategories from "@/components/authority/CaseCategories";
import ClientJourney from "@/components/authority/ClientJourney";
import AuthorBio from "@/components/authority/AuthorBio";
import Disclaimers from "@/components/authority/Disclaimers";

const AboutPage = () => {
  const crumbs = [
    { name: "Home", slug: "/" },
    { name: "About", slug: "/about" },
  ];
  return (
    <>
      <SEO
        title="About Advocate Barkha Dwivedi | Infertility Legal Solutions"
        description="Advocate Barkha Dwivedi — Delhi High Court practitioner with 10+ years' experience advising IVF centres, ART banks and intending parents on Surrogacy, ART and PC-PNDT compliance."
        path="/about"
        keywords="Advocate Barkha Dwivedi, fertility lawyer Delhi, IVF advocate India, surrogacy lawyer, ART lawyer"
        jsonLd={[
          buildBreadcrumbSchema(crumbs),
          buildPersonSchema(),
          buildOrganizationSchema(),
        ]}
      />
      <div className="pt-24">
        <div className="container mx-auto px-6 max-w-6xl">
          <Breadcrumbs items={crumbs} />
        </div>
        <About headingAs="h1" />
        <div className="container mx-auto px-6 max-w-5xl -mt-8 mb-8">
          <AuthorBio />
        </div>
        <CredentialsShowcase />
        <CaseCategories />
        <ClientJourney />
        <TrustSignals />
        <Disclaimers />
      </div>
      <CTASection source="about-page" />
    </>
  );
};

export default AboutPage;