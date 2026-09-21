import BlogArchiveHub from "@/components/blog/archive/BlogArchiveHub";

export default function ArchiveByYearPage() {
  return (
    <BlogArchiveHub
      eyebrow="Archive · By Year"
      title="Follow the Media Center through time."
      description="A chronological archive designed to make it easy to revisit MercyCare stories, conversations, features, media and resources by publication year."
      sections={[
        {
          title: "2026",
          description:
            "The archive will populate with verified MercyCare Media Center publications from this year as the editorial library develops.",
        },
        {
          title: "Future years",
          description:
            "Additional publication years can be added automatically as new content enters the editorial archive.",
        },
      ]}
    />
  );
}
