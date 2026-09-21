import BlogTopicHero from "@/components/blog/care-wellness/topics/BlogTopicHero";
import BlogTopicContent from "@/components/blog/care-wellness/topics/BlogTopicContent";
import BlogTopicGuidance from "@/components/blog/care-wellness/topics/BlogTopicGuidance";
import BlogTopicCta from "@/components/blog/care-wellness/topics/BlogTopicCta";

export default function MamaNaMtotoCommunityPage() {
  return (
    <>
      <BlogTopicHero
        eyebrow="Mama na Mtoto · Community"
        title="Families grow within communities."
        description="Explore the community relationships, participation and shared experiences connected to maternal and child wellbeing."
      />

      <BlogTopicContent
        intro="Maternal and child wellbeing is influenced by the wider environment around families. Community provides an important context for connection, awareness and support."
        sections={[
          {
            title: "Community participation",
            text: "Explore ways families and community members can participate in conversations and activities around wellbeing.",
          },
          {
            title: "Supportive communities",
            text: "Look at the relationships and environments that can contribute to families feeling connected and supported.",
          },
          {
            title: "Community perspectives",
            text: "Create space for local voices to describe family wellbeing from their own experiences.",
          },
          {
            title: "Shared responsibility",
            text: "Explore how families, communities and appropriate organisations can contribute to supportive environments.",
          },
        ]}
      />

      <BlogTopicGuidance />

      <BlogTopicCta
        title="Explore the wider Mama na Mtoto collection."
        href="/blog/programs-projects/mama-na-mtoto"
        label="Back to Mama na Mtoto"
      />
    </>
  );
}
