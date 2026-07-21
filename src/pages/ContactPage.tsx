import SEO from "@/components/SEO";
import Contact from "@/components/Contact";
import LegalQueryForm from "@/components/LegalQueryForm";
import Breadcrumbs from "@/components/Breadcrumbs";
import { buildBreadcrumbSchema } from "@/lib/seo";

const ContactPage = () => {
  const crumbs = [
    { name: "Home", slug: "/" },
    { name: "Contact", slug: "/contact" },
  ];
  return (
    <>
      <SEO
        title="Contact Advocate Barkha Dwivedi | Chamber & Consultation"
        description="Contact Advocate Barkha Dwivedi — Chamber at Rohini Court Complex, Delhi. Call or WhatsApp +91 8392931025 or email infertilitylegalsolutions@gmail.com."
        path="/contact"
        keywords="contact Barkha Dwivedi, IVF lawyer Delhi contact, Rohini Court advocate, book consultation IVF surrogacy lawyer"
        jsonLd={[buildBreadcrumbSchema(crumbs)]}
      />
      <div className="pt-24 bg-gradient-to-br from-primary via-navy to-primary">
        <div className="container mx-auto px-6 max-w-6xl pb-4">
          <div className="text-ivory/80">
            <Breadcrumbs items={crumbs} />
          </div>
        </div>
      </div>
      <Contact />
      <LegalQueryForm />
    </>
  );
};

export default ContactPage;