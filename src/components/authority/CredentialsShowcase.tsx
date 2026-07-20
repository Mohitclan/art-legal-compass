import { Card } from "@/components/ui/card";
import { Award, Briefcase, Building2, ScrollText, Scale, BadgeCheck } from "lucide-react";
import { AUTHOR } from "@/content/authority";

const Block = ({
  icon: Icon, title, items,
}: { icon: typeof Award; title: string; items: readonly string[] }) => (
  <Card className="p-6 border-2 border-border hover:border-gold transition-colors h-full">
    <div className="flex items-center gap-3 mb-3">
      <div className="w-10 h-10 bg-gradient-gold rounded-full flex items-center justify-center shrink-0">
        <Icon className="w-5 h-5 text-primary" />
      </div>
      <h3 className="font-playfair text-lg font-semibold text-primary">{title}</h3>
    </div>
    <ul className="space-y-1.5 text-sm text-foreground/80 list-disc list-inside">
      {items.map((i) => <li key={i}>{i}</li>)}
    </ul>
  </Card>
);

const CredentialsShowcase = () => (
  <section className="py-16 bg-secondary/20">
    <div className="container mx-auto px-6 max-w-6xl">
      <h2 className="font-playfair text-3xl md:text-4xl font-bold text-primary text-center mb-2">
        Professional Credentials
      </h2>
      <div className="h-1 w-24 bg-gradient-gold mx-auto mb-10" />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Block icon={Briefcase} title="Experience" items={[`${10}+ years in fertility & healthcare law`, "Advisor to IVF centres and ART banks", "Cross-border ART parentage matters", "PC-PNDT audits & Appropriate Authority representation"]} />
        <Block icon={Building2} title="Court Practice" items={AUTHOR.courtPractice} />
        <Block icon={Scale} title="Legal Expertise" items={AUTHOR.expertise} />
        <Block icon={ScrollText} title="Professional Memberships" items={AUTHOR.memberships} />
        <Block icon={BadgeCheck} title="Certifications" items={AUTHOR.certifications} />
        <Block icon={Award} title="Credentials" items={AUTHOR.credentials} />
      </div>
    </div>
  </section>
);

export default CredentialsShowcase;
