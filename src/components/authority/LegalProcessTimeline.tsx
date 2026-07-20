import { Card } from "@/components/ui/card";
type Step = { title: string; body: string; duration?: string };
const LegalProcessTimeline = ({ steps, title = "Legal Process Timeline" }: { steps: Step[]; title?: string }) => {
  if (!steps?.length) return null;
  return (
    <section className="py-10">
      <h2 className="font-playfair text-2xl md:text-3xl font-bold text-primary mb-6">{title}</h2>
      <ol className="grid md:grid-cols-2 gap-4">
        {steps.map((s, i) => (
          <Card key={i} className="p-5 border-2 border-border hover:border-gold transition-colors">
            <div className="flex items-start gap-3">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-gold text-primary font-bold">{i + 1}</span>
              <div>
                <h3 className="font-semibold text-primary">{s.title}</h3>
                {s.duration && <p className="text-xs uppercase tracking-widest text-muted-foreground mt-0.5">{s.duration}</p>}
                <p className="text-foreground/80 text-sm mt-1 leading-relaxed">{s.body}</p>
              </div>
            </div>
          </Card>
        ))}
      </ol>
    </section>
  );
};
export default LegalProcessTimeline;
