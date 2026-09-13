import ProjectHero from "@/components/projects/tuko-pamoja/ProjectHero";
import ProjectOverview from "@/components/projects/tuko-pamoja/ProjectOverview";
import ProjectObjectives from "@/components/projects/tuko-pamoja/ProjectObjectives";
import ProjectActivities from "@/components/projects/tuko-pamoja/ProjectActivities";
import ProjectHowItWorks from "@/components/projects/tuko-pamoja/ProjectHowItWorks";
import ProjectSupport from "@/components/projects/tuko-pamoja/ProjectSupport";
import ProjectImpact from "@/components/projects/tuko-pamoja/ProjectImpact";
import ProjectParticipation from "@/components/projects/tuko-pamoja/ProjectParticipation";
import ProjectCTA from "@/components/projects/tuko-pamoja/ProjectCTA";

export default function TukoPamojaProjectPage() {
  return (
    <>
      <ProjectHero />
      <ProjectOverview />
      <ProjectObjectives />
      <ProjectActivities />
      <ProjectHowItWorks />
      <ProjectSupport />
      <ProjectImpact />
      <ProjectParticipation />
      <ProjectCTA />
    </>
  );
}
