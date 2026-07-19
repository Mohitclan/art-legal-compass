import { Award, BookOpen, Scale, Users, Briefcase, GraduationCap, FileCheck } from "lucide-react";
import { Card } from "@/components/ui/card";
import { trackConsultation } from "@/lib/analytics/events";

const About = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-background via-secondary/10 to-background relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-primary rounded-full blur-3xl animate-float" style={{ animationDelay: "1.5s" }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-primary mb-4">
              About Advocate Barkha Tiwari
            </h2>
            <div className="h-1 w-24 bg-gradient-gold mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Leading Expert in Fertility Law, Surrogacy, and Reproductive Healthcare Legal Compliance
            </p>
          </div>

          {/* Main Introduction Card */}
          <Card className="bg-card/80 backdrop-blur-sm border-2 border-border hover:border-gold p-8 md:p-12 mb-12 shadow-elegant hover:shadow-gold transition-all duration-500 animate-slide-up group">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-foreground leading-relaxed mb-6 group-hover:scale-[1.01] transition-transform duration-300">
                <span className="font-semibold text-primary text-xl">Barkha Tiwari</span> is a distinguished{" "}
                <span className="text-gold font-medium">Advocate & Solicitor</span> with specialized expertise in 
                infertility and reproductive healthcare law. With over a decade of professional experience, she has 
                established herself as a trusted legal advisor for IVF centers, ART banks, and intending parents 
                navigating the complex landscape of assisted reproductive technology in India.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6 group-hover:scale-[1.01] transition-transform duration-300">
                Her practice encompasses comprehensive legal services including surrogacy agreements, ART bank 
                compliance, IVF center certification, PC-PNDT advisory, and civil & corporate law matters related 
                to healthcare entities. Advocate Tiwari brings a unique combination of legal acumen and deep 
                understanding of reproductive healthcare regulations, ensuring complete compliance with the 
                Surrogacy (Regulation) Act 2021 and ART (Regulation) Act 2021.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed group-hover:scale-[1.01] transition-transform duration-300">
                Operating from Delhi, she provides strategic legal counsel to fertility clinics, healthcare 
                providers, and families across India, helping them navigate regulatory frameworks while protecting 
                their rights and interests throughout the reproductive journey.
              </p>
            </div>
          </Card>

          {/* Expertise Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <Card className="bg-card/80 backdrop-blur-sm p-6 border-2 border-border hover:border-gold hover:shadow-gold hover:scale-105 transition-all duration-300 group animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                  <Scale className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-playfair text-xl font-semibold text-primary mb-2 group-hover:text-gold transition-colors">
                    Fertility Law Specialist
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Expert in ART, Surrogacy, and reproductive healthcare legal frameworks
                  </p>
                </div>
              </div>
            </Card>

            <Card className="bg-card/80 backdrop-blur-sm p-6 border-2 border-border hover:border-gold hover:shadow-gold hover:scale-105 transition-all duration-300 group animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                  <FileCheck className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-playfair text-xl font-semibold text-primary mb-2 group-hover:text-gold transition-colors">
                    Regulatory Compliance
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Complete documentation and certification for IVF centers and ART banks
                  </p>
                </div>
              </div>
            </Card>

            <Card className="bg-card/80 backdrop-blur-sm p-6 border-2 border-border hover:border-gold hover:shadow-gold hover:scale-105 transition-all duration-300 group animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-playfair text-xl font-semibold text-primary mb-2 group-hover:text-gold transition-colors">
                    Decade of Experience
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Over 10 years of proven expertise in healthcare and fertility law
                  </p>
                </div>
              </div>
            </Card>

            <Card className="bg-card/80 backdrop-blur-sm p-6 border-2 border-border hover:border-gold hover:shadow-gold hover:scale-105 transition-all duration-300 group animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-playfair text-xl font-semibold text-primary mb-2 group-hover:text-gold transition-colors">
                    Client-Centric Approach
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Personalized legal counsel for fertility clinics and intending parents
                  </p>
                </div>
              </div>
            </Card>

            <Card className="bg-card/80 backdrop-blur-sm p-6 border-2 border-border hover:border-gold hover:shadow-gold hover:scale-105 transition-all duration-300 group animate-fade-in" style={{ animationDelay: "0.5s" }}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                  <Briefcase className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-playfair text-xl font-semibold text-primary mb-2 group-hover:text-gold transition-colors">
                    Corporate Legal Advisory
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Comprehensive counsel for healthcare entities and businesses
                  </p>
                </div>
              </div>
            </Card>

            <Card className="bg-card/80 backdrop-blur-sm p-6 border-2 border-border hover:border-gold hover:shadow-gold hover:scale-105 transition-all duration-300 group animate-fade-in" style={{ animationDelay: "0.6s" }}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                  <BookOpen className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-playfair text-xl font-semibold text-primary mb-2 group-hover:text-gold transition-colors">
                    PC-PNDT Expertise
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Specialized guidance on Pre-Conception and Pre-Natal Diagnostic Techniques
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Call to Action */}
          <Card className="bg-primary/5 border-2 border-primary/20 p-8 text-center animate-scale-in hover:scale-105 transition-all duration-500">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-gold rounded-full mb-4 shadow-gold animate-float">
              <Award className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-playfair text-2xl font-bold text-primary mb-3">
              Trusted Legal Partner for Reproductive Healthcare
            </h3>
            <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-6">
              With extensive experience in fertility law and a deep commitment to protecting the rights of all 
              parties involved in assisted reproduction, Advocate Barkha Tiwari provides comprehensive legal 
              solutions tailored to your specific needs.
            </p>
            <button
              onClick={() => {
                trackConsultation("about");
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-gradient-gold px-8 py-3 rounded-lg text-primary font-bold text-lg hover:opacity-90 hover:scale-105 shadow-gold hover:shadow-2xl transition-all duration-300"
            >
              Request Consultation
            </button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
