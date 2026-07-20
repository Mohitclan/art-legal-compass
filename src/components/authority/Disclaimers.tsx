import { AlertTriangle, Stethoscope } from "lucide-react";
import { LEGAL_DISCLAIMER, MEDICAL_DISCLAIMER } from "@/content/authority";

const Disclaimers = ({ medical = true }: { medical?: boolean }) => (
  <section className="py-10">
    <div className="container mx-auto px-6 max-w-4xl space-y-4">
      <div className="rounded-md border border-gold/40 bg-secondary/30 p-5">
        <div className="flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-gold shrink-0 mt-0.5" />
          <div>
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Legal Disclaimer</p>
            <p className="text-sm text-foreground/80 leading-relaxed">{LEGAL_DISCLAIMER}</p>
          </div>
        </div>
      </div>
      {medical && (
        <div className="rounded-md border border-gold/40 bg-secondary/30 p-5">
          <div className="flex items-start gap-3">
            <Stethoscope className="w-5 h-5 text-gold shrink-0 mt-0.5" />
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Medical Disclaimer</p>
              <p className="text-sm text-foreground/80 leading-relaxed">{MEDICAL_DISCLAIMER}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  </section>
);

export default Disclaimers;
