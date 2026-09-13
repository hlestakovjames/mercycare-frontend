import FamilyCaregiverSupportHero from "@/components/services/family-caregiver-support/FamilyCaregiverSupportHero";
import FamilyCaregiverSupportOverview from "@/components/services/family-caregiver-support/FamilyCaregiverSupportOverview";
import FamilyCaregiverSupportAreas from "@/components/services/family-caregiver-support/FamilyCaregiverSupportAreas";
import FamilyCaregiverSupportPartnership from "@/components/services/family-caregiver-support/FamilyCaregiverSupportPartnership";
import FamilyCaregiverSupportWellbeing from "@/components/services/family-caregiver-support/FamilyCaregiverSupportWellbeing";
import FamilyCaregiverSupportApproach from "@/components/services/family-caregiver-support/FamilyCaregiverSupportApproach";
import FamilyCaregiverSupportBoundaries from "@/components/services/family-caregiver-support/FamilyCaregiverSupportBoundaries";
import FamilyCaregiverSupportCTA from "@/components/services/family-caregiver-support/FamilyCaregiverSupportCTA";

export default function FamilyCaregiverSupportPage() {
  return (
    <main>
      <FamilyCaregiverSupportHero />
      <FamilyCaregiverSupportOverview />
      <FamilyCaregiverSupportAreas />
      <FamilyCaregiverSupportPartnership />
      <FamilyCaregiverSupportWellbeing />
      <FamilyCaregiverSupportApproach />
      <FamilyCaregiverSupportBoundaries />
      <FamilyCaregiverSupportCTA />
    </main>
  );
}
