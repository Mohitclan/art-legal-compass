import { Building2, CheckCircle } from "lucide-react";

const ivfCenters = [
  { name: "Delhi IVF", location: "Mandi House" },
  { name: "Pravi Global IVF", location: "" },
  { name: "Elantis Hospital", location: "Lajpat Nagar" },
  { name: "Advance Fertility (Dr. Ragesh Banerji)", location: "Lajpat Nagar" },
  { name: "Fertijoy", location: "Lajpat Nagar" },
  { name: "Babysoon", location: "Karol Bagh" },
];

const IVFCenters = () => {
  return (
    <section id="ivf-centers" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-primary mb-4">
              Trusted Legal Advisor To
            </h2>
            <div className="h-1 w-24 bg-gradient-gold mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground">
              Leading IVF and fertility centers across Delhi NCR
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 animate-slide-up">
            {ivfCenters.map((center, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-lg shadow-elegant hover:shadow-gold transition-all border border-border hover:border-gold group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Building2 className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-playfair text-lg font-semibold text-primary group-hover:text-gold transition-colors">
                        {center.name}
                      </h3>
                      <CheckCircle className="w-5 h-5 text-gold flex-shrink-0" />
                    </div>
                    {center.location && (
                      <p className="text-muted-foreground mt-1">{center.location}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground italic">
              Providing comprehensive legal support for compliance and certification
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IVFCenters;
