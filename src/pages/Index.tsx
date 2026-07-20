import SEO from "@/components/SEO";
import { homeSchemas } from "@/lib/seo-schemas";
import { buildPersonSchema, buildOrganizationSchema } from "@/lib/seo";
import Hero from "@/components/Hero";
import About from "@/components/About";
import PracticeAreas from "@/components/PracticeAreas";
import LegalActs from "@/components/LegalActs";
import Contact from "@/components/Contact";
import { WhyTrustUs, SuccessMetrics, TrustBadges } from "@/components/authority/TrustSignals";
import Disclaimers from "@/components/authority/Disclaimers";

// Homepage — visually identical to the previous single-page site.
// SiteLayout renders DisclaimerModal + Navbar + <main> + Footer around it.
const Index = () => {
  return (
    <>
      <SEO
        title="Best IVF, Surrogacy, ART & PC-PNDT Lawyer in India | Advocate Barkha Tiwari"
        description="Advocate Barkha Tiwari - Delhi High Court practitioner with 10+ years' experience in IVF, Surrogacy Regulation Act 2021, ART Act 2021 and PC-PNDT Act compliance. Book a consultation."
        path="/"
        keywords="IVF lawyer India, surrogacy lawyer, ART Act 2021, PC-PNDT advocate, Barkha Tiwari, infertility legal solutions, Delhi High Court advocate"
        jsonLd={[buildOrganizationSchema(), buildPersonSchema(), ...homeSchemas]}
      />
      <Hero />
      <About />
      <PracticeAreas />
      <SuccessMetrics />
      <WhyTrustUs />
      <TrustBadges />
      <LegalActs />
      <Contact />
      <Disclaimers />
    </>
  );
};

export default Index;
