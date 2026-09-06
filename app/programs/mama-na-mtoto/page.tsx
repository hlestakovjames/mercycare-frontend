import ProgramHero from "@/components/programs/mama-na-mtoto/ProgramHero";
import ProgramOverview from "@/components/programs/mama-na-mtoto/ProgramOverview";
import ProgramObjectives from "@/components/programs/mama-na-mtoto/ProgramObjectives";
import ProgramActivities from "@/components/programs/mama-na-mtoto/ProgramActivities";
import ProgramCTA from "@/components/programs/mama-na-mtoto/ProgramCTA";

export default function MamaNaMtotoPage() {
  return (
    <>
      <ProgramHero />
      <ProgramOverview />
      <ProgramObjectives />
      <ProgramActivities />
      <ProgramCTA />
    </>
  );
}