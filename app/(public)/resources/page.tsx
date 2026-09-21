import ResourcesSectionPage from "@/components/resources/ResourcesSectionPage";

const resourceSections = [
  {
    title: "Care Guides",
    description:
      "Practical educational guides covering everyday caregiving, home support and preparing for care.",
    href: "/resources/care-guides",
  },
  {
    title: "Health Information",
    description:
      "General health and wellness information designed to support informed conversations with families and care professionals.",
    href: "/resources/health-information",
  },
  {
    title: "Family & Caregiver Resources",
    description:
      "Resources for family members and caregivers supporting loved ones at home and in the community.",
    href: "/resources/family-caregiver",
  },
  {
    title: "Senior Wellness Resources",
    description:
      "Educational resources focused on wellbeing, dignity, connection and everyday support for older adults.",
    href: "/resources/senior-wellness",
  },
  {
    title: "Maternal & Child Resources",
    description:
      "Information and educational resources supporting mothers, children and families.",
    href: "/resources/maternal-child",
  },
  {
    title: "Community Resources",
    description:
      "Useful information, community-focused materials and resources that can help families navigate available support.",
    href: "/resources/community",
  },
  {
    title: "Downloads",
    description:
      "Access downloadable guides, information sheets, forms and other MercyCare resources.",
    href: "/resources/downloads",
  },
  {
    title: "Frequently Asked Questions",
    description:
      "Answers to common questions about MercyCare, caregiving, services and accessing support.",
    href: "/resources/faq",
  },
  {
    title: "Resource Archive",
    description:
      "Browse previous educational materials, publications and resources from MercyCare.",
    href: "/resources/archive",
  },
];

export default function ResourcesPage() {
  return (
    <ResourcesSectionPage
      title="Resources for Care, Wellness & Community"
      description="Explore MercyCare's educational resources, practical guides and information for individuals, families, caregivers and communities. Our resources are intended to support awareness and informed conversations about care and wellbeing."
      sections={resourceSections}
    />
  );
}
