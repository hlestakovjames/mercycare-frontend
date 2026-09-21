import BlogTopicHero from "@/components/blog/care-wellness/topics/BlogTopicHero";
import BlogTopicContent from "@/components/blog/care-wellness/topics/BlogTopicContent";
import BlogTopicGuidance from "@/components/blog/care-wellness/topics/BlogTopicGuidance";
import BlogTopicCta from "@/components/blog/care-wellness/topics/BlogTopicCta";

export default function PartnerVoicesPage() {
  return (
    <>
      <BlogTopicHero
        eyebrow="Voices · Partner Voices"
        title="Conversations with the people and organisations we work alongside."
        description="Explore perspectives from collaborators, community organisations and other partners connected to MercyCare."
      />

      <BlogTopicContent
        intro="Partnerships bring different experiences, capabilities and perspectives together. This collection provides a place to explore those relationships through conversations and stories."
        sections={[
          {
            title: "Partner conversations",
            text: "Future interviews can explore why organisations collaborate and what they bring to shared work.",
          },
          {
            title: "Shared perspectives",
            text: "Explore different viewpoints on community wellbeing, care and participation.",
          },
          {
            title: "Collaboration stories",
            text: "Document selected partnership experiences and the context around collaborative work.",
          },
          {
            title: "Community connections",
            text: "Show how organisations and community actors can connect around shared areas of interest.",
          },
        ]}
      />

      <BlogTopicGuidance />

      <BlogTopicCta
        title="Discover more voices across MercyCare."
        href="/blog/voices"
        label="Back to Voices"
      />
    </>
  );
}
