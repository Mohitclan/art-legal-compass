import ServicePageTemplate from "@/components/ServicePageTemplate";
import { getService } from "@/content/services";
const s = getService("art-act-compliance")!;
const Page = () => <ServicePageTemplate service={s} />;
export default Page;