import { useState } from "react";
import SEO from "@/components/SEO";
import { homeSchemas } from "@/lib/seo-schemas";
import DisclaimerModal from "@/components/DisclaimerModal";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import PracticeAreas from "@/components/PracticeAreas";
import LegalActs from "@/components/LegalActs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  const [hasAccepted, setHasAccepted] = useState(false);
  const [isRejected, setIsRejected] = useState(false);

  const handleAccept = () => {
    setHasAccepted(true);
  };

  const handleReject = () => {
    setIsRejected(true);
  };

  return (
    <>
      <SEO
        title="Best IVF, Surrogacy, ART & PC-PNDT Lawyer in India | Advocate Barkha Tiwari"
        description="Advocate Barkha Tiwari - Delhi High Court practitioner with 10+ years' experience in IVF, Surrogacy Regulation Act 2021, ART Act 2021 and PC-PNDT Act compliance. Book a consultation."
        path="/"
        keywords="IVF lawyer India, surrogacy lawyer, ART Act 2021, PC-PNDT advocate, Barkha Tiwari, infertility legal solutions, Delhi High Court advocate"
        jsonLd={homeSchemas}
      />
      <DisclaimerModal onAccept={handleAccept} onReject={handleReject} />
      
      <div
        className={`transition-all duration-500 ${
          !hasAccepted && !isRejected ? "blur-sm pointer-events-none" : ""
        }`}
      >
        <Navbar />
        <main id="main-content" role="main">
          <Hero />
          <About />
          <PracticeAreas />
          <LegalActs />
          <Contact />
        </main>
        <Footer />
      </div>

      {isRejected && (
        <div className="fixed inset-0 bg-primary/95 flex items-center justify-center z-50">
          <div className="text-center text-primary-foreground p-8">
            <h2 className="font-playfair text-3xl font-bold mb-4">
              Thank you for visiting
            </h2>
            <p className="text-lg">
              You have chosen to exit this website.
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Index;
