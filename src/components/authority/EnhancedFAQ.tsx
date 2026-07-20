import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";
import type { FAQ } from "@/content/services";
import { Link } from "react-router-dom";
import { WHATSAPP_URL, TEL_URL, MAILTO_URL } from "@/content/site";

const EnhancedFAQ = ({ faqs, id = "faq" }: { faqs: FAQ[]; id?: string }) => {
  if (!faqs.length) return null;
  return (
    <section id={id} className="py-16">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="flex items-center justify-center gap-2 mb-2">
          <HelpCircle className="w-5 h-5 text-gold" />
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-primary text-center">Frequently Asked Questions</h2>
        </div>
        <div className="h-1 w-24 bg-gradient-gold mx-auto mb-10" />
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`faq-${i}`}>
              <AccordionTrigger className="text-left font-playfair text-lg text-primary">{f.q}</AccordionTrigger>
              <AccordionContent className="text-base text-foreground/80 leading-relaxed">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <p className="text-center text-sm text-muted-foreground mt-8">
          Question not covered above?{" "}
          <a href={WHATSAPP_URL} target="_blank" rel="noopener" className="text-gold hover:underline">WhatsApp</a>{" · "}
          <a href={TEL_URL} className="text-gold hover:underline">Call</a>{" · "}
          <a href={MAILTO_URL} className="text-gold hover:underline">Email</a>{" · "}
          <Link to="/contact" className="text-gold hover:underline">Book a consultation</Link>
        </p>
      </div>
    </section>
  );
};

export default EnhancedFAQ;
