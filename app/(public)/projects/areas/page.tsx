import ProjectAreasHero from "@/components/projects/areas/ProjectAreasHero";
import ProjectAreasOverview from "@/components/projects/areas/ProjectAreasOverview";
import ProjectAreaDirectory from "@/components/projects/areas/ProjectAreaDirectory";
import ProjectAreasConnection from "@/components/projects/areas/ProjectAreasConnection";
import ProjectAreasCTA from "@/components/projects/areas/ProjectAreasCTA";

export default function ProjectAreasPage() {
  return (
    <>
      <ProjectAreasHero />
      <ProjectAreasOverview />
      <ProjectAreaDirectory />
      <ProjectAreasConnection />
      <ProjectAreasCTA />
    </>
  );
}
