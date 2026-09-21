import ResourcesSectionPage from "@/components/resources/ResourcesSectionPage";

export default function ResourcesFaqPage() {
  return (
    <ResourcesSectionPage
      title="Frequently Asked Questions"
      description="Find answers to common questions about MercyCare's resources, care information and accessing support."
      sections={[
        {
          title: "About Our Resources",
          description:
            "Understand how MercyCare resources are intended to support individuals and families.",
          href: "/resources",
        },
        {
          title: "Services",
          description:
            "Learn more about MercyCare's home health services and how to get started.",
          href: "/services",
        },
        {
          title: "Contact MercyCare",
          description:
            "Get in touch if you need information that is not covered in our resources.",
          href: "/contact",
        },
      ]}
    />
  );
}
