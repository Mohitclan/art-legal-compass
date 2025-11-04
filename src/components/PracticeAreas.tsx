import { FileText, Shield, Building2, BookCheck, Briefcase } from "lucide-react";

const practiceAreas = [
  {
    icon: FileText,
    title: "ART Legal Documentation",
    description: "Comprehensive Level I & II documentation for Assisted Reproductive Technology",
  },
  {
    icon: Shield,
    title: "Surrogacy Approvals & Certification",
    description: "Complete legal support for surrogacy agreements and regulatory compliance",
  },
  {
    icon: Building2,
    title: "IVF & ART Bank Legal Compliance",
    description: "Ensuring full adherence to legal frameworks for fertility centers",
  },
  {
    icon: BookCheck,
    title: "PC & PNDT Legal Advisory",
    description: "Expert guidance on Pre-Conception and Pre-Natal Diagnostic Techniques Act",
  },
  {
    icon: Briefcase,
    title: "Civil & Corporate Advisory",
    description: "Holistic legal counsel for healthcare and business entities",
  },
];

const PracticeAreas = () => {
  return (
    <section id="practice-areas" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-primary mb-4">
            Practice Areas
          </h2>
          <div className="h-1 w-24 bg-gradient-gold mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Specialized legal services for infertility and reproductive healthcare
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {practiceAreas.map((area, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-lg shadow-elegant hover:shadow-gold transition-all group border border-border hover:border-gold animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-gold">
                <area.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-playfair text-xl font-semibold text-primary mb-3 group-hover:text-gold transition-colors">
                {area.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;
