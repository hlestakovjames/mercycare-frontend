import BlogProgramsProjectsHero from "@/components/blog/programs-projects/BlogProgramsProjectsHero";
import BlogProgramsProjectsIntro from "@/components/blog/programs-projects/BlogProgramsProjectsIntro";
import BlogProgramsProjectsCards from "@/components/blog/programs-projects/BlogProgramsProjectsCards";
import BlogProgramsProjectsEditorial from "@/components/blog/programs-projects/BlogProgramsProjectsEditorial";
import BlogProgramsProjectsCta from "@/components/blog/programs-projects/BlogProgramsProjectsCta";

export default function ProgramsProjectsPage() {
  return (
    <>
      <BlogProgramsProjectsHero />
      <BlogProgramsProjectsIntro />
      <BlogProgramsProjectsCards />
      <BlogProgramsProjectsEditorial />
      <BlogProgramsProjectsCta />
    </>
  );
}
