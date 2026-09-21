import BlogInterviewHub from "@/components/blog/interviews/BlogInterviewHub";

export default function CareConversationsPage() {
  return (
    <BlogInterviewHub
      eyebrow="Interviews · Care Conversations"
      title="Conversations about the everyday experience of care."
      intro="A space for thoughtful discussions around caregiving, family support, dignity, connection and the realities of caring for others."
      sections={[
        {
          title: "Everyday caregiving",
          text: "Future conversations can explore the routines, decisions and experiences that shape everyday caregiving.",
        },
        {
          title: "Caregiver wellbeing",
          text: "Interviews can make space for caregivers to discuss balance, support, connection and their own wellbeing.",
        },
        {
          title: "Family perspectives",
          text: "Families can share different experiences of care, communication, support and changing needs.",
        },
        {
          title: "Dignity in care",
          text: "Conversations can explore what respectful, compassionate and person-centred support means to different people.",
        },
      ]}
    />
  );
}
