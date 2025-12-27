import { ContactFAQ } from "@/components/ContactFaq";
import { CTAPricing } from "@/components/Cta";
import { FrictionlessExperience } from "@/components/Friction";
import { Hero } from "@/components/Hero";
import { ProductOverview } from "@/components/ProductOverview";
import { SmartHardware } from "@/components/Smart";
import { VMSAnalytics } from "@/components/Vms";



export default function Home() {
  return (
    <>
      <Hero/>
      <ProductOverview/>
      <FrictionlessExperience/>
      <SmartHardware/>
      <VMSAnalytics/>
      <CTAPricing/>
      <ContactFAQ/>
    </>
  );
}