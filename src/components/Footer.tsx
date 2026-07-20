import { Scale } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-hero text-primary-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-gold rounded-full flex items-center justify-center shadow-gold">
              <Scale className="w-5 h-5 text-primary" />
            </div>
            <span className="font-playfair font-semibold text-xl">
              Infertility Legal Solutions
            </span>
          </div>

          <div className="h-px w-64 bg-primary-foreground/20"></div>

          <div className="space-y-2">
            <p className="text-primary-foreground/90">
              © 2025 Infertility Legal Solutions | Advocate Barkha Dwivedi
            </p>
            <p className="text-primary-foreground/90">All Rights Reserved</p>
          </div>

          <div className="max-w-2xl">
            <p className="text-sm text-primary-foreground/70 italic">
              This website is for informational purposes only and does not constitute legal advice. 
              For specific legal guidance, please consult directly with the advocate.
            </p>
          </div>

          <div className="text-xs text-primary-foreground/60 pt-4">
            <p>
              In compliance with Bar Council of India guidelines on advertising and solicitation
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
