import CommunityOutreachActivities from "@/components/activities/community-outreach/CommunityOutreachActivities";
import CommunityOutreachGuidance from "@/components/activities/community-outreach/CommunityOutreachGuidance";
import CommunityOutreachHero from "@/components/activities/community-outreach/CommunityOutreachHero";
import CommunityOutreachIntro from "@/components/activities/community-outreach/CommunityOutreachIntro";
import CommunityOutreachParticipation from "@/components/activities/community-outreach/CommunityOutreachParticipation";

export default function CommunityOutreachPage() {
  return (
    <>
      <CommunityOutreachHero />
      <CommunityOutreachIntro />
      <CommunityOutreachActivities />
      <CommunityOutreachParticipation />
      <CommunityOutreachGuidance />
    </>
  );
}
