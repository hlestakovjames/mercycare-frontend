import SeniorElderlyCareHero from "@/components/services/senior-elderly-care/SeniorElderlyCareHero";
import SeniorElderlyCareOverview from "@/components/services/senior-elderly-care/SeniorElderlyCareOverview";
import SeniorElderlyCareSupport from "@/components/services/senior-elderly-care/SeniorElderlyCareSupport";
import SeniorElderlyCareIndependence from "@/components/services/senior-elderly-care/SeniorElderlyCareIndependence";
import SeniorElderlyCareFamily from "@/components/services/senior-elderly-care/SeniorElderlyCareFamily";
import SeniorElderlyCareApproach from "@/components/services/senior-elderly-care/SeniorElderlyCareApproach";
import SeniorElderlyCareCTA from "@/components/services/senior-elderly-care/SeniorElderlyCareCTA";

export default function SeniorElderlyCarePage() {
  return (
    <main>
      <SeniorElderlyCareHero />
      <SeniorElderlyCareOverview />
      <SeniorElderlyCareSupport />
      <SeniorElderlyCareIndependence />
      <SeniorElderlyCareFamily />
      <SeniorElderlyCareApproach />
      <SeniorElderlyCareCTA />
    </main>
  );
}
