import { Check } from "lucide-react";
import { TRUST_SIGNALS, CLIENT_JOURNEY } from "@/content/authority";

const WhyAndProcess = () => (
  <section className="py-20 bg-background">
    <div className="container mx-auto px-6">
      <div className="grid lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] gap-8 items-stretch">
        <div className="bg-gradient-hero rounded-lg p-8 md:p-10 shadow-elegant">
          <h2 className="font-playfair text-3xl font-bold text-primary-foreground mb-6">
            Why Choose Us?
          </h2>
          <ul className="space-y-4">
            {TRUST_SIGNALS.whyTrust.map((item) => (
              <li key={item} className="flex gap-3 text-sm text-primary-foreground/85">
                <span className="w-5 h-5 rounded-full bg-gold/20 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-gold" />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-secondary/40 rounded-lg p-8 md:p-10 border border-border">
          <h2 className="font-playfair text-3xl font-bold text-primary mb-2 text-center">
            Our Legal Process
          </h2>
          <div className="h-1 w-20 bg-gradient-gold mx-auto mb-10" />
          <ol className="grid sm:grid-cols-2 xl:grid-cols-5 gap-6">
            {CLIENT_JOURNEY.map((step, i) => (
              <li key={step.title} className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary text-gold font-playfair font-bold flex items-center justify-center mx-auto mb-3">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="font-semibold text-sm text-primary mb-1.5">{step.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  </section>
);

export default WhyAndProcess;
