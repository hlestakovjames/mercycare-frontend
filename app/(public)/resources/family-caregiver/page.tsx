import ResourcesSectionPage from "@/components/resources/ResourcesSectionPage";

export default function FamilyCaregiverResourcesPage() {
  return (
    <ResourcesSectionPage
      title="Family & Caregiver Resources"
      description="Resources designed to help families and caregivers understand, organise and navigate everyday care and support."
      sections={[
        {
          title: "Family Caregiving",
          description:
            "Educational resources for families supporting loved ones at home.",
          href: "/resources/family-caregiver",
        },
        {
          title: "Caregiver Wellbeing",
          description:
            "Information about maintaining personal wellbeing while supporting someone else.",
          href: "/resources/family-caregiver",
        },
        {
          title: "Caregiver Resources",
          description:
            "Practical materials and information for people involved in day-to-day caregiving.",
          href: "/resources/downloads",
        },
      ]}
    />
  );
}
