import ServiceHero from "@/components/services/home-nursing/ServiceHero";
import ServiceOverview from "@/components/services/home-nursing/ServiceOverview";
import WhatWeProvide from "@/components/services/home-nursing/WhatWeProvide";
import WhoThisServiceIsFor from "@/components/services/home-nursing/WhoThisServiceIsFor";
import HowItWorks from "@/components/services/home-nursing/HowItWorks";
import WhyMercyCare from "@/components/services/home-nursing/WhyMercyCare";
import ServiceCTA from "@/components/services/home-nursing/ServiceCTA";

export default function HomeNursingPage() {
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