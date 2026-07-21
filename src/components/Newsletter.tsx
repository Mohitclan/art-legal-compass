import { useState } from "react";
import { Mail } from "lucide-react";
import { z } from "zod";
import { toast } from "@/hooks/use-toast";

const schema = z.object({ email: z.string().email("Enter a valid email address") });

type Props = { headline?: string; subhead?: string };

const Newsletter = ({
  headline = "Legal updates on ART, Surrogacy & PC-PNDT",
  subhead = "Occasional briefings on statutory changes and compliance. No spam.",
}: Props) => {
  const [email, setEmail] = useState("");
  const [pending, setPending] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse({ email });
    if (!parsed.success) {
      toast({ title: "Invalid email", description: parsed.error.issues[0].message, variant: "destructive" });
      return;
    }
    setPending(true);
    try {
      // TODO: POST to your newsletter provider when ready.
      await new Promise((r) => setTimeout(r, 400));
      toast({ title: "Subscribed", description: `We'll email ${email} with new briefings.` });
      setEmail("");
    } finally { setPending(false); }
  };

  return (
    <section className="py-14 bg-secondary/30 border-y border-border">
      <div className="container mx-auto px-6 max-w-3xl text-center">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-gold shadow-gold mb-4">
          <Mail className="w-5 h-5 text-primary" />
        </div>
        <h2 className="font-playfair text-2xl md:text-3xl font-bold text-primary mb-2">{headline}</h2>
        <p className="text-muted-foreground mb-6">{subhead}</p>
        <form onSubmit={submit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
          <label htmlFor="newsletter-email" className="sr-only">Email address</label>
          <input id="newsletter-email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" className="flex-1 h-11 px-4 rounded-md border border-border bg-background text-foreground outline-none focus:border-gold" />
          <button type="submit" disabled={pending} className="h-11 px-6 rounded-md bg-gradient-gold text-primary font-semibold shadow-gold disabled:opacity-60">
            {pending ? "Subscribing…" : "Subscribe"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
