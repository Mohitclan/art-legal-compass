import { Users, Award, Building2, Globe } from "lucide-react";

const stats = [
  { icon: Users, value: "300+", label: "Intending Parents Represented" },
  { icon: Award, value: "10+", label: "Years of Practice" },
  { icon: Building2, value: "50+", label: "Fertility Clinics Advised" },
  { icon: Globe, value: "Global", label: "Clients Supported Worldwide" },
];

const StatsBar = () => (
  <section className="bg-gradient-hero py-10">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:divide-x divide-primary-foreground/15">
        {stats.map((s) => (
          <div key={s.label} className="flex items-center gap-4 justify-center lg:px-4">
            <s.icon className="w-8 h-8 text-gold shrink-0" />
            <div>
              <p className="font-playfair text-2xl font-bold text-primary-foreground leading-none mb-1">
                {s.value}
              </p>
              <p className="text-xs text-primary-foreground/70">{s.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default StatsBar;
