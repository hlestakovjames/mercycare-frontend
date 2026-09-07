import ProjectsHero from "@/components/projects/ProjectsHero";
import ProjectDirectory from "@/components/projects/ProjectDirectory";
import ProjectsCTA from "@/components/projects/ProjectsCTA";

export default function ProjectsPage() {
  return (
    <main>
      <ProjectsHero />
      <ProjectDirectory />
      <ProjectsCTA />
    </main>
  );
}