import ServicePageTemplate from "@/components/ServicePageTemplate";
import { getService } from "@/content/services";
const s = getService("surrogacy-law")!;
const Page = () => <ServicePageTemplate service={s} />;
export default Page;