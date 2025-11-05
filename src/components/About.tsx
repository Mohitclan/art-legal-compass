import { Award, BookOpen, Scale } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-background via-secondary/10 to-background relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-primary mb-4">
              About Advocate Barkha Tiwari
            </h2>
            <div className="h-1 w-24 bg-gradient-gold mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-slide-up">
              <p className="text-lg text-foreground leading-relaxed">
                Barkha Tiwari is a practicing{" "}
                <span className="font-semibold text-primary">Advocate & Solicitor</span>{" "}
                specializing in infertility and surrogacy-related legal documentation, 
                ART Bank compliance, certification for IVF centers, and PC & PNDT law.
              </p>
              <p className="text-lg text-foreground leading-relaxed">
                She also advises on civil, corporate, and healthcare legal matters with{" "}
                <span className="font-semibold text-gold">over a decade of professional experience</span>.
              </p>
              <p className="text-lg text-foreground leading-relaxed">
                Her expertise ensures full compliance with regulatory frameworks while 
                providing comprehensive legal solutions for fertility clinics and healthcare providers.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-card/80 backdrop-blur-sm p-6 rounded-lg shadow-elegant border-l-4 border-gold hover:shadow-gold hover:scale-105 transition-all duration-300 group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Scale className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-playfair text-xl font-semibold text-primary mb-2 group-hover:text-gold transition-colors">
                      Legal Expertise
                    </h3>
                    <p className="text-muted-foreground">
                      Specialized in ART, Surrogacy, and IVF legal compliance
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-card/80 backdrop-blur-sm p-6 rounded-lg shadow-elegant border-l-4 border-gold hover:shadow-gold hover:scale-105 transition-all duration-300 group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-playfair text-xl font-semibold text-primary mb-2 group-hover:text-gold transition-colors">
                      Certification Support
                    </h3>
                    <p className="text-muted-foreground">
                      Comprehensive assistance for IVF center legal documentation
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-card/80 backdrop-blur-sm p-6 rounded-lg shadow-elegant border-l-4 border-gold hover:shadow-gold hover:scale-105 transition-all duration-300 group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <BookOpen className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-playfair text-xl font-semibold text-primary mb-2 group-hover:text-gold transition-colors">
                      Decade of Experience
                    </h3>
                    <p className="text-muted-foreground">
                      Proven track record in healthcare and corporate law
                    </p>
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

export default About;
