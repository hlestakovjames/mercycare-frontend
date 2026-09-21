import DonateSectionPage from "@/components/donate/DonateSectionPage";

export default function DonatePage() {
  return (
    <DonateSectionPage
      eyebrow="Support MercyCare"
      title="Help us extend compassionate care"
      description="Your support can help MercyCare reach more individuals, families, caregivers, and communities with compassionate home health and community-focused support."
      intro="MercyCare welcomes support from individuals, families, organisations, community partners, and other well-wishers who share our commitment to dignity, compassion, and healthier communities."
      items={[
        {
          title: "Donate",
          description:
            "Learn how you can support MercyCare through financial or other approved forms of contribution.",
          href: "/donate",
        },
        {
          title: "Ways to Give",
          description:
            "Explore different ways individuals and organisations can contribute to MercyCare's work.",
          href: "/donate/ways-to-give",
        },
        {
          title: "Your Impact",
          description:
            "Understand how community support can contribute to MercyCare programs, projects, and activities.",
          href: "/donate/impact",
        },
      ]}
    />
  );
}
