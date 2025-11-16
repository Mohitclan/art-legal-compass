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
    >
      {/* Background with enhanced effects */}
      <div className="absolute inset-0">
        <img
          src={heroBackground}
          alt="Legal background"
          className="w-full h-full object-cover scale-105 animate-[scale-in_1.5s_ease-out]"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
        {/* Floating decorative elements */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-gold/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-40 right-20 w-40 h-40 bg-gold/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
      </div>

      <div className="container mx-auto px-6 py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-8 animate-fade-in">
            <div className="w-20 h-20 bg-gradient-gold rounded-full flex items-center justify-center shadow-gold animate-float">
              <Scale className="w-10 h-10 text-primary" />
            </div>
          </div>

          <h1 className="font-playfair text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Best Lawyer for IVF, Surrogacy, ART & PC-PNDT
          </h1>

          <div className="h-1 w-32 mx-auto mb-8 animate-[shimmer_3s_ease-in-out_infinite]" style={{ 
            background: "linear-gradient(90deg, transparent, hsl(var(--gold)), transparent)",
            backgroundSize: "200% 100%",
            animationDelay: "0.4s"
          }}></div>

          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-4 font-medium animate-fade-in" style={{ animationDelay: "0.5s" }}>
            Expert Legal Solutions for Infertility & Reproductive Healthcare
          </p>

          <p className="text-lg text-primary-foreground/80 mb-12 animate-fade-in" style={{ animationDelay: "0.7s" }}>
            Advocate Barkha Tiwari | Advocate & Solicitor | Delhi High Court
          </p>

          <button
            onClick={scrollToContact}
            className="bg-gradient-gold px-8 py-4 rounded-lg text-primary font-bold text-lg hover:opacity-90 transition-all shadow-gold hover:shadow-2xl hover:scale-105 transform animate-fade-in"
            style={{ animationDelay: "0.9s" }}
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
