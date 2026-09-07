import ProjectHero from "@/components/projects/tuko-pamoja/ProjectHero";
import ProjectOverview from "@/components/projects/tuko-pamoja/ProjectOverview";
import ProjectObjectives from "@/components/projects/tuko-pamoja/ProjectObjectives";
import ProjectActivities from "@/components/projects/tuko-pamoja/ProjectActivities";
import ProjectImpact from "@/components/projects/tuko-pamoja/ProjectImpact";
import ProjectUpdates from "@/components/projects/tuko-pamoja/ProjectUpdates";
import ProjectGallery from "@/components/projects/tuko-pamoja/ProjectGallery";
import ProjectCTA from "@/components/projects/tuko-pamoja/ProjectCTA";

export default function TukoPamojaProjectPage() {
  return (
    <main>
      <ProjectHero />
      <ProjectOverview />
      <ProjectObjectives />
      <ProjectActivities />
      <ProjectImpact />
      <ProjectUpdates />
      <ProjectGallery />
      <ProjectCTA />
    </main>
  );
}