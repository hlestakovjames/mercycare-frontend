import BlogMediaHub from "@/components/blog/media/BlogMediaHub";

export default function PodcastsPage() {
  return (
    <BlogMediaHub
      eyebrow="Media · Podcasts"
      title="Listen to the conversations."
      intro="A future audio collection for thoughtful conversations around care, wellbeing, family, community and the people connected to MercyCare."
      sections={[
        {
          title: "Conversation series",
          text: "Future podcast series can bring recurring themes and voices together into an accessible audio format.",
        },
        {
          title: "Community conversations",
          text: "Audio can provide space for community perspectives and lived experiences to be heard in a more conversational setting.",
        },
        {
          title: "Care conversations",
          text: "Caregiving, family support and wellbeing discussions can be explored through longer-form audio conversations.",
        },
        {
          title: "Expert conversations",
          text: "Relevant professionals may contribute perspectives on selected subjects, with their comments clearly attributed and contextualised.",
        },
      ]}
    />
  );
}
