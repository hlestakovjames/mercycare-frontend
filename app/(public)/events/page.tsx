import EventsOverviewHero from "@/components/events/overview/EventsOverviewHero";
import EventsOverviewIntro from "@/components/events/overview/EventsOverviewIntro";
import EventsOverviewCategories from "@/components/events/overview/EventsOverviewCategories";
import EventsOverviewDiscovery from "@/components/events/overview/EventsOverviewDiscovery";
import EventsOverviewParticipation from "@/components/events/overview/EventsOverviewParticipation";
import EventsOverviewRegistration from "@/components/events/overview/EventsOverviewRegistration";
import EventsOverviewGuidance from "@/components/events/overview/EventsOverviewGuidance";
import EventsOverviewCTA from "@/components/events/overview/EventsOverviewCTA";

export default function EventsOverviewPage() {
  return (
    <>
      <EventsOverviewHero />
      <EventsOverviewIntro />
      <EventsOverviewCategories />
      <EventsOverviewDiscovery />
      <EventsOverviewParticipation />
      <EventsOverviewRegistration />
      <EventsOverviewGuidance />
      <EventsOverviewCTA />
    </>
  );
}
