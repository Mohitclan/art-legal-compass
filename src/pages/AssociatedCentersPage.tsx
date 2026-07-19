import SEO from "@/components/SEO";
import IVFCenters from "@/components/IVFCenters";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import { buildBreadcrumbSchema } from "@/lib/seo";

const AssociatedCentersPage = () => {
  const crumbs = [
    { name: "Home", slug: "/" },
    { name: "Associated Centers", slug: "/associated-centers" },
  ];
  return (
    <>
      <SEO
        title="Associated IVF & Fertility Centers | Delhi NCR"
        description="Advocate Barkha Tiwari is trusted legal counsel to leading IVF and fertility centres across Delhi NCR — providing compliance and certification support."
        path="/associated-centers"
        keywords="IVF centres Delhi, fertility clinics Delhi NCR, ART bank Delhi, IVF legal counsel"
        jsonLd={[buildBreadcrumbSchema(crumbs)]}
      />
      <div className="pt-24">
        <div className="container mx-auto px-6 max-w-5xl">
          <Breadcrumbs items={crumbs} />
        </div>
        <IVFCenters />
      </div>
      <CTASection source="associated-centers-page" />
    </>
  );
};

export default AssociatedCentersPage;