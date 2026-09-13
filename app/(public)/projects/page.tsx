import ProjectsHero from "@/components/projects/ProjectsHero";
import ProjectsOverview from "@/components/projects/ProjectsOverview";
import ProjectsAreas from "@/components/projects/ProjectsAreas";
import ProjectDirectory from "@/components/projects/ProjectDirectory";
import ProjectsHowWeWork from "@/components/projects/ProjectsHowWeWork";
import ProjectsImpact from "@/components/projects/ProjectsImpact";
import ProjectsPartnerships from "@/components/projects/ProjectsPartnerships";
import ProjectsGetInvolved from "@/components/projects/ProjectsGetInvolved";
import ProjectsCTA from "@/components/projects/ProjectsCTA";

export default function ProjectsPage() {
  return (
    <main>
      <ProjectsHero />
      <ProjectsOverview />
      <ProjectsAreas />
      <ProjectDirectory />
      <ProjectsHowWeWork />
      <ProjectsImpact />
      <ProjectsPartnerships />
      <ProjectsGetInvolved />
      <ProjectsCTA />
    </main>
  );
}
