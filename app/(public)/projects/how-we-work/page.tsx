import HowWeWorkHero from "@/components/projects/how-we-work/HowWeWorkHero";
import HowWeWorkOverview from "@/components/projects/how-we-work/HowWeWorkOverview";
import HowWeWorkProcess from "@/components/projects/how-we-work/HowWeWorkProcess";
import HowWeWorkPrinciples from "@/components/projects/how-we-work/HowWeWorkPrinciples";
import HowWeWorkSupport from "@/components/projects/how-we-work/HowWeWorkSupport";
import HowWeWorkCTA from "@/components/projects/how-we-work/HowWeWorkCTA";

export default function ProjectsHowWeWorkPage() {
  return (
    <>
      <HowWeWorkHero />
      <HowWeWorkOverview />
      <HowWeWorkProcess />
      <HowWeWorkPrinciples />
      <HowWeWorkSupport />
      <HowWeWorkCTA />
    </>
  );
}
