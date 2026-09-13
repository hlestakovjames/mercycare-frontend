import ServicesOverviewHero from "@/components/services/overview/ServicesOverviewHero";
import ServicesOverviewMeaning from "@/components/services/overview/ServicesOverviewMeaning";
import ServicesOverviewAreas from "@/components/services/overview/ServicesOverviewAreas";
import ServicesOverviewDirectory from "@/components/services/overview/ServicesOverviewDirectory";
import ServicesOverviewApproach from "@/components/services/overview/ServicesOverviewApproach";
import ServicesOverviewQuality from "@/components/services/overview/ServicesOverviewQuality";
import ServicesOverviewPartnerships from "@/components/services/overview/ServicesOverviewPartnerships";
import ServicesOverviewJourney from "@/components/services/overview/ServicesOverviewJourney";
import ServicesOverviewCTA from "@/components/services/overview/ServicesOverviewCTA";

export default function ServicesPage() {
  return (
    <>
      <ServicesOverviewHero />
      <ServicesOverviewMeaning />
      <ServicesOverviewAreas />
      <ServicesOverviewDirectory />
      <ServicesOverviewApproach />
      <ServicesOverviewQuality />
      <ServicesOverviewPartnerships />
      <ServicesOverviewJourney />
      <ServicesOverviewCTA />
    </>
  );
}
