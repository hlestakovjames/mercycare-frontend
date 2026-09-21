import ResourcesSectionPage from "@/components/resources/ResourcesSectionPage";

export default function ResourceArchivePage() {
  return (
    <ResourcesSectionPage
      title="Resource Archive"
      description="Browse previous MercyCare educational materials, publications and resource collections."
      sections={[
        {
          title: "Previous Guides",
          description:
            "Explore earlier care and wellbeing guides published by MercyCare.",
          href: "/resources/archive",
        },
        {
          title: "Past Publications",
          description:
            "Browse previous information materials and community publications.",
          href: "/resources/archive",
        },
        {
          title: "MercyCare Updates",
          description:
            "Read MercyCare news, announcements and updates.",
          href: "/news",
        },
      ]}
    />
  );
}
