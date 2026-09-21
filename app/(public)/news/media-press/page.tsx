import MediaPressHero from "@/components/news/media-press/MediaPressHero";
import MediaPressIntro from "@/components/news/media-press/MediaPressIntro";
import MediaPressAreas from "@/components/news/media-press/MediaPressAreas";
import MediaPressCoverage from "@/components/news/media-press/MediaPressCoverage";
import MediaPressGuidance from "@/components/news/media-press/MediaPressGuidance";

export default function MediaPressPage() {
  return (
    <>
      <MediaPressHero />
      <MediaPressIntro />
      <MediaPressAreas />
      <MediaPressCoverage />
      <MediaPressGuidance />
    </>
  );
}
