import OurServicesHero from "@/components/services/our-services/OurServicesHero";
import ServiceDirectory from "@/components/services/our-services/ServiceDirectory";
import ServiceDirectoryApproach from "@/components/services/our-services/ServiceDirectoryApproach";
import ServiceDirectoryCTA from "@/components/services/our-services/ServiceDirectoryCTA";

export default function OurServicesPage() {
  return (
    <main>
      <OurServicesHero />
      <ServiceDirectory />
      <ServiceDirectoryApproach />
      <ServiceDirectoryCTA />
    </main>
  );
}
