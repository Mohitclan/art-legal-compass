import ServicePageTemplate from "@/components/ServicePageTemplate";
import { getService } from "@/content/services";
const s = getService("pc-pndt-compliance")!;
const Page = () => <ServicePageTemplate service={s} />;
export default Page;