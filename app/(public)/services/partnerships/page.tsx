import PartnershipsHero from "@/components/services/partnerships/PartnershipsHero";
import PartnershipsOverview from "@/components/services/partnerships/PartnershipsOverview";
import PartnershipsGroups from "@/components/services/partnerships/PartnershipsGroups";
import PartnershipsPrinciples from "@/components/services/partnerships/PartnershipsPrinciples";
import PartnershipsHealthcare from "@/components/services/partnerships/PartnershipsHealthcare";
import PartnershipsCommunity from "@/components/services/partnerships/PartnershipsCommunity";
import PartnershipsProcess from "@/components/services/partnerships/PartnershipsProcess";
import PartnershipsBoundaries from "@/components/services/partnerships/PartnershipsBoundaries";
import PartnershipsCTA from "@/components/services/partnerships/PartnershipsCTA";

export default function PartnershipsPage() {
  return (
    <>
      <PartnershipsHero />
      <PartnershipsOverview />
      <PartnershipsGroups />
      <PartnershipsPrinciples />
      <PartnershipsHealthcare />
      <PartnershipsCommunity />
      <PartnershipsProcess />
      <PartnershipsBoundaries />
      <PartnershipsCTA />
    </>
  );
}
