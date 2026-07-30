import SEO from "@/components/SEO";
import { homeSchemas } from "@/lib/seo-schemas";
import { buildPersonSchema, buildOrganizationSchema } from "@/lib/seo";
import Hero from "@/components/Hero";
import StatsBar from "@/components/home/StatsBar";
import About from "@/components/About";
import PracticeAreas from "@/components/PracticeAreas";
import WhyAndProcess from "@/components/home/WhyAndProcess";
import UpdatesAndFaq from "@/components/home/UpdatesAndFaq";
import ContactBand from "@/components/home/ContactBand";
import LegalActs from "@/components/LegalActs";
import Contact from "@/components/Contact";
import LegalQueryForm from "@/components/LegalQueryForm";
import { TrustBadges } from "@/components/authority/TrustSignals";
import Disclaimers from "@/components/authority/Disclaimers";

const Index = () => {
  return (
    <>
      <SEO
        title="Best IVF, Surrogacy, ART & PC-PNDT Lawyer in India | Advocate Barkha Dwivedi"
        description="Advocate Barkha Dwivedi - Delhi High Court practitioner with 10+ years' experience in IVF, Surrogacy Regulation Act 2021, ART Act 2021 and PC-PNDT Act compliance. Book a consultation."
        path="/"
        keywords="IVF lawyer India, surrogacy lawyer, ART Act 2021, PC-PNDT advocate, Barkha Dwivedi, infertility legal solutions, Delhi High Court advocate"
        jsonLd={[buildOrganizationSchema(), buildPersonSchema(), ...homeSchemas]}
      />
      <Hero />
      <StatsBar />
      <PracticeAreas />
      <WhyAndProcess />
      <About />
      <TrustBadges />
      <UpdatesAndFaq />
      <LegalActs />
      <ContactBand />
      <Contact />
      <LegalQueryForm />
      <Disclaimers />
    </>
  );
};

export default Index;
