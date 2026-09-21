import ResourcesSectionPage from "@/components/resources/ResourcesSectionPage";

export default function SeniorWellnessResourcesPage() {
  return (
    <ResourcesSectionPage
      title="Senior Wellness Resources"
      description="Educational resources supporting dignity, connection, independence and everyday wellbeing for older adults."
      sections={[
        {
          title: "Senior Wellness",
          description:
            "General educational resources about wellbeing and quality of everyday life.",
          href: "/resources/senior-wellness",
        },
        {
          title: "Family Support",
          description:
            "Resources for families supporting older relatives and loved ones.",
          href: "/resources/family-caregiver",
        },
        {
          title: "Tuko Pamoja",
          description:
            "Explore resources connected to MercyCare's Tuko Pamoja senior wellness programme.",
          href: "/projects/tuko-pamoja",
        },
      ]}
    />
  );
}
