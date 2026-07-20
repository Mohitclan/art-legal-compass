import { Link } from "react-router-dom";
import { trackCTA } from "@/lib/analytics/events";

type Props = {
  heading?: string;
  subheading?: string;
  ctaLabel?: string;
  source: string;
};

const CTASection = ({
  heading = "Speak to Advocate Barkha Dwivedi",
  subheading = "Book a consultation on IVF, Surrogacy, ART or PC-PNDT matters.",
  ctaLabel = "Request Consultation",
  source,
}: Props) => {
  return (
    <section className="bg-gradient-to-br from-primary via-navy to-primary py-16">
      <div className="container mx-auto px-6 text-center">
        <h2 className="font-playfair text-3xl md:text-4xl font-bold text-ivory mb-4">
          {heading}
        </h2>
        <p className="text-ivory/80 max-w-2xl mx-auto mb-8">{subheading}</p>
        <Link
          to="/contact"
          onClick={() => trackCTA(ctaLabel, source)}
          className="inline-block bg-gradient-gold px-8 py-4 rounded-lg text-primary font-bold text-lg hover:opacity-90 hover:scale-105 shadow-gold transition-all"
        >
          {ctaLabel}
        </Link>
      </div>
    </section>
  );
};

export default CTASection;