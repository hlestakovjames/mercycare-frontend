import BlogEditorialHub from "@/components/blog/editorial/BlogEditorialHub";

export default function EditorialContributorsPage() {
  return (
    <BlogEditorialHub
      eyebrow="Editorial · Contributors"
      title="The people who help bring stories to life."
      description="This space is designed for a future contributor directory covering writers, interviewers, photographers, subject contributors and other people involved in MercyCare Media Center content."
      sections={[
        {
          title: "Writers",
          description:
            "Future profiles can introduce people who contribute written stories, features and editorial pieces.",
        },
        {
          title: "Interviewers",
          description:
            "Future profiles can identify people who facilitate conversations and interviews.",
        },
        {
          title: "Photographers and visual contributors",
          description:
            "Future profiles can recognise people contributing photography, visual stories and multimedia work.",
        },
        {
          title: "Subject contributors",
          description:
            "Stories may include clearly identified community, caregiver, professional or partner perspectives where appropriate.",
        },
      ]}
    />
  );
}
