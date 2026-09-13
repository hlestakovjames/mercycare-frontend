import HowWeWorkHero from "@/components/services/how-we-work/HowWeWorkHero";
import HowWeWorkOverview from "@/components/services/how-we-work/HowWeWorkOverview";
import HowWeWorkSteps from "@/components/services/how-we-work/HowWeWorkSteps";
import HowWeWorkCommunication from "@/components/services/how-we-work/HowWeWorkCommunication";
import HowWeWorkPersonCentered from "@/components/services/how-we-work/HowWeWorkPersonCentered";
import HowWeWorkBoundaries from "@/components/services/how-we-work/HowWeWorkBoundaries";
import HowWeWorkCTA from "@/components/services/how-we-work/HowWeWorkCTA";

export default function HowWeWorkPage() {
  return (
    <main>
      <HowWeWorkHero />
      <HowWeWorkOverview />
      <HowWeWorkSteps />
      <HowWeWorkCommunication />
      <HowWeWorkPersonCentered />
      <HowWeWorkBoundaries />
      <HowWeWorkCTA />
    </main>
  );
}
