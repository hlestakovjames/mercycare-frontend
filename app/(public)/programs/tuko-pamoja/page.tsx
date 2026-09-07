import ProgramHero from "@/components/programs/tuko-pamoja/ProgramHero";
import ProgramOverview from "@/components/programs/tuko-pamoja/ProgramOverview";
import ProgramObjectives from "@/components/programs/tuko-pamoja/ProgramObjectives";
import ProgramActivities from "@/components/programs/tuko-pamoja/ProgramActivities";
import ProgramHowItWorks from "@/components/programs/tuko-pamoja/ProgramHowItWorks";
import ProgramSupport from "@/components/programs/tuko-pamoja/ProgramSupport";
import ProgramImpact from "@/components/programs/tuko-pamoja/ProgramImpact";
import ProgramParticipation from "@/components/programs/tuko-pamoja/ProgramParticipation";
import ProgramCTA from "@/components/programs/tuko-pamoja/ProgramCTA";

export default function TukoPamojaPage() {
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
      <ProgramCTA />
    </>
  );
}