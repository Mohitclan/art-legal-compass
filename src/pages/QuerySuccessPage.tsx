import { Link } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";
import SEO from "@/components/SEO";

const QuerySuccessPage = () => {
  return (
    <>
      <SEO
        title="Query Received | Infertility Legal Solutions"
        description="Thank you for contacting Advocate Barkha Dwivedi. Your legal query has been received."
        path="/query-success"
        robots="noindex, follow"
      />
      <section className="min-h-[70vh] flex items-center justify-center py-24 bg-secondary/30">
        <div className="container mx-auto px-6 max-w-2xl text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-gold shadow-gold mb-6">
            <CheckCircle2 className="w-8 h-8 text-primary" />
          </div>
          <h1 className="font-playfair text-3xl md:text-4xl font-bold text-primary mb-4">
            Thank you for your query
          </h1>
          <p className="text-muted-foreground text-lg mb-8">
            Our legal team has received your message and will contact you as soon as possible.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="h-11 inline-flex items-center justify-center px-6 rounded-md bg-gradient-gold text-primary font-semibold shadow-gold hover:opacity-90 transition-all"
            >
              Return Home
            </Link>
            <Link
              to="/contact"
              className="h-11 inline-flex items-center justify-center px-6 rounded-md border border-border text-primary font-semibold hover:border-gold transition-all"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default QuerySuccessPage;