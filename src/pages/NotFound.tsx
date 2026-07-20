import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import SEO from "@/components/SEO";
import { notFoundSchemas } from "@/lib/seo-schemas";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <>
    <SEO
      title="Page Not Found | Infertility Legal Solutions"
      description="The page you're looking for doesn't exist. Return to Infertility Legal Solutions by Advocate Barkha Dwivedi."
      path="/404"
      robots="noindex, follow"
      jsonLd={notFoundSchemas}
    />
    <div className="flex min-h-[80vh] items-center justify-center bg-background pt-24">
      <div className="text-center">
        <h1 className="mb-4 font-playfair text-5xl font-bold text-primary">404</h1>
        <p className="mb-4 text-xl text-muted-foreground">Page not found</p>
        <a href="/" className="text-gold underline hover:opacity-80">
          Return to Home
        </a>
      </div>
    </div>
    </>
  );
};

export default NotFound;
