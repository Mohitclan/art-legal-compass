import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Scale, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { services } from "@/content/services";
import { trackNavClick } from "@/lib/analytics/events";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smart nav: on home, smooth-scroll to section; elsewhere, navigate to /#id.
  const goToSection = (id: string, label: string) => {
    trackNavClick(label, `/#${id}`);
    if (location.pathname === "/") {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate(`/#${id}`);
    }
  };

  const goHome = () => {
    trackNavClick("Home", "/");
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
    }
  };

  const linkCls =
    "text-primary-foreground hover:text-gold transition-colors font-medium";

  return (
    <header
      role="banner"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-primary/95 backdrop-blur-sm shadow-elegant" : "bg-transparent"
      }`}
    >
      <nav aria-label="Primary">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <button onClick={goHome} className="flex items-center gap-3 group">
              <div className="w-10 h-10 bg-gradient-gold rounded-full flex items-center justify-center shadow-gold">
                <Scale className="w-5 h-5 text-primary" />
              </div>
              <span className="font-playfair font-semibold text-lg text-primary-foreground group-hover:text-gold transition-colors">
                Infertility Legal Solutions
              </span>
            </button>

            <div className="hidden md:flex items-center gap-8">
              <button onClick={() => goToSection("about", "About")} className={linkCls}>
                About
              </button>

              <DropdownMenu>
                <DropdownMenuTrigger className={`${linkCls} flex items-center gap-1 outline-none`}>
                  Practice Areas <ChevronDown className="w-4 h-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="min-w-[240px]">
                  <DropdownMenuItem asChild>
                    <Link to="/services" onClick={() => trackNavClick("All Services", "/services")}>
                      All Practice Areas
                    </Link>
                  </DropdownMenuItem>
                  {services.map((s) => (
                    <DropdownMenuItem key={s.slug} asChild>
                      <Link
                        to={`/services/${s.slug}`}
                        onClick={() => trackNavClick(s.navLabel, `/services/${s.slug}`)}
                      >
                        {s.navLabel}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              <Link
                to="/legal-acts"
                onClick={() => trackNavClick("Legal Acts", "/legal-acts")}
                className={linkCls}
              >
                Legal Acts
              </Link>
              <Link
                to="/blog"
                onClick={() => trackNavClick("Blog", "/blog")}
                className={linkCls}
              >
                Blog
              </Link>
              <Link
                to="/associated-centers"
                onClick={() => trackNavClick("Associated Centers", "/associated-centers")}
                className={linkCls}
              >
                Associated Centers
              </Link>
              <Link
                to="/contact"
                onClick={() => trackNavClick("Contact", "/contact")}
                className="bg-gradient-gold px-6 py-2 rounded-md text-primary font-semibold hover:opacity-90 transition-all shadow-gold"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
