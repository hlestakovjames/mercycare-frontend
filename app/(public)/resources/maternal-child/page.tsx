import ResourcesSectionPage from "@/components/resources/ResourcesSectionPage";

export default function MaternalChildResourcesPage() {
  return (
    <ResourcesSectionPage
      title="Maternal & Child Resources"
      description="Educational resources for mothers, children and families, supporting awareness, wellbeing and informed conversations."
      sections={[
        {
          title: "Maternal Resources",
          description:
            "General educational information for mothers and families.",
          href: "/resources/maternal-child",
        },
        {
          title: "Child & Family Resources",
          description:
            "Resources supporting families as they care for children and navigate everyday wellbeing.",
          href: "/resources/maternal-child",
        },
        {
          title: "Mama na Mtoto",
          description:
            "Explore resources connected to MercyCare's Mama na Mtoto programme.",
          href: "/projects/mama-na-mtoto",
        },
      ]}
    />
  );
}
