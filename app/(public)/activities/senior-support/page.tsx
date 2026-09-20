import SeniorSupportActivityAreas from "@/components/activities/senior-support/SeniorSupportActivityAreas";
import SeniorSupportActivitiesHero from "@/components/activities/senior-support/SeniorSupportActivitiesHero";
import SeniorSupportActivitiesIntro from "@/components/activities/senior-support/SeniorSupportActivitiesIntro";
import SeniorSupportFamilyCaregivers from "@/components/activities/senior-support/SeniorSupportFamilyCaregivers";
import SeniorSupportGuidance from "@/components/activities/senior-support/SeniorSupportGuidance";
import SeniorSupportParticipation from "@/components/activities/senior-support/SeniorSupportParticipation";

export default function SeniorSupportActivitiesPage() {
  return (
    <>
      <SeniorSupportActivitiesHero />
      <SeniorSupportActivitiesIntro />
      <SeniorSupportActivityAreas />
      <SeniorSupportFamilyCaregivers />
      <SeniorSupportParticipation />
      <SeniorSupportGuidance />
    </>
  );
}
