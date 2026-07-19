import { Mail, Phone, MapPin, Scale } from "lucide-react";
import { trackPhoneClick, trackWhatsApp, trackEmailClick } from "@/lib/analytics/events";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-primary via-navy to-primary relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-20 w-80 h-80 bg-gold rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 left-20 w-96 h-96 bg-gold rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-ivory mb-4">
              Get in Touch
            </h2>
            <div className="h-1 w-24 bg-gradient-gold mx-auto mb-6"></div>
            <p className="text-lg text-ivory/80 max-w-2xl mx-auto">
              Reach out for expert legal consultation on ART, Surrogacy, and IVF compliance matters
            </p>
          </div>

          {/* Professional Card */}
          <div className="animate-slide-up">
            <div className="bg-black/40 backdrop-blur-sm border-2 border-gold/30 rounded-lg p-8 md:p-12 shadow-gold hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]">
              <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
                {/* Left side - Name and Title */}
                <div className="text-center md:text-left">
                  <h3 className="font-playfair text-4xl md:text-5xl font-bold text-ivory mb-2 tracking-wide animate-fade-in">
                    BARKHA TIWARI
                  </h3>
                  <div className="h-0.5 w-32 bg-gradient-gold mb-4 mx-auto md:mx-0 animate-[shimmer_3s_ease-in-out_infinite]" style={{ 
                    backgroundImage: "linear-gradient(90deg, transparent, hsl(var(--gold)), transparent)",
                    backgroundSize: "200% 100%"
                  }}></div>
                  <p className="text-2xl text-ivory/90 font-light animate-fade-in" style={{ animationDelay: "0.2s" }}>Advocate</p>
                </div>

                {/* Right side - Legal Symbol */}
                <div className="w-32 h-32 border-4 border-ivory rounded-full flex items-center justify-center shrink-0 animate-float hover:border-gold transition-colors duration-500">
                  <Scale className="w-16 h-16 text-ivory" />
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-ivory/20">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Phone */}
                  <div className="flex items-start gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
                    <div className="w-10 h-10 bg-gradient-gold rounded-full flex items-center justify-center shrink-0 shadow-gold">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="text-ivory text-lg font-medium mb-2">
                        +91 8392931025
                      </p>
                      <div className="flex gap-3">
                        <a
                          href="tel:+918392931025"
                          onClick={() => trackPhoneClick("contact-card")}
                          className="px-4 py-2 bg-gradient-gold rounded-full text-primary text-sm font-semibold hover:scale-105 transition-all duration-300 shadow-gold"
                        >
                          Call
                        </a>
                        <a
                          href="https://wa.me/918392931025?text=Hello%2C%20I%20would%20like%20to%20schedule%20a%20consultation%20regarding%20ART%2C%20Surrogacy%2C%20or%20IVF%20legal%20matters."
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => trackWhatsApp("contact-card")}
                          className="px-4 py-2 bg-gradient-gold rounded-full text-primary text-sm font-semibold hover:scale-105 transition-all duration-300 shadow-gold"
                        >
                          WhatsApp
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <a
                    href="mailto:barkha.abha2@gmail.com"
                    onClick={() => trackEmailClick("contact-card")}
                    className="flex items-start gap-4 group hover:scale-105 transition-all duration-300 animate-fade-in"
                    style={{ animationDelay: "0.4s" }}
                  >
                    <div className="w-10 h-10 bg-gradient-gold rounded-full flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-gold">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-ivory text-lg font-medium group-hover:text-gold transition-colors break-all">
                        barkha.abha2@gmail.com
                      </p>
                    </div>
                  </a>

                  {/* Chamber Address */}
                  <div className="flex items-start gap-4 group animate-fade-in" style={{ animationDelay: "0.5s" }}>
                    <div className="w-10 h-10 bg-gradient-gold rounded-full flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-ivory/70 text-sm font-semibold mb-1">Chamber</p>
                      <p className="text-ivory text-base leading-relaxed">
                        Chamber No.-920, Lawyers Chamber Block,<br />
                        Rohini Court, Complex, Rohini, Delhi-110085
                      </p>
                    </div>
                  </div>

                  {/* Office Address */}
                  <div className="flex items-start gap-4 group animate-fade-in" style={{ animationDelay: "0.6s" }}>
                    <div className="w-10 h-10 bg-gradient-gold rounded-full flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-ivory/70 text-sm font-semibold mb-1">Office</p>
                      <p className="text-ivory text-base leading-relaxed">
                        Flat No. 737, Baghban Appartment,<br />
                        Pocket-GH2, Sector-28, Rohini, Delhi-110042
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
