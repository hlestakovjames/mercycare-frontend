import HomeNursingHero from "@/components/services/home-nursing/HomeNursingHero";
import HomeNursingOverview from "@/components/services/home-nursing/HomeNursingOverview";
import HomeNursingSupport from "@/components/services/home-nursing/HomeNursingSupport";
import HomeNursingWhoWeServe from "@/components/services/home-nursing/HomeNursingWhoWeServe";
import HomeNursingProcess from "@/components/services/home-nursing/HomeNursingProcess";
import HomeNursingFamily from "@/components/services/home-nursing/HomeNursingFamily";
import HomeNursingPrinciples from "@/components/services/home-nursing/HomeNursingPrinciples";
import HomeNursingCTA from "@/components/services/home-nursing/HomeNursingCTA";

export default function HomeNursingPage() {
  return (
    <main>
      <HomeNursingHero />
      <HomeNursingOverview />
      <HomeNursingSupport />
      <HomeNursingWhoWeServe />
      <HomeNursingProcess />
      <HomeNursingFamily />
      <HomeNursingPrinciples />
      <HomeNursingCTA />
    </main>
  );
}
