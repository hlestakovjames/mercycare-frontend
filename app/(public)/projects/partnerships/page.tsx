import PartnershipsHero from "@/components/projects/partnerships/PartnershipsHero";
import PartnershipsOverview from "@/components/projects/partnerships/PartnershipsOverview";
import PartnershipTypes from "@/components/projects/partnerships/PartnershipTypes";
import PartnershipPrinciples from "@/components/projects/partnerships/PartnershipPrinciples";
import PartnershipOpportunities from "@/components/projects/partnerships/PartnershipOpportunities";
import PartnershipProcess from "@/components/projects/partnerships/PartnershipProcess";
import PartnershipCTA from "@/components/projects/partnerships/PartnershipCTA";

export default function ProjectsPartnershipsPage() {
  return (
    <>
      <PartnershipsHero />
      <PartnershipsOverview />
      <PartnershipTypes />
      <PartnershipPrinciples />
      <PartnershipOpportunities />
      <PartnershipProcess />
      <PartnershipCTA />
    </>
  );
}
