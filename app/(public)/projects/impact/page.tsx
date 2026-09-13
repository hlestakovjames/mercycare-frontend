import ImpactHero from "@/components/projects/impact/ImpactHero";
import ImpactOverview from "@/components/projects/impact/ImpactOverview";
import ImpactAreas from "@/components/projects/impact/ImpactAreas";
import ImpactMeasurement from "@/components/projects/impact/ImpactMeasurement";
import ImpactStories from "@/components/projects/impact/ImpactStories";
import ImpactContinuousLearning from "@/components/projects/impact/ImpactContinuousLearning";
import ImpactCTA from "@/components/projects/impact/ImpactCTA";

export default function ProjectsImpactPage() {
  return (
    <>
      <ImpactHero />
      <ImpactOverview />
      <ImpactAreas />
      <ImpactMeasurement />
      <ImpactStories />
      <ImpactContinuousLearning />
      <ImpactCTA />
    </>
  );
}
