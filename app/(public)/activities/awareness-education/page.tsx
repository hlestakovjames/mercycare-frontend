import AwarenessEducationActivityAreas from "@/components/activities/awareness-education/AwarenessEducationActivityAreas";
import AwarenessEducationGuidance from "@/components/activities/awareness-education/AwarenessEducationGuidance";
import AwarenessEducationHero from "@/components/activities/awareness-education/AwarenessEducationHero";
import AwarenessEducationIntro from "@/components/activities/awareness-education/AwarenessEducationIntro";
import AwarenessEducationParticipation from "@/components/activities/awareness-education/AwarenessEducationParticipation";

export default function AwarenessEducationPage() {
  return (
    <>
      <AwarenessEducationHero />
      <AwarenessEducationIntro />
      <AwarenessEducationActivityAreas />
      <AwarenessEducationParticipation />
      <AwarenessEducationGuidance />
    </>
  );
}
