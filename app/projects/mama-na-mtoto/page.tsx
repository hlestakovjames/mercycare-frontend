import ProjectHero from "@/components/projects/mama-na-mtoto/ProjectHero";
import ProjectOverview from "@/components/projects/mama-na-mtoto/ProjectOverview";
import ProjectObjectives from "@/components/projects/mama-na-mtoto/ProjectObjectives";
import ProjectActivities from "@/components/projects/mama-na-mtoto/ProjectActivities";
import ProjectImpact from "@/components/projects/mama-na-mtoto/ProjectImpact";
import ProjectUpdates from "@/components/projects/mama-na-mtoto/ProjectUpdates";
import ProjectGallery from "@/components/projects/mama-na-mtoto/ProjectGallery";
import ProjectCTA from "@/components/projects/mama-na-mtoto/ProjectCTA";

export default function MamaNaMtotoProjectPage() {
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