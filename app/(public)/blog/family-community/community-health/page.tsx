import BlogTopicHero from "@/components/blog/care-wellness/topics/BlogTopicHero";
import BlogTopicContent from "@/components/blog/care-wellness/topics/BlogTopicContent";
import BlogTopicGuidance from "@/components/blog/care-wellness/topics/BlogTopicGuidance";
import BlogTopicCta from "@/components/blog/care-wellness/topics/BlogTopicCta";

export default function CommunityHealthPage() {
  return (
    <>
      <BlogTopicHero
        eyebrow="Family & Community · Community Health"
        title="Health conversations belong in the community."
        description="Explore stories about awareness, participation, shared knowledge and the many factors that shape community wellbeing."
      />

      <BlogTopicContent
        intro="Community health involves more than healthcare services. Awareness, participation, social conditions, relationships and access to reliable information can all influence how communities experience wellbeing."
        sections={[
          {
            title: "Health awareness",
            text: "Explore conversations that encourage communities to engage with health and wellbeing information thoughtfully.",
          },
          {
            title: "Participation",
            text: "Look at how community members can contribute to conversations, activities and initiatives around wellbeing.",
          },
          {
            title: "Shared knowledge",
            text: "Explore the value of accessible, responsible information in helping people have better conversations about health.",
          },
          {
            title: "Community perspectives",
            text: "Give space to experiences that help explain how health and wellbeing are understood within different communities.",
          },
        ]}
      />

      <BlogTopicGuidance />

      <BlogTopicCta
        title="Discover more stories about families and communities."
        href="/blog/family-community"
        label="Back to Family & Community"
      />
    </>
  );
}
