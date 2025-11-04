import { Scale } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(26, 35, 50, 0.95) 0%, rgba(26, 35, 50, 0.85) 100%), url(${heroBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="container mx-auto px-6 py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <div className="flex justify-center mb-8">
            <div className="w-20 h-20 bg-gradient-gold rounded-full flex items-center justify-center shadow-gold animate-slide-up">
              <Scale className="w-10 h-10 text-primary" />
            </div>
          </div>

          <h1 className="font-playfair text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Infertility Legal Solutions
          </h1>

          <div className="h-1 w-32 bg-gradient-gold mx-auto mb-8"></div>

          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-4 font-medium">
            Expert Legal Counsel for ART, Surrogacy, and IVF Centers
          </p>

          <p className="text-lg text-primary-foreground/80 mb-12">
            Advocate Barkha Tiwari | Advocate & Solicitor | Delhi High Court
          </p>

          <button
            onClick={scrollToContact}
            className="bg-gradient-gold px-8 py-4 rounded-lg text-primary font-bold text-lg hover:opacity-90 transition-all shadow-gold hover:shadow-2xl hover:scale-105 transform"
          >
            Request Consultation
          </button>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;
