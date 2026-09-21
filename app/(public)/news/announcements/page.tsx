import AnnouncementsHero from "@/components/news/announcements/AnnouncementsHero";
import AnnouncementsIntro from "@/components/news/announcements/AnnouncementsIntro";
import AnnouncementsAreas from "@/components/news/announcements/AnnouncementsAreas";
import AnnouncementsNotice from "@/components/news/announcements/AnnouncementsNotice";
import AnnouncementsGuidance from "@/components/news/announcements/AnnouncementsGuidance";

export default function AnnouncementsPage() {
  return (
    <>
      <AnnouncementsHero />
      <AnnouncementsIntro />
      <AnnouncementsAreas />
      <AnnouncementsNotice />
      <AnnouncementsGuidance />
    </>
  );
}
