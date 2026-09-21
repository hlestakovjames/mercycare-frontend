import BlogArchiveHub from "@/components/blog/archive/BlogArchiveHub";

export default function ArchiveByTopicPage() {
  return (
    <BlogArchiveHub
      eyebrow="Archive · By Topic"
      title="Explore the conversations behind the content."
      description="Topic-based discovery connects content across different editorial formats."
      sections={[
        {
          title: "Care & Wellness",
          description:
            "Content around healthy living, senior wellness, caregiving, home-based care and comfort-focused conversations.",
        },
        {
          title: "Family & Community",
          description:
            "Stories and perspectives involving family life, parenting, community health and social wellbeing.",
        },
        {
          title: "Programs & Projects",
          description:
            "Editorial content connected to MercyCare programmes, projects, community work and future initiatives.",
        },
        {
          title: "People & Voices",
          description:
            "Community, caregiver, professional, partner and MercyCare perspectives.",
        },
      ]}
    />
  );
}
