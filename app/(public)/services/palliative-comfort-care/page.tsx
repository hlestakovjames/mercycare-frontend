import PalliativeComfortCareHero from "@/components/services/palliative-comfort-care/PalliativeComfortCareHero";
import PalliativeComfortCareOverview from "@/components/services/palliative-comfort-care/PalliativeComfortCareOverview";
import PalliativeComfortCareSupport from "@/components/services/palliative-comfort-care/PalliativeComfortCareSupport";
import PalliativeComfortCareDignity from "@/components/services/palliative-comfort-care/PalliativeComfortCareDignity";
import PalliativeComfortCareFamily from "@/components/services/palliative-comfort-care/PalliativeComfortCareFamily";
import PalliativeComfortCareCoordination from "@/components/services/palliative-comfort-care/PalliativeComfortCareCoordination";
import PalliativeComfortCareSafety from "@/components/services/palliative-comfort-care/PalliativeComfortCareSafety";
import PalliativeComfortCareCTA from "@/components/services/palliative-comfort-care/PalliativeComfortCareCTA";

export default function PalliativeComfortCarePage() {
  return (
    <main>
      <PalliativeComfortCareHero />
      <PalliativeComfortCareOverview />
      <PalliativeComfortCareSupport />
      <PalliativeComfortCareDignity />
      <PalliativeComfortCareFamily />
      <PalliativeComfortCareCoordination />
      <PalliativeComfortCareSafety />
      <PalliativeComfortCareCTA />
    </main>
  );
}
