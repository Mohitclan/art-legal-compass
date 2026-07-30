import { Link } from "react-router-dom";
import { ArrowRight, Baby, TestTube, Globe2, ClipboardCheck, Landmark } from "lucide-react";

const practiceAreas = [
  {
    icon: Baby,
    title: "Surrogacy Law",
    description: "End-to-end legal support for altruistic surrogacy arrangements in India.",
    to: "/services/surrogacy-law",
  },
  {
    icon: TestTube,
    title: "IVF & ART Law",
    description: "Legal guidance for IVF procedures, egg/sperm donation and ART banks.",
    to: "/services/ivf-legal-services",
  },
  {
    icon: Globe2,
    title: "Foreign Intended Parents",
    description: "Assistance for foreign and NRI intended parents navigating Indian law.",
    to: "/services/foreign-intended-parents",
  },
  {
    icon: ClipboardCheck,
    title: "PC-PNDT Compliance",
    description: "Compliance, audits and advisory for clinics under the PC-PNDT Act, 1994.",
    to: "/services/pc-pndt-compliance",
  },
  {
    icon: Landmark,
    title: "ART Act Compliance",
    description: "Registration and regulatory advisory for fertility clinics and professionals.",
    to: "/services/art-act-compliance",
  },
];

const PracticeAreas = () => (
  <section id="practice-areas" className="py-20 bg-background">
    <div className="container mx-auto px-6">
      <div className="text-center mb-12">
        <h2 className="font-playfair text-3xl md:text-4xl font-bold text-primary mb-3">
          Our Practice Areas
        </h2>
        <div className="h-1 w-20 bg-gradient-gold mx-auto mb-5" />
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Specialised legal services across infertility and reproductive healthcare law.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {practiceAreas.map((area, i) => (
          <Link
            key={area.title}
            to={area.to}
            className="group bg-card border border-border rounded-lg p-7 text-center hover:border-gold hover:shadow-elegant hover:-translate-y-1 transition-all duration-300 animate-fade-in"
            style={{ animationDelay: `${i * 0.08}s` }}
          >
            <area.icon className="w-9 h-9 text-gold mx-auto mb-5" strokeWidth={1.4} />
            <h3 className="font-playfair text-lg font-semibold text-primary mb-2.5">
              {area.title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-5">
              {area.description}
            </p>
            <span className="text-sm font-semibold text-gold inline-flex items-center gap-1.5">
              Read More
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default PracticeAreas;
