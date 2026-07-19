import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { FAQ } from "@/content/services";

const ServiceFAQ = ({ faqs }: { faqs: FAQ[] }) => {
  if (!faqs.length) return null;
  return (
    <section className="py-16">
      <div className="container mx-auto px-6 max-w-3xl">
        <h2 className="font-playfair text-3xl md:text-4xl font-bold text-primary text-center mb-2">
          Frequently Asked Questions
        </h2>
        <div className="h-1 w-24 bg-gradient-gold mx-auto mb-10" />
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`faq-${i}`}>
              <AccordionTrigger className="text-left font-playfair text-lg text-primary">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-base text-foreground/80 leading-relaxed">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default ServiceFAQ;