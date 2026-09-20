import FamilyCaregiverActivitiesHero from "@/components/activities/family-caregiver/FamilyCaregiverActivitiesHero";
import FamilyCaregiverActivitiesIntro from "@/components/activities/family-caregiver/FamilyCaregiverActivitiesIntro";
import FamilyCaregiverActivityAreas from "@/components/activities/family-caregiver/FamilyCaregiverActivityAreas";
import FamilyCaregiverGuidance from "@/components/activities/family-caregiver/FamilyCaregiverGuidance";
import FamilyCaregiverParticipation from "@/components/activities/family-caregiver/FamilyCaregiverParticipation";
import FamilyCaregiverWellbeing from "@/components/activities/family-caregiver/FamilyCaregiverWellbeing";

export default function FamilyCaregiverActivitiesPage() {
  return (
    <>
      <FamilyCaregiverActivitiesHero />
      <FamilyCaregiverActivitiesIntro />
      <FamilyCaregiverActivityAreas />
      <FamilyCaregiverWellbeing />
      <FamilyCaregiverParticipation />
      <FamilyCaregiverGuidance />
    </>
  );
}
