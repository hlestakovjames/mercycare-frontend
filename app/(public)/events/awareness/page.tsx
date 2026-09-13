import AwarenessEventsHero from "@/components/events/awareness/AwarenessEventsHero";
import AwarenessEventsIntro from "@/components/events/awareness/AwarenessEventsIntro";
import AwarenessEventsDirectory from "@/components/events/awareness/AwarenessEventsDirectory";
import AwarenessEventsPrinciples from "@/components/events/awareness/AwarenessEventsPrinciples";
import AwarenessEventsGuidance from "@/components/events/awareness/AwarenessEventsGuidance";
import AwarenessEventsRegistration from "@/components/events/awareness/AwarenessEventsRegistration";
import AwarenessEventsCTA from "@/components/events/awareness/AwarenessEventsCTA";

export default function AwarenessEventsPage() {
  return (
    <>
      <AwarenessEventsHero />
      <AwarenessEventsIntro />
      <AwarenessEventsDirectory />
      <AwarenessEventsPrinciples />
      <AwarenessEventsGuidance />
      <AwarenessEventsRegistration />
      <AwarenessEventsCTA />
    </>
  );
}
