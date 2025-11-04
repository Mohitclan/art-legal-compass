import { useState } from "react";
import DisclaimerModal from "@/components/DisclaimerModal";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import PracticeAreas from "@/components/PracticeAreas";
import IVFCenters from "@/components/IVFCenters";
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
      <DisclaimerModal onAccept={handleAccept} onReject={handleReject} />
      
      <div
        className={`transition-all duration-500 ${
          !hasAccepted && !isRejected ? "blur-sm pointer-events-none" : ""
        }`}
      >
        <Navbar />
        <Hero />
        <About />
        <PracticeAreas />
        <IVFCenters />
        <Contact />
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
