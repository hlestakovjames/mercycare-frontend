import HealthWellnessActivityAreas from "@/components/activities/health-wellness/HealthWellnessActivityAreas";
import HealthWellnessActivitiesHero from "@/components/activities/health-wellness/HealthWellnessActivitiesHero";
import HealthWellnessActivitiesIntro from "@/components/activities/health-wellness/HealthWellnessActivitiesIntro";
import HealthWellnessGuidance from "@/components/activities/health-wellness/HealthWellnessGuidance";
import HealthWellnessParticipation from "@/components/activities/health-wellness/HealthWellnessParticipation";

export default function HealthWellnessActivitiesPage() {
  return (
    <>
      <HealthWellnessActivitiesHero />
      <HealthWellnessActivitiesIntro />
      <HealthWellnessActivityAreas />
      <HealthWellnessParticipation />
      <HealthWellnessGuidance />
    </>
  );
}
