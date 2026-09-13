import GetInvolvedHero from "@/components/projects/get-involved/GetInvolvedHero";
import GetInvolvedOverview from "@/components/projects/get-involved/GetInvolvedOverview";
import GetInvolvedWays from "@/components/projects/get-involved/GetInvolvedWays";
import VolunteerPath from "@/components/projects/get-involved/VolunteerPath";
import ProjectSupport from "@/components/projects/get-involved/ProjectSupport";
import GetInvolvedPrinciples from "@/components/projects/get-involved/GetInvolvedPrinciples";
import GetInvolvedCTA from "@/components/projects/get-involved/GetInvolvedCTA";

export default function ProjectsGetInvolvedPage() {
  return (
    <>
      <GetInvolvedHero />
      <GetInvolvedOverview />
      <GetInvolvedWays />
      <VolunteerPath />
      <ProjectSupport />
      <GetInvolvedPrinciples />
      <GetInvolvedCTA />
    </>
  );
}
