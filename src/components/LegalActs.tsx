import { Scale, Shield, HeartHandshake, BookOpen } from "lucide-react";
import { Card } from "@/components/ui/card";

const legalActs = [
  {
    icon: HeartHandshake,
    title: "Surrogacy (Regulation) Act, 2021",
    shortName: "Surrogacy Act",
    description: "Comprehensive legislation regulating surrogacy arrangements in India, ensuring ethical practices and protecting the rights of all parties involved.",
    keyPoints: [
      "Permits only altruistic surrogacy for Indian couples",
      "Establishes National and State Surrogacy Boards",
      "Requires eligibility certificates for intending couples",
      "Protects surrogate mothers' rights and welfare",
      "Prohibits commercial surrogacy and exploitation"
    ],
    color: "from-blue-500/20 to-purple-500/20"
  },
  {
    icon: Scale,
    title: "Assisted Reproductive Technology (Regulation) Act, 2021",
    shortName: "ART Act",
    description: "Framework for regulation and supervision of ART clinics and banks to ensure safe, ethical, and standardized assisted reproductive services.",
    keyPoints: [
      "Mandates registration of all ART clinics and banks",
      "Establishes National and State ART Boards",
      "Sets standards for gamete donation and storage",
      "Protects patient confidentiality and rights",
      "Ensures quality control and ethical practices"
    ],
    color: "from-emerald-500/20 to-teal-500/20"
  },
  {
    icon: Shield,
    title: "Pre-Conception & Pre-Natal Diagnostic Techniques (PC-PNDT) Act, 1994",
    shortName: "PC-PNDT Act",
    description: "Legislation to prevent sex-selective practices and regulate the use of pre-natal diagnostic techniques, combating female foeticide.",
    keyPoints: [
      "Prohibits sex determination before or after conception",
      "Regulates use of diagnostic techniques for genetic abnormalities",
      "Requires mandatory registration of diagnostic centers",
      "Imposes strict penalties for violations",
      "Protects girl child and promotes gender equality"
    ],
    color: "from-rose-500/20 to-pink-500/20"
  },
  {
    icon: BookOpen,
    title: "Medical Termination of Pregnancy (MTP) Act, 1971",
    shortName: "MTP Act",
    description: "Governs conditions under which pregnancy can be terminated, ensuring women's health and rights while maintaining ethical standards.",
    keyPoints: [
      "Permits termination under specific medical conditions",
      "Requires qualified medical practitioners",
      "Sets gestational limits for termination",
      "Protects women's health and privacy",
      "Amended in 2021 to enhance women's rights"
    ],
    color: "from-amber-500/20 to-orange-500/20"
  }
];

const LegalActs = () => {
  return (
    <section id="legal-acts" className="py-24 bg-gradient-to-br from-background via-secondary/20 to-background relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gold rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-primary mb-4">
            Regulatory Framework
          </h2>
          <div className="h-1 w-24 bg-gradient-gold mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Expert guidance on key legislation governing Assisted Reproductive Technology, 
            Surrogacy, and reproductive healthcare in India
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {legalActs.map((act, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden bg-card/80 backdrop-blur-sm border-2 border-border hover:border-gold transition-all duration-500 animate-slide-up hover:shadow-gold"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${act.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              <div className="relative p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-gold rounded-lg flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-gold">
                    <act.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-playfair text-2xl font-semibold text-primary mb-2 group-hover:text-gold transition-colors duration-300">
                      {act.shortName}
                    </h3>
                    <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide">
                      {act.title}
                    </p>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  {act.description}
                </p>

                <div className="space-y-3">
                  <h4 className="font-semibold text-primary text-sm uppercase tracking-wide mb-3">
                    Key Provisions:
                  </h4>
                  {act.keyPoints.map((point, idx) => (
                    <div 
                      key={idx} 
                      className="flex items-start gap-3 group/item"
                      style={{ animationDelay: `${(index * 0.15) + (idx * 0.05)}s` }}
                    >
                      <div className="w-1.5 h-1.5 bg-gold rounded-full mt-2 shrink-0 group-hover/item:scale-150 transition-transform duration-300"></div>
                      <p className="text-sm text-foreground/80 leading-relaxed group-hover/item:text-foreground transition-colors duration-200">
                        {point}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Compliance Notice */}
        <div className="mt-16 max-w-4xl mx-auto">
          <Card className="bg-primary/5 border-2 border-primary/20 p-8 text-center animate-fade-in">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-gold rounded-full mb-4 shadow-gold">
              <Scale className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-playfair text-2xl font-bold text-primary mb-3">
              Ensuring Full Legal Compliance
            </h3>
            <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Our practice specializes in navigating these complex regulatory frameworks, 
              ensuring complete compliance for ART clinics, IVF centers, and intending parents 
              throughout their reproductive journey.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default LegalActs;
