import ResourcesSectionPage from "@/components/resources/ResourcesSectionPage";

export default function CareGuidesPage() {
  return (
    <ResourcesSectionPage
      title="Care Guides"
      description="Practical educational materials for families, caregivers and individuals navigating everyday care and support."
      sections={[
        {
          title: "Preparing for Home Care",
          description:
            "Guidance on preparing the home environment and discussing care needs with family members and professionals.",
          href: "/resources/care-guides",
        },
        {
          title: "Everyday Caregiving",
          description:
            "Educational information about organising everyday support and maintaining dignity at home.",
          href: "/resources/family-caregiver",
        },
        {
          title: "Caregiver Wellbeing",
          description:
            "Resources focused on recognising the importance of caregiver wellbeing and sustainable support.",
          href: "/resources/family-caregiver",
        },
      ]}
    />
  );
}
