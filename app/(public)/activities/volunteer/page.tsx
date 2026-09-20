import VolunteerActivitiesGuidance from "@/components/activities/volunteer/VolunteerActivitiesGuidance";
import VolunteerActivitiesHero from "@/components/activities/volunteer/VolunteerActivitiesHero";
import VolunteerActivitiesIntro from "@/components/activities/volunteer/VolunteerActivitiesIntro";
import VolunteerActivityAreas from "@/components/activities/volunteer/VolunteerActivityAreas";
import VolunteerActivityExpectations from "@/components/activities/volunteer/VolunteerActivityExpectations";

export default function VolunteerActivitiesPage() {
  return (
    <>
      <VolunteerActivitiesHero />
      <VolunteerActivitiesIntro />
      <VolunteerActivityAreas />
      <VolunteerActivityExpectations />
      <VolunteerActivitiesGuidance />
    </>
  );
}
