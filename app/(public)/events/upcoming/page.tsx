import UpcomingEventsHero from "@/components/events/upcoming/UpcomingEventsHero";
import UpcomingEventsIntro from "@/components/events/upcoming/UpcomingEventsIntro";
import UpcomingEventsDirectory from "@/components/events/upcoming/UpcomingEventsDirectory";
import UpcomingEventsRegistration from "@/components/events/upcoming/UpcomingEventsRegistration";
import UpcomingEventsGuidance from "@/components/events/upcoming/UpcomingEventsGuidance";
import UpcomingEventsCTA from "@/components/events/upcoming/UpcomingEventsCTA";

export default function UpcomingEventsPage() {
  return (
    <>
      <UpcomingEventsHero />
      <UpcomingEventsIntro />
      <UpcomingEventsDirectory />
      <UpcomingEventsRegistration />
      <UpcomingEventsGuidance />
      <UpcomingEventsCTA />
    </>
  );
}
