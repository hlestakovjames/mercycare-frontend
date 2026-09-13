import QualitySafetyHero from "@/components/services/quality-safety/QualitySafetyHero";
import QualitySafetyOverview from "@/components/services/quality-safety/QualitySafetyOverview";
import QualitySafetyPrinciples from "@/components/services/quality-safety/QualitySafetyPrinciples";
import QualitySafetyPractices from "@/components/services/quality-safety/QualitySafetyPractices";
import QualitySafetyCommunication from "@/components/services/quality-safety/QualitySafetyCommunication";
import QualitySafetyBoundaries from "@/components/services/quality-safety/QualitySafetyBoundaries";
import QualitySafetyImprovement from "@/components/services/quality-safety/QualitySafetyImprovement";
import QualitySafetyCTA from "@/components/services/quality-safety/QualitySafetyCTA";

export default function QualitySafetyPage() {
  return (
    <>
      <QualitySafetyHero />
      <QualitySafetyOverview />
      <QualitySafetyPrinciples />
      <QualitySafetyPractices />
      <QualitySafetyCommunication />
      <QualitySafetyBoundaries />
      <QualitySafetyImprovement />
      <QualitySafetyCTA />
    </>
  );
}
