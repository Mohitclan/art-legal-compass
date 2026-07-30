import { Link } from "react-router-dom";
import { ArrowRight, Mail, Phone, PhoneCall } from "lucide-react";
import { SITE, TEL_URL, MAILTO_URL } from "@/content/site";
import { trackPhoneClick, trackCTA } from "@/lib/analytics/events";

const ContactBand = () => (
  <section className="bg-navy py-10 border-y border-gold/20">
    <div className="container mx-auto px-6">
      <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-10 justify-between text-center lg:text-left">
        <div className="flex items-center gap-4">
          <span className="w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center shrink-0">
            <PhoneCall className="w-5 h-5 text-primary" />
          </span>
          <div>
            <h2 className="font-playfair text-xl font-bold text-primary-foreground">
              Ready to Speak with an Expert?
            </h2>
            <p className="text-sm text-primary-foreground/70">
              Schedule a confidential consultation today.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-5">
          <a
            href={TEL_URL}
            onClick={() => trackPhoneClick("contact-band")}
            className="flex items-center gap-2 text-primary-foreground hover:text-gold transition-colors text-sm"
          >
            <Phone className="w-4 h-4 text-gold" /> {SITE.person.phone}
          </a>
          <a
            href={MAILTO_URL}
            className="flex items-center gap-2 text-primary-foreground hover:text-gold transition-colors text-sm break-all"
          >
            <Mail className="w-4 h-4 text-gold" /> {SITE.person.email}
          </a>
        </div>

        <Link
          to="/contact"
          onClick={() => trackCTA("Request Consultation", "contact-band")}
          className="bg-gradient-gold px-6 py-3 rounded-md text-primary font-bold shadow-gold hover:opacity-90 transition-all inline-flex items-center gap-2"
        >
          Request Consultation <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  </section>
);

export default ContactBand;
