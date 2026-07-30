import { Link } from "react-router-dom";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import Logo from "@/components/Logo";
import { SITE, TEL_URL, MAILTO_URL } from "@/content/site";

const quickLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/services", label: "Practice Areas" },
  { to: "/legal-acts", label: "Legal Acts" },
  { to: "/blog", label: "Blog" },
  { to: "/associated-centers", label: "Associated Centers" },
  { to: "/contact", label: "Contact Us" },
];

const practiceLinks = [
  { to: "/services/surrogacy-law", label: "Surrogacy Law" },
  { to: "/services/ivf-legal-services", label: "IVF & ART Law" },
  { to: "/services/foreign-intended-parents", label: "Foreign Intended Parents" },
  { to: "/services/pc-pndt-compliance", label: "PC-PNDT Compliance" },
  { to: "/services/art-act-compliance", label: "ART Act Compliance" },
];

const Footer = () => (
  <footer className="bg-gradient-hero text-primary-foreground pt-14 pb-8">
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <Logo className="mb-5" />
          <p className="text-sm text-primary-foreground/70 leading-relaxed">
            Expert legal solutions for infertility and reproductive healthcare matters —
            handled with compassion and complete confidentiality.
          </p>
        </div>

        <div>
          <h2 className="font-playfair text-lg font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2.5">
            {quickLinks.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="text-sm text-primary-foreground/70 hover:text-gold transition-colors"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-playfair text-lg font-semibold mb-4">Practice Areas</h2>
          <ul className="space-y-2.5">
            {practiceLinks.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="text-sm text-primary-foreground/70 hover:text-gold transition-colors"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-playfair text-lg font-semibold mb-4">Contact Info</h2>
          <ul className="space-y-3.5 text-sm text-primary-foreground/70">
            <li className="flex gap-3">
              <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
              <span>{SITE.person.chamber}</span>
            </li>
            <li className="flex gap-3">
              <Phone className="w-4 h-4 text-gold shrink-0 mt-0.5" />
              <a href={TEL_URL} className="hover:text-gold transition-colors">
                {SITE.person.phone}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="w-4 h-4 text-gold shrink-0 mt-0.5" />
              <a href={MAILTO_URL} className="hover:text-gold transition-colors break-all">
                {SITE.person.email}
              </a>
            </li>
            <li className="flex gap-3">
              <Clock className="w-4 h-4 text-gold shrink-0 mt-0.5" />
              <span>Mon - Sat: 10:00 AM - 06:00 PM</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="h-px bg-primary-foreground/15 my-9" />

      <div className="space-y-4 text-center">
        <p className="text-xs text-primary-foreground/60 max-w-3xl mx-auto italic">
          This website is for informational purposes only and does not constitute legal
          advice or solicitation, in compliance with Bar Council of India guidelines on
          advertising.
        </p>
        <p className="text-xs text-primary-foreground/60">
          © {new Date().getFullYear()} {SITE.name} | {SITE.person.name}. All Rights Reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
