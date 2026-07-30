import { Link } from "react-router-dom";
import { ArrowRight, Check, ShieldCheck, Star } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";
import { trackConsultation } from "@/lib/analytics/events";

const highlights = [
  "Delhi High Court Advocate",
  "International Client Support",
  "10+ Years of Experience",
  "Pan-India Legal Services",
];

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative bg-ivory pt-28 pb-16 md:pt-32 md:pb-24 overflow-hidden"
    >
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <p className="text-gold font-semibold tracking-[0.2em] text-xs md:text-sm uppercase mb-5">
              Expert Legal Care. Compassionate Support.
            </p>
            <h1 className="font-playfair text-4xl md:text-5xl xl:text-6xl font-bold text-primary leading-[1.1] mb-6">
              Trusted Legal Guidance for IVF, Surrogacy, ART &amp; PC-PNDT
            </h1>
            <div className="h-[3px] w-20 bg-gradient-gold mb-6" />
            <p className="text-base md:text-lg text-muted-foreground max-w-xl mb-8 leading-relaxed">
              Empowering intended parents, fertility clinics and international families
              with reliable legal solutions under India&apos;s evolving reproductive
              healthcare laws.
            </p>

            <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3 mb-9 max-w-xl">
              {highlights.map((h) => (
                <li key={h} className="flex items-center gap-2 text-sm text-foreground">
                  <span className="w-5 h-5 rounded-full border border-gold flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-gold" />
                  </span>
                  {h}
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                onClick={() => trackConsultation("hero")}
                className="bg-gradient-gold px-7 py-3.5 rounded-md text-primary font-bold text-center shadow-gold hover:opacity-90 hover:scale-[1.02] transition-all"
              >
                Book Consultation
              </Link>
              <Link
                to="/services"
                className="border border-primary/25 px-7 py-3.5 rounded-md text-primary font-semibold text-center hover:border-gold hover:text-gold transition-all inline-flex items-center justify-center gap-2"
              >
                Explore Services <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="flex items-center gap-3 mt-8">
              <div className="flex gap-0.5" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">
                Trusted by families and clinics across India &amp; abroad
              </span>
            </div>
          </div>

          <div className="relative animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <img
              src={heroBackground}
              alt="Advocate Barkha Dwivedi — legal services for IVF, Surrogacy, ART and PC-PNDT matters"
              width="1920"
              height="1080"
              loading="eager"
              decoding="async"
              fetchPriority="high"
              className="w-full h-[320px] md:h-[520px] object-cover rounded-lg shadow-elegant"
            />
            <div className="hidden md:block absolute -bottom-8 -left-8 bg-card border border-border rounded-lg shadow-elegant p-6 max-w-[260px]">
              <ShieldCheck className="w-6 h-6 text-gold mb-3" />
              <h2 className="font-playfair text-lg font-semibold text-primary mb-1.5">
                Your Legal Partner in Every Step
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Confidential. Compassionate. Committed to your journey.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
