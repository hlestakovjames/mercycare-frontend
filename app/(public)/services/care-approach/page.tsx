import CareApproachHero from "@/components/services/care-approach/CareApproachHero";
import CareApproachOverview from "@/components/services/care-approach/CareApproachOverview";
import CareApproachPrinciples from "@/components/services/care-approach/CareApproachPrinciples";
import CareApproachIndividual from "@/components/services/care-approach/CareApproachIndividual";
import CareApproachFamily from "@/components/services/care-approach/CareApproachFamily";
import CareApproachCoordination from "@/components/services/care-approach/CareApproachCoordination";
import CareApproachBoundaries from "@/components/services/care-approach/CareApproachBoundaries";
import CareApproachCTA from "@/components/services/care-approach/CareApproachCTA";

export default function CareApproachPage() {
  return (
    <main>
      <CareApproachHero />
      <CareApproachOverview />
      <CareApproachPrinciples />
      <CareApproachIndividual />
      <CareApproachFamily />
      <CareApproachCoordination />
      <CareApproachBoundaries />
      <CareApproachCTA />
    </main>
  );
}
