import OurProjectsHero from "@/components/projects/our-projects/OurProjectsHero";
import OurProjectsOverview from "@/components/projects/our-projects/OurProjectsOverview";
import ProjectDirectoryCards from "@/components/projects/our-projects/ProjectDirectoryCards";
import OurProjectsRelationship from "@/components/projects/our-projects/OurProjectsRelationship";
import OurProjectsCTA from "@/components/projects/our-projects/OurProjectsCTA";

export default function OurProjectsPage() {
  return (
    <>
      <OurProjectsHero />
      <OurProjectsOverview />
      <ProjectDirectoryCards />
      <OurProjectsRelationship />
      <OurProjectsCTA />
    </>
  );
}
