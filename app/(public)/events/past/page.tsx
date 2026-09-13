import PastEventsHero from "@/components/events/past/PastEventsHero";
import PastEventsIntro from "@/components/events/past/PastEventsIntro";
import PastEventsDirectory from "@/components/events/past/PastEventsDirectory";
import PastEventsCategories from "@/components/events/past/PastEventsCategories";
import PastEventsHighlights from "@/components/events/past/PastEventsHighlights";
import PastEventsCTA from "@/components/events/past/PastEventsCTA";

export default function PastEventsPage() {
  return (
    <>
      <PastEventsHero />
      <PastEventsIntro />
      <PastEventsDirectory />
      <PastEventsCategories />
      <PastEventsHighlights />
      <PastEventsCTA />
    </>
  );
}
