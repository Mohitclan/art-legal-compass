import { Card } from "@/components/ui/card";
import { CheckCircle2, ShieldCheck } from "lucide-react";
import { TRUST_SIGNALS } from "@/content/authority";

export const WhyTrustUs = () => (
  <section className="py-16">
    <div className="container mx-auto px-6 max-w-5xl">
      <h2 className="font-playfair text-3xl md:text-4xl font-bold text-primary text-center mb-2">
        Why Clients Trust Us
      </h2>
      <div className="h-1 w-24 bg-gradient-gold mx-auto mb-10" />
      <div className="grid md:grid-cols-2 gap-4">
        {TRUST_SIGNALS.whyTrust.map((t) => (
          <div key={t} className="flex items-start gap-3">
            <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-gold" />
            <span className="text-foreground/85 leading-relaxed">{t}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const SuccessMetrics = () => (
  <section className="py-14 bg-primary text-ivory">
    <div className="container mx-auto px-6 max-w-5xl">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {TRUST_SIGNALS.metrics.map((m) => (
          <div key={m.label}>
            <p className="font-playfair text-4xl md:text-5xl font-bold text-gold">{m.value}</p>
            <p className="text-xs md:text-sm uppercase tracking-widest mt-2 text-ivory/80">{m.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const TrustBadges = () => (
  <section className="py-10">
    <div className="container mx-auto px-6 max-w-5xl">
      <div className="flex flex-wrap items-center justify-center gap-3">
        {TRUST_SIGNALS.badges.map((b) => (
          <span key={b} className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-primary bg-secondary/50 border border-gold/40 rounded-full">
            <ShieldCheck className="w-3.5 h-3.5 text-gold" />
            {b}
          </span>
        ))}
      </div>
    </div>
  </section>
);

const TrustSignals = () => (
  <>
    <WhyTrustUs />
    <SuccessMetrics />
    <TrustBadges />
  </>
);
export default TrustSignals;
