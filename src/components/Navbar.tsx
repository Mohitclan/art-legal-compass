import { useState, useEffect } from "react";
import { Scale } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      role="banner"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-primary/95 backdrop-blur-sm shadow-elegant"
          : "bg-transparent"
      }`}
    >
      <nav aria-label="Primary">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollToSection("hero")}
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 bg-gradient-gold rounded-full flex items-center justify-center shadow-gold">
              <Scale className="w-5 h-5 text-primary" />
            </div>
            <span className="font-playfair font-semibold text-lg text-primary-foreground group-hover:text-gold transition-colors">
              Infertility Legal Solutions
            </span>
          </button>

          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-primary-foreground hover:text-gold transition-colors font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("practice-areas")}
              className="text-primary-foreground hover:text-gold transition-colors font-medium"
            >
              Practice Areas
            </button>
            <button
              onClick={() => scrollToSection("legal-acts")}
              className="text-primary-foreground hover:text-gold transition-colors font-medium"
            >
              Legal Acts
            </button>
            <button
              onClick={() => scrollToSection("ivf-centers")}
              className="text-primary-foreground hover:text-gold transition-colors font-medium"
            >
              Associated Centers
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-gradient-gold px-6 py-2 rounded-md text-primary font-semibold hover:opacity-90 transition-all shadow-gold"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
      </nav>
    </header>
  );
};

export default Navbar;
