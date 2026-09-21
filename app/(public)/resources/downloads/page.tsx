import ResourcesSectionPage from "@/components/resources/ResourcesSectionPage";

export default function DownloadsPage() {
  return (
    <ResourcesSectionPage
      title="Downloads"
      description="A central place for MercyCare guides, information sheets, forms and other downloadable resources."
      sections={[
        {
          title: "Care Guides",
          description:
            "Download practical educational materials as they become available.",
          href: "/resources/care-guides",
        },
        {
          title: "Information Sheets",
          description:
            "Access concise educational materials covering care and wellbeing topics.",
          href: "/resources/health-information",
        },
        {
          title: "Forms & Documents",
          description:
            "Access relevant MercyCare documents and forms.",
          href: "/resources/downloads",
        },
      ]}
    />
  );
}
