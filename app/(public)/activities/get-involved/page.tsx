import ActivitiesGetInvolvedExpectations from "@/components/activities/get-involved/ActivitiesGetInvolvedExpectations";
import ActivitiesGetInvolvedGuidance from "@/components/activities/get-involved/ActivitiesGetInvolvedGuidance";
import ActivitiesGetInvolvedHero from "@/components/activities/get-involved/ActivitiesGetInvolvedHero";
import ActivitiesGetInvolvedIntro from "@/components/activities/get-involved/ActivitiesGetInvolvedIntro";
import ActivitiesGetInvolvedOptions from "@/components/activities/get-involved/ActivitiesGetInvolvedOptions";

export default function ActivitiesGetInvolvedPage() {
  return (
    <>
      <ActivitiesGetInvolvedHero />
      <ActivitiesGetInvolvedIntro />
      <ActivitiesGetInvolvedOptions />
      <ActivitiesGetInvolvedExpectations />
      <ActivitiesGetInvolvedGuidance />
    </>
  );
}
