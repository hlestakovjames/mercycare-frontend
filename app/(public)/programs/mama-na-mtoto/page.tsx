import ProgramHero from "@/components/programs/mama-na-mtoto/ProgramHero";
import ProgramOverview from "@/components/programs/mama-na-mtoto/ProgramOverview";
import ProgramObjectives from "@/components/programs/mama-na-mtoto/ProgramObjectives";
import ProgramActivities from "@/components/programs/mama-na-mtoto/ProgramActivities";
import ProgramHowItWorks from "@/components/programs/mama-na-mtoto/ProgramHowItWorks";
import ProgramSupport from "@/components/programs/mama-na-mtoto/ProgramSupport";
import ProgramImpact from "@/components/programs/mama-na-mtoto/ProgramImpact";
import ProgramParticipation from "@/components/programs/mama-na-mtoto/ProgramParticipation";
import ProgramUpdates from "@/components/programs/mama-na-mtoto/ProgramUpdates";
import ProgramCTA from "@/components/programs/mama-na-mtoto/ProgramCTA";

export default function MamaNaMtotoPage() {
  return (
    <>
      <ProgramHero />
      <ProgramOverview />
      <ProgramObjectives />
      <ProgramActivities />
      <ProgramHowItWorks />
      <ProgramSupport />
      <ProgramImpact />
      <ProgramParticipation />
      <ProgramUpdates />
      <ProgramCTA />
    </>
  );
}