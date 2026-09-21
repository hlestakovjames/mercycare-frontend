import ResourcesSectionPage from "@/components/resources/ResourcesSectionPage";

export default function CommunityResourcesPage() {
  return (
    <ResourcesSectionPage
      title="Community Resources"
      description="Information and educational materials supporting community awareness, wellbeing and access to relevant support."
      sections={[
        {
          title: "Community Wellbeing",
          description:
            "Resources covering general wellbeing and community-focused care.",
          href: "/resources/community",
        },
        {
          title: "Community Support",
          description:
            "Information that can help families explore available forms of community support.",
          href: "/resources/community",
        },
        {
          title: "Events & Activities",
          description:
            "Discover MercyCare events and activities where families and communities can participate.",
          href: "/events",
        },
      ]}
    />
  );
}
