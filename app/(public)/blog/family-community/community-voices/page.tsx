import BlogTopicHero from "@/components/blog/care-wellness/topics/BlogTopicHero";
import BlogTopicContent from "@/components/blog/care-wellness/topics/BlogTopicContent";
import BlogTopicGuidance from "@/components/blog/care-wellness/topics/BlogTopicGuidance";
import BlogTopicCta from "@/components/blog/care-wellness/topics/BlogTopicCta";

export default function CommunityVoicesPage() {
  return (
    <>
      <BlogTopicHero
        eyebrow="Family & Community · Community Voices"
        title="Listen to the people who know their communities best."
        description="A space for community perspectives, lived experiences and conversations that bring greater context to the issues that matter."
      />

      <BlogTopicContent
        intro="Community Voices is designed around listening. The collection can bring together experiences from people whose perspectives help explain community life beyond headlines and statistics."
        sections={[
          {
            title: "Lived experiences",
            text: "Stories can help readers understand how broader issues are experienced in everyday life.",
          },
          {
            title: "Community perspectives",
            text: "Create space for people to describe their communities, priorities, challenges and aspirations in their own voices.",
          },
          {
            title: "Shared experiences",
            text: "Explore themes that connect people while recognising that individual experiences are not universal.",
          },
          {
            title: "Conversations",
            text: "Future features can include interviews, community conversations and other formats that allow perspectives to be heard.",
          },
        ]}
      />

      <BlogTopicGuidance />

      <BlogTopicCta
        title="Return to the Family & Community editorial hub."
        href="/blog/family-community"
        label="Back to Family & Community"
      />
    </>
  );
}
