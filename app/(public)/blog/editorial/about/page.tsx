import BlogEditorialHub from "@/components/blog/editorial/BlogEditorialHub";

export default function EditorialAboutPage() {
  return (
    <BlogEditorialHub
      eyebrow="Editorial · About"
      title="A Media Center built around people, context and useful conversations."
      description="The MercyCare Media Center is intended to bring together stories, interviews, features, media and resources that help people explore care, wellbeing, family life and community perspectives."
      sections={[
        {
          title: "Why it exists",
          description:
            "To create a dedicated space for thoughtful communication around MercyCare's work and the wider conversations connected to care and wellbeing.",
        },
        {
          title: "What it covers",
          description:
            "Stories, conversations, features, media and resources can sit alongside programme and community content without losing their distinct editorial purpose.",
        },
        {
          title: "Who it is for",
          description:
            "Families, caregivers, community members, professionals, partners and readers interested in care and wellbeing conversations.",
        },
        {
          title: "How it can grow",
          description:
            "The platform can evolve to support richer contributor profiles, multimedia storytelling, archives, search and a structured editorial workflow.",
        },
      ]}
    />
  );
}
