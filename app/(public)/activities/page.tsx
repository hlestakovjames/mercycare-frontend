import ActivitiesOverviewArchive from "@/components/activities/overview/ActivitiesOverviewArchive";
import ActivitiesOverviewAreas from "@/components/activities/overview/ActivitiesOverviewAreas";
import ActivitiesOverviewGuidance from "@/components/activities/overview/ActivitiesOverviewGuidance";
import ActivitiesOverviewHero from "@/components/activities/overview/ActivitiesOverviewHero";
import ActivitiesOverviewIntro from "@/components/activities/overview/ActivitiesOverviewIntro";
import ActivitiesOverviewLifecycle from "@/components/activities/overview/ActivitiesOverviewLifecycle";
import ActivitiesOverviewParticipation from "@/components/activities/overview/ActivitiesOverviewParticipation";

export default function ActivitiesPage() {
  return (
    <>
      <ActivitiesOverviewHero />
      <ActivitiesOverviewIntro />
      <ActivitiesOverviewAreas />
      <ActivitiesOverviewLifecycle />
      <ActivitiesOverviewArchive />
      <ActivitiesOverviewParticipation />
      <ActivitiesOverviewGuidance />
    </>
  );
}
