import ServicePageTemplate from "@/components/ServicePageTemplate";
import { getService } from "@/content/services";
const s = getService("foreign-intended-parents")!;
const Page = () => <ServicePageTemplate service={s} />;
export default Page;