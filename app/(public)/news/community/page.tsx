import CommunityNewsHero from "@/components/news/community/CommunityNewsHero";
import CommunityNewsIntro from "@/components/news/community/CommunityNewsIntro";
import CommunityNewsAreas from "@/components/news/community/CommunityNewsAreas";
import CommunityNewsUpdates from "@/components/news/community/CommunityNewsUpdates";
import CommunityNewsGuidance from "@/components/news/community/CommunityNewsGuidance";

export default function CommunityNewsPage() {
  return (
    <>
      <CommunityNewsHero />
      <CommunityNewsIntro />
      <CommunityNewsAreas />
      <CommunityNewsUpdates />
      <CommunityNewsGuidance />
    </>
  );
}
