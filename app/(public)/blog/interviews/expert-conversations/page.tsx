import BlogInterviewHub from "@/components/blog/interviews/BlogInterviewHub";

export default function ExpertConversationsPage() {
  return (
    <BlogInterviewHub
      eyebrow="Interviews · Expert Conversations"
      title="Conversations that bring professional perspectives into the discussion."
      intro="A structured space for conversations with relevant professionals whose knowledge can add context to care, wellbeing and community discussions."
      sections={[
        {
          title: "Expert insight",
          text: "Future interviews can explore professional perspectives on topics relevant to families, caregivers and communities.",
        },
        {
          title: "Explaining complex topics",
          text: "Conversations can make important ideas easier to understand without reducing them to unsupported conclusions.",
        },
        {
          title: "Professional perspectives",
          text: "Interviewees can explain how they approach particular topics while keeping their comments clearly attributed to them.",
        },
        {
          title: "Responsible information",
          text: "Health-related information should remain general, contextual and appropriately framed rather than becoming personalised medical advice.",
        },
      ]}
    />
  );
}
