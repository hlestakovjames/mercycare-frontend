import ServiceAreasHero from "@/components/services/areas/ServiceAreasHero";
import ServiceAreasOverview from "@/components/services/areas/ServiceAreasOverview";
import ServiceAreasApproach from "@/components/services/areas/ServiceAreasApproach";
import ServiceAreasConnection from "@/components/services/areas/ServiceAreasConnection";
import ServiceAreasCTA from "@/components/services/areas/ServiceAreasCTA";

export default function ServiceAreasPage() {
  return (
    <main>
      <ServiceAreasHero />
      <ServiceAreasOverview />
      <ServiceAreasApproach />
      <ServiceAreasConnection />
      <ServiceAreasCTA />
    </main>
  );
}
