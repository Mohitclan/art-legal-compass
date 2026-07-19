import ServicePageTemplate from "@/components/ServicePageTemplate";
import { getService } from "@/content/services";
const s = getService("art-act-compliance")!;
const Page = () => <ServicePageTemplate service={s} />;
export default Page;
*** Add File: src/pages/services/PcPndtCompliancePage.tsx
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { getService } from "@/content/services";
const s = getService("pc-pndt-compliance")!;
const Page = () => <ServicePageTemplate service={s} />;
export default Page;
*** Add File: src/pages/services/ForeignIntendedParentsPage.tsx
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { getService } from "@/content/services";
const s = getService("foreign-intended-parents")!;
const Page = () => <ServicePageTemplate service={s} />;
export default Page;