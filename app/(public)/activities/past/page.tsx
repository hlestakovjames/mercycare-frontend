import PastActivitiesArchive from "@/components/activities/past/PastActivitiesArchive";
import PastActivitiesHero from "@/components/activities/past/PastActivitiesHero";
import PastActivitiesHighlights from "@/components/activities/past/PastActivitiesHighlights";
import PastActivitiesIntro from "@/components/activities/past/PastActivitiesIntro";
import PastActivitiesReflection from "@/components/activities/past/PastActivitiesReflection";

export default function PastActivitiesPage() {
  return (
    <>
      <PastActivitiesHero />
      <PastActivitiesIntro />
      <PastActivitiesArchive />
      <PastActivitiesHighlights />
      <PastActivitiesReflection />
    </>
  );
}
