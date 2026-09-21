import BlogArchiveHub from "@/components/blog/archive/BlogArchiveHub";

export default function ArchiveByCategoryPage() {
  return (
    <BlogArchiveHub
      eyebrow="Archive · By Category"
      title="Find content by editorial format."
      description="Explore the Media Center according to the type of content you want to experience."
      sections={[
        {
          title: "Stories",
          description:
            "People-focused editorial pieces exploring experiences, communities, programmes and everyday moments.",
        },
        {
          title: "Interviews",
          description:
            "Structured conversations with community members, caregivers, professionals, partners and other contributors.",
        },
        {
          title: "Features",
          description:
            "Longer-form, field-based, special and visual storytelling.",
        },
        {
          title: "Media",
          description:
            "Videos, podcasts, photo stories and future multimedia experiences.",
        },
        {
          title: "Resources",
          description:
            "Educational and practical material organised around care, wellness, family life and caregiving.",
        },
      ]}
    />
  );
}
