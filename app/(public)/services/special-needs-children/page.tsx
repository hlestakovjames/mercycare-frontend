import SpecialNeedsChildrenHero from "@/components/services/special-needs-children/SpecialNeedsChildrenHero";
import SpecialNeedsChildrenOverview from "@/components/services/special-needs-children/SpecialNeedsChildrenOverview";
import SpecialNeedsChildrenSupport from "@/components/services/special-needs-children/SpecialNeedsChildrenSupport";
import SpecialNeedsChildrenFamily from "@/components/services/special-needs-children/SpecialNeedsChildrenFamily";
import SpecialNeedsChildrenApproach from "@/components/services/special-needs-children/SpecialNeedsChildrenApproach";
import SpecialNeedsChildrenContinuity from "@/components/services/special-needs-children/SpecialNeedsChildrenContinuity";
import SpecialNeedsChildrenCTA from "@/components/services/special-needs-children/SpecialNeedsChildrenCTA";

export default function SpecialNeedsChildrenPage() {
  return (
    <main>
      <SpecialNeedsChildrenHero />
      <SpecialNeedsChildrenOverview />
      <SpecialNeedsChildrenSupport />
      <SpecialNeedsChildrenFamily />
      <SpecialNeedsChildrenApproach />
      <SpecialNeedsChildrenContinuity />
      <SpecialNeedsChildrenCTA />
    </main>
  );
}
