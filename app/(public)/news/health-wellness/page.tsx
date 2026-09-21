import HealthWellnessNewsHero from "@/components/news/health-wellness/HealthWellnessNewsHero";
import HealthWellnessNewsIntro from "@/components/news/health-wellness/HealthWellnessNewsIntro";
import HealthWellnessNewsAreas from "@/components/news/health-wellness/HealthWellnessNewsAreas";
import HealthWellnessNewsStories from "@/components/news/health-wellness/HealthWellnessNewsStories";
import HealthWellnessNewsGuidance from "@/components/news/health-wellness/HealthWellnessNewsGuidance";

export default function HealthWellnessNewsPage() {
  return (
    <>
      <HealthWellnessNewsHero />
      <HealthWellnessNewsIntro />
      <HealthWellnessNewsAreas />
      <HealthWellnessNewsStories />
      <HealthWellnessNewsGuidance />
    </>
  );
}
