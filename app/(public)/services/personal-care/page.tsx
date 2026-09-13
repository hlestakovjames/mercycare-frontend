import PersonalCareHero from "@/components/services/personal-care/PersonalCareHero";
import PersonalCareOverview from "@/components/services/personal-care/PersonalCareOverview";
import PersonalCareSupport from "@/components/services/personal-care/PersonalCareSupport";
import PersonalCareDignity from "@/components/services/personal-care/PersonalCareDignity";
import PersonalCareFamily from "@/components/services/personal-care/PersonalCareFamily";
import PersonalCareProcess from "@/components/services/personal-care/PersonalCareProcess";
import PersonalCareSafety from "@/components/services/personal-care/PersonalCareSafety";
import PersonalCareCTA from "@/components/services/personal-care/PersonalCareCTA";

export default function PersonalCarePage() {
  return (
    <main>
      <PersonalCareHero />
      <PersonalCareOverview />
      <PersonalCareSupport />
      <PersonalCareDignity />
      <PersonalCareFamily />
      <PersonalCareProcess />
      <PersonalCareSafety />
      <PersonalCareCTA />
    </main>
  );
}
