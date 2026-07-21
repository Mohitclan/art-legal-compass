import { useState } from "react";
import { MessageSquare } from "lucide-react";
import { z } from "zod";
import { toast } from "@/hooks/use-toast";

const FORMSUBMIT_ENDPOINT = "https://formsubmit.co/infertilitylegalsolutions@gmail.com";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your full name").max(100),
  email: z.string().trim().email("Enter a valid email address").max(255),
  phone: z.string().trim().max(30).optional().or(z.literal("")),
  country: z.string().trim().min(2, "Country is required").max(80),
  subject: z.string().trim().min(3, "Subject is required").max(150),
  message: z.string().trim().min(20, "Message should be at least 20 characters").max(2000),
});

type FormState = z.infer<typeof schema>;

const initial: FormState = {
  name: "",
  email: "",
  phone: "",
  country: "",
  subject: "",
  message: "",
};

const LegalQueryForm = () => {
  const [values, setValues] = useState<FormState>(initial);
  const [pending, setPending] = useState(false);

  const update = (k: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setValues((v) => ({ ...v, [k]: e.target.value }));

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const parsed = schema.safeParse(values);
    if (!parsed.success) {
      toast({
        title: "Please review the form",
        description: parsed.error.issues[0].message,
        variant: "destructive",
      });
      return;
    }
    setPending(true);
    try {
      const form = e.currentTarget;
      const data = new FormData(form);
      const res = await fetch(FORMSUBMIT_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (!res.ok) throw new Error("Submission failed");
      // Fire analytics only on success.
      const { trackContactSubmit } = await import("@/lib/analytics/events");
      trackContactSubmit("legal-query-form");
      window.location.href = "/query-success";
    } catch (err) {
      toast({
        title: "Could not send your query",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
      setPending(false);
    }
  };

  return (
    <section className="py-20 bg-secondary/30 border-t border-border">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-gold shadow-gold mb-4">
            <MessageSquare className="w-5 h-5 text-primary" />
          </div>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-primary mb-2">
            Have a Legal Question? Ask Our Legal Team
          </h2>
          <div className="h-1 w-20 bg-gradient-gold mx-auto mb-4" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a question about surrogacy, IVF, ART Act, or legal compliance? Send us your query and our team will get back to you as soon as possible.
          </p>
        </div>

        <form
          onSubmit={onSubmit}
          action={FORMSUBMIT_ENDPOINT}
          method="POST"
          className="bg-card border border-border rounded-lg shadow-sm p-6 md:p-8 space-y-5"
        >
          {/* FormSubmit config */}
          <input type="hidden" name="_subject" value="Website Legal Query" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_next" value="/query-success" />

          <div className="grid md:grid-cols-2 gap-5">
            <Field label="Full Name" required htmlFor="lq-name">
              <input
                id="lq-name"
                name="name"
                required
                value={values.name}
                onChange={update("name")}
                className={inputCls}
              />
            </Field>
            <Field label="Email Address" required htmlFor="lq-email">
              <input
                id="lq-email"
                name="email"
                type="email"
                required
                value={values.email}
                onChange={update("email")}
                className={inputCls}
              />
            </Field>
            <Field label="Phone Number" htmlFor="lq-phone">
              <input
                id="lq-phone"
                name="phone"
                type="tel"
                value={values.phone}
                onChange={update("phone")}
                className={inputCls}
              />
            </Field>
            <Field label="Country" required htmlFor="lq-country">
              <input
                id="lq-country"
                name="country"
                required
                value={values.country}
                onChange={update("country")}
                className={inputCls}
              />
            </Field>
          </div>

          <Field label="Subject" required htmlFor="lq-subject">
            <input
              id="lq-subject"
              name="subject"
              required
              value={values.subject}
              onChange={update("subject")}
              className={inputCls}
            />
          </Field>

          <Field label="Message" required htmlFor="lq-message">
            <textarea
              id="lq-message"
              name="message"
              required
              rows={6}
              minLength={20}
              value={values.message}
              onChange={update("message")}
              className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground outline-none focus:border-gold transition-colors resize-y"
            />
          </Field>

          <div className="pt-2">
            <button
              type="submit"
              disabled={pending}
              className="w-full sm:w-auto h-12 px-8 rounded-md bg-gradient-gold text-primary font-semibold shadow-gold hover:opacity-90 hover:scale-[1.02] transition-all disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {pending ? "Sending…" : "Send Query"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

const inputCls =
  "w-full h-11 px-4 rounded-md border border-border bg-background text-foreground outline-none focus:border-gold transition-colors";

const Field = ({
  label,
  required,
  htmlFor,
  children,
}: {
  label: string;
  required?: boolean;
  htmlFor: string;
  children: React.ReactNode;
}) => (
  <div>
    <label htmlFor={htmlFor} className="block text-sm font-medium text-primary mb-1.5">
      {label} {required && <span className="text-gold">*</span>}
    </label>
    {children}
  </div>
);

export default LegalQueryForm;