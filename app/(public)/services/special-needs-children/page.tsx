import ServiceHero from "@/components/services/special-needs-children/ServiceHero";
import ServiceOverview from "@/components/services/special-needs-children/ServiceOverview";
import WhatWeProvide from "@/components/services/special-needs-children/WhatWeProvide";
import WhoThisServiceIsFor from "@/components/services/special-needs-children/WhoThisServiceIsFor";
import HowItWorks from "@/components/services/special-needs-children/HowItWorks";
import WhyMercyCare from "@/components/services/special-needs-children/WhyMercyCare";
import ServiceCTA from "@/components/services/special-needs-children/ServiceCTA";

export default function SpecialNeedsChildrenPage() {
  return (
    <main>
      <ServiceHero />
      <ServiceOverview />
      <WhatWeProvide />
      <WhoThisServiceIsFor />
      <HowItWorks />
      <WhyMercyCare />
      <ServiceCTA />
    </main>
  );
}