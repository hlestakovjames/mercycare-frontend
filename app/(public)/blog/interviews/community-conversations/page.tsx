import BlogInterviewHub from "@/components/blog/interviews/BlogInterviewHub";

export default function CommunityConversationsPage() {
  return (
    <BlogInterviewHub
      eyebrow="Interviews · Community Conversations"
      title="Conversations with the communities at the heart of the work."
      intro="A space for community perspectives, lived experiences, priorities and conversations about wellbeing, connection and participation."
      sections={[
        {
          title: "Lived experience",
          text: "Future interviews can explore how people experience care, wellbeing and community life in their own words.",
        },
        {
          title: "Community priorities",
          text: "Conversations can create space for people to describe the issues, hopes and priorities that matter in their communities.",
        },
        {
          title: "Community dialogue",
          text: "Interviews may bring together different perspectives around shared questions and community experiences.",
        },
        {
          title: "Stories with context",
          text: "Each conversation should explain its setting and avoid presenting one person's experience as representative of everyone.",
        },
      ]}
    />
  );
}
