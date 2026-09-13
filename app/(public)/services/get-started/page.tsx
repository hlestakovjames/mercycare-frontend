import GetStartedHero from "@/components/services/get-started/GetStartedHero";
import GetStartedOverview from "@/components/services/get-started/GetStartedOverview";
import GetStartedWhoCanContact from "@/components/services/get-started/GetStartedWhoCanContact";
import GetStartedSteps from "@/components/services/get-started/GetStartedSteps";
import GetStartedInformation from "@/components/services/get-started/GetStartedInformation";
import GetStartedNext from "@/components/services/get-started/GetStartedNext";
import GetStartedBoundaries from "@/components/services/get-started/GetStartedBoundaries";
import GetStartedCTA from "@/components/services/get-started/GetStartedCTA";

export default function GetStartedPage() {
  return (
    <>
      <GetStartedHero />
      <GetStartedOverview />
      <GetStartedWhoCanContact />
      <GetStartedSteps />
      <GetStartedInformation />
      <GetStartedNext />
      <GetStartedBoundaries />
      <GetStartedCTA />
    </>
  );
}
