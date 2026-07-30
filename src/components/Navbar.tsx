import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ChevronDown, Menu } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Logo from "@/components/Logo";
import { services } from "@/content/services";
import { trackNavClick } from "@/lib/analytics/events";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const goToSection = (id: string, label: string) => {
    trackNavClick(label, `/#${id}`);
    setMobileOpen(false);
    if (location.pathname === "/") {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate(`/#${id}`);
    }
  };

  const goHome = () => {
    trackNavClick("Home", "/");
    setMobileOpen(false);
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
    }
  };

  const linkCls =
    "text-primary-foreground hover:text-gold transition-colors font-medium";

  const mainLinks = [
    { to: "/legal-acts", label: "Legal Acts" },
    { to: "/blog", label: "Blog" },
    { to: "/associated-centers", label: "Associated Centers" },
  ];

  return (
    <header
      role="banner"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-primary/95 backdrop-blur-sm shadow-elegant" : "bg-primary/70 backdrop-blur-sm"
      }`}
    >
      <nav aria-label="Primary">
        <div className="container mx-auto px-5 md:px-6 py-3">
          <div className="flex items-center justify-between gap-4">
            <button onClick={goHome} className="group text-primary-foreground">
              <Logo className="group-hover:text-gold transition-colors" />
            </button>

            <div className="hidden lg:flex items-center gap-7">
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

              {mainLinks.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => trackNavClick(l.label, l.to)}
                  className={linkCls}
                >
                  {l.label}
                </Link>
              ))}

              <Link
                to="/contact"
                onClick={() => trackNavClick("Contact", "/contact")}
                className="bg-gradient-gold px-6 py-2 rounded-md text-primary font-semibold hover:opacity-90 transition-all shadow-gold"
              >
                Contact Us
              </Link>
            </div>

            {/* Mobile navigation */}
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger
                aria-label="Open navigation menu"
                className="lg:hidden w-11 h-11 rounded-md border border-primary-foreground/25 text-primary-foreground flex items-center justify-center"
              >
                <Menu className="w-6 h-6" />
              </SheetTrigger>
              <SheetContent side="right" className="w-[86vw] max-w-sm bg-primary text-primary-foreground border-l border-gold/20 overflow-y-auto">
                <div className="mt-2 mb-6 text-primary-foreground">
                  <Logo />
                </div>
                <div className="flex flex-col gap-1">
                  <button onClick={goHome} className="text-left py-3 border-b border-primary-foreground/10">
                    Home
                  </button>
                  <button
                    onClick={() => goToSection("about", "About")}
                    className="text-left py-3 border-b border-primary-foreground/10"
                  >
                    About
                  </button>
                  <Link
                    to="/services"
                    onClick={() => setMobileOpen(false)}
                    className="py-3 border-b border-primary-foreground/10 font-semibold text-gold"
                  >
                    Practice Areas
                  </Link>
                  {services.map((s) => (
                    <Link
                      key={s.slug}
                      to={`/services/${s.slug}`}
                      onClick={() => setMobileOpen(false)}
                      className="py-2.5 pl-4 text-sm text-primary-foreground/80 border-b border-primary-foreground/10"
                    >
                      {s.navLabel}
                    </Link>
                  ))}
                  {mainLinks.map((l) => (
                    <Link
                      key={l.to}
                      to={l.to}
                      onClick={() => setMobileOpen(false)}
                      className="py-3 border-b border-primary-foreground/10"
                    >
                      {l.label}
                    </Link>
                  ))}
                  <Link
                    to="/contact"
                    onClick={() => setMobileOpen(false)}
                    className="mt-5 bg-gradient-gold text-primary font-semibold text-center py-3 rounded-md shadow-gold"
                  >
                    Contact Us
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
