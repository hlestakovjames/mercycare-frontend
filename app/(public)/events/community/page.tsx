import CommunityEventsHero from "@/components/events/community/CommunityEventsHero";
import CommunityEventsIntro from "@/components/events/community/CommunityEventsIntro";
import CommunityEventsDirectory from "@/components/events/community/CommunityEventsDirectory";
import CommunityEventsParticipation from "@/components/events/community/CommunityEventsParticipation";
import CommunityEventsRegistration from "@/components/events/community/CommunityEventsRegistration";
import CommunityEventsGuidance from "@/components/events/community/CommunityEventsGuidance";
import CommunityEventsCTA from "@/components/events/community/CommunityEventsCTA";

export default function CommunityEventsPage() {
  return (
    <>
      <CommunityEventsHero />
      <CommunityEventsIntro />
      <CommunityEventsDirectory />
      <CommunityEventsParticipation />
      <CommunityEventsRegistration />
      <CommunityEventsGuidance />
      <CommunityEventsCTA />
    </>
  );
}
