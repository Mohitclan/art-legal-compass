import ServicePageTemplate from "@/components/ServicePageTemplate";
import { getService } from "@/content/services";
const s = getService("ivf-legal-services")!;
const Page = () => <ServicePageTemplate service={s} />;
export default Page;