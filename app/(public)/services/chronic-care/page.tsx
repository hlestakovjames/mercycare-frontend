import ChronicCareHero from "@/components/services/chronic-care/ChronicCareHero";
import ChronicCareOverview from "@/components/services/chronic-care/ChronicCareOverview";
import ChronicCareSupport from "@/components/services/chronic-care/ChronicCareSupport";
import ChronicCareContinuity from "@/components/services/chronic-care/ChronicCareContinuity";
import ChronicCareFamily from "@/components/services/chronic-care/ChronicCareFamily";
import ChronicCareSafety from "@/components/services/chronic-care/ChronicCareSafety";
import ChronicCareCTA from "@/components/services/chronic-care/ChronicCareCTA";

export default function ChronicCarePage() {
  return (
    <main>
      <ChronicCareHero />
      <ChronicCareOverview />
      <ChronicCareSupport />
      <ChronicCareContinuity />
      <ChronicCareFamily />
      <ChronicCareSafety />
      <ChronicCareCTA />
    </main>
  );
}
