import BlogTopicHero from "@/components/blog/care-wellness/topics/BlogTopicHero";
import BlogTopicContent from "@/components/blog/care-wellness/topics/BlogTopicContent";
import BlogTopicGuidance from "@/components/blog/care-wellness/topics/BlogTopicGuidance";
import BlogTopicCta from "@/components/blog/care-wellness/topics/BlogTopicCta";

export default function CommunityVoicesPage() {
  return (
    <>
      <BlogTopicHero
        eyebrow="Voices · Community Voices"
        title="Hear from the communities at the heart of the work."
        description="A space for community experiences, conversations and perspectives connected to health, wellbeing and everyday life."
      />

      <BlogTopicContent
        intro="Community Voices is designed to centre lived experiences and local perspectives while recognising that every community and individual experience is different."
        sections={[
          {
            title: "Lived experiences",
            text: "Future stories can explore how people experience wellbeing, care and community in everyday life.",
          },
          {
            title: "Community priorities",
            text: "Create space for people to describe the issues, opportunities and aspirations that matter to them.",
          },
          {
            title: "Community conversations",
            text: "Use interviews and conversations to bring multiple perspectives to a subject.",
          },
          {
            title: "Stories with context",
            text: "Present personal experiences alongside enough context to avoid treating one story as representative of everyone.",
          },
        ]}
      />

      <BlogTopicGuidance />

      <BlogTopicCta
        title="Explore the wider Voices collection."
        href="/blog/voices"
        label="Back to Voices"
      />
    </>
  );
}
