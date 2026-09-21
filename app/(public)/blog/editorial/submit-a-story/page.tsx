import BlogEditorialHub from "@/components/blog/editorial/BlogEditorialHub";

export default function SubmitStoryPage() {
  return (
    <BlogEditorialHub
      eyebrow="Editorial · Submit a Story"
      title="Have a story, perspective or idea to share?"
      description="This page provides the foundation for a future MercyCare Media Center submission pathway for community stories, perspectives, photographs, interviews and other editorial ideas."
      sections={[
        {
          title: "Story ideas",
          description:
            "Future submissions may propose community stories, care experiences, programme perspectives or other relevant editorial ideas.",
        },
        {
          title: "Community perspectives",
          description:
            "People with relevant lived experiences may be able to suggest perspectives or conversations for consideration.",
        },
        {
          title: "Visual contributions",
          description:
            "Future submissions may include photographs or other visual material where appropriate permissions and context are available.",
        },
        {
          title: "What happens next",
          description:
            "A future submission workflow can explain review, editorial follow-up, permissions, publication decisions and contributor communication.",
        },
      ]}
    />
  );
}
