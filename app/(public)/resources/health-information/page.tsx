import ResourcesSectionPage from "@/components/resources/ResourcesSectionPage";

export default function HealthInformationPage() {
  return (
    <ResourcesSectionPage
      title="Health Information"
      description="General educational information covering health, wellness and care topics. These resources are intended for awareness and should not replace advice from a qualified healthcare professional."
      sections={[
        {
          title: "Health & Wellness",
          description:
            "General information supporting conversations about everyday wellbeing and healthy living.",
          href: "/resources/health-information",
        },
        {
          title: "Understanding Care Needs",
          description:
            "Educational material to help families think through changing care and support needs.",
          href: "/services",
        },
        {
          title: "Questions to Ask",
          description:
            "Helpful prompts for preparing conversations with healthcare and care professionals.",
          href: "/resources/health-information",
        },
      ]}
    />
  );
}
