import SEO from "@/components/SEO";
import About from "@/components/About";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import { buildBreadcrumbSchema } from "@/lib/seo";

const AboutPage = () => {
  const crumbs = [
    { name: "Home", slug: "/" },
    { name: "About", slug: "/about" },
  ];
  return (
    <>
      <SEO
        title="About Advocate Barkha Tiwari | Infertility Legal Solutions"
        description="Advocate Barkha Tiwari — Delhi High Court practitioner with 10+ years' experience advising IVF centres, ART banks and intending parents on Surrogacy, ART and PC-PNDT compliance."
        path="/about"
        keywords="Advocate Barkha Tiwari, fertility lawyer Delhi, IVF advocate India, surrogacy lawyer, ART lawyer"
        jsonLd={[buildBreadcrumbSchema(crumbs)]}
      />
      <div className="pt-24">
        <div className="container mx-auto px-6 max-w-6xl">
          <Breadcrumbs items={crumbs} />
        </div>
        <About />
      </div>
      <CTASection source="about-page" />
    </>
  );
};

export default AboutPage;