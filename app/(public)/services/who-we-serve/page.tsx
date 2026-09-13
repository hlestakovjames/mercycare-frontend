import WhoWeServeHero from "@/components/services/who-we-serve/WhoWeServeHero";
import WhoWeServeOverview from "@/components/services/who-we-serve/WhoWeServeOverview";
import WhoWeServeGroups from "@/components/services/who-we-serve/WhoWeServeGroups";
import WhoWeServeCircumstances from "@/components/services/who-we-serve/WhoWeServeCircumstances";
import WhoWeServeIndividual from "@/components/services/who-we-serve/WhoWeServeIndividual";
import WhoWeServeFamily from "@/components/services/who-we-serve/WhoWeServeFamily";
import WhoWeServeFit from "@/components/services/who-we-serve/WhoWeServeFit";
import WhoWeServeCTA from "@/components/services/who-we-serve/WhoWeServeCTA";

export default function WhoWeServePage() {
  return (
    <main>
      <WhoWeServeHero />
      <WhoWeServeOverview />
      <WhoWeServeGroups />
      <WhoWeServeCircumstances />
      <WhoWeServeIndividual />
      <WhoWeServeFamily />
      <WhoWeServeFit />
      <WhoWeServeCTA />
    </main>
  );
}
