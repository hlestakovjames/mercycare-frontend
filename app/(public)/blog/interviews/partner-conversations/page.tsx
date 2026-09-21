import BlogInterviewHub from "@/components/blog/interviews/BlogInterviewHub";

export default function PartnerConversationsPage() {
  return (
    <BlogInterviewHub
      eyebrow="Interviews · Partner Conversations"
      title="Conversations with people and organisations working alongside us."
      intro="A space for collaboration stories, shared perspectives and conversations about the relationships that help connect people, ideas and communities."
      sections={[
        {
          title: "Partner stories",
          text: "Future conversations can explore how partners became involved and what they have learned through collaboration.",
        },
        {
          title: "Shared perspectives",
          text: "Partners can discuss common interests, community priorities and the ideas shaping collaborative work.",
        },
        {
          title: "Collaboration in practice",
          text: "Interviews can show how different people and organisations contribute different perspectives and capabilities.",
        },
        {
          title: "Community connections",
          text: "Conversations can highlight how partnerships connect initiatives with the people and communities they are intended to serve.",
        },
      ]}
    />
  );
}
