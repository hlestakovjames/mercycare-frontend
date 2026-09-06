import ProgramHero from "@/components/programs/tuko-pamoja/ProgramHero";
import ProgramOverview from "@/components/programs/tuko-pamoja/ProgramOverview";
import ProgramObjectives from "@/components/programs/tuko-pamoja/ProgramObjectives";
import ProgramActivities from "@/components/programs/tuko-pamoja/ProgramActivities";
import ProgramCTA from "@/components/programs/tuko-pamoja/ProgramCTA";

export default function TukoPamojaPage() {
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