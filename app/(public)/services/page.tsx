import ServicesHero from "@/components/services/ServicesHero";
import ServiceDirectory from "@/components/services/ServiceDirectory";
import ServicesWhyChoose from "@/components/services/ServicesWhyChoose";
import ServicesCareProcess from "@/components/services/ServicesCareProcess";
import ServicesCTA from "@/components/services/ServicesCTA";

export default function ServicesPage() {
  return (
    <main>
      <ServicesHero />
      <ServiceDirectory />
      <ServicesWhyChoose />
      <ServicesCareProcess />
      <ServicesCTA />
    </main>
  );
}