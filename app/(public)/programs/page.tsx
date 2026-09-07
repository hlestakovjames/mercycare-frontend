import ProgramsHero from "@/components/programs/ProgramsHero";
import ProgramsOverview from "@/components/programs/ProgramsOverview";
import ProgramsApproach from "@/components/programs/ProgramsApproach";
import ProgramsAreas from "@/components/programs/ProgramsAreas";
import ProgramList from "@/components/programs/ProgramList";
import ProgramsHowWeWork from "@/components/programs/ProgramsHowWeWork";
import ProgramsImpact from "@/components/programs/ProgramsImpact";
import ProgramsPartnerships from "@/components/programs/ProgramsPartnerships";
import ProgramsGetInvolved from "@/components/programs/ProgramsGetInvolved";
import ProgramsCTA from "@/components/programs/ProgramsCTA";

export default function ProgramsPage() {
  return (
    <>
      <ProgramsHero />
      <ProgramsOverview />
      <ProgramsApproach />
      <ProgramsAreas />
      <ProgramList />
      <ProgramsHowWeWork />
      <ProgramsImpact />
      <ProgramsPartnerships />
      <ProgramsGetInvolved />
      <ProgramsCTA />
    </>
  );
}