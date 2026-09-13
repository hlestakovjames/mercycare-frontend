import HealthWellnessEventsHero from "@/components/events/health-wellness/HealthWellnessEventsHero";
import HealthWellnessEventsIntro from "@/components/events/health-wellness/HealthWellnessEventsIntro";
import HealthWellnessEventsDirectory from "@/components/events/health-wellness/HealthWellnessEventsDirectory";
import HealthWellnessEventsThemes from "@/components/events/health-wellness/HealthWellnessEventsThemes";
import HealthWellnessEventsRegistration from "@/components/events/health-wellness/HealthWellnessEventsRegistration";
import HealthWellnessEventsGuidance from "@/components/events/health-wellness/HealthWellnessEventsGuidance";
import HealthWellnessEventsCTA from "@/components/events/health-wellness/HealthWellnessEventsCTA";

export default function HealthWellnessEventsPage() {
  return (
    <>
      <HealthWellnessEventsHero />
      <HealthWellnessEventsIntro />
      <HealthWellnessEventsDirectory />
      <HealthWellnessEventsThemes />
      <HealthWellnessEventsRegistration />
      <HealthWellnessEventsGuidance />
      <HealthWellnessEventsCTA />
    </>
  );
}
