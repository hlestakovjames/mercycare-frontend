import BlogTopicHero from "@/components/blog/care-wellness/topics/BlogTopicHero";
import BlogTopicContent from "@/components/blog/care-wellness/topics/BlogTopicContent";
import BlogTopicGuidance from "@/components/blog/care-wellness/topics/BlogTopicGuidance";
import BlogTopicCta from "@/components/blog/care-wellness/topics/BlogTopicCta";

export default function TukoPamojaCommunityPage() {
  return (
    <>
      <BlogTopicHero
        eyebrow="Tuko Pamoja · Community"
        title="Senior wellbeing belongs in the wider community."
        description="Explore community relationships, participation and shared experiences connected to Tuko Pamoja."
      />

      <BlogTopicContent
        intro="Older adults are part of families and communities. This collection explores the wider social context around senior wellness and connection."
        sections={[
          {
            title: "Community participation",
            text: "Explore opportunities and experiences involving older adults in community life.",
          },
          {
            title: "Intergenerational connection",
            text: "Look at relationships between generations and the value of shared experiences.",
          },
          {
            title: "Community perspectives",
            text: "Create room for local voices to describe senior wellness from their own perspectives.",
          },
          {
            title: "Shared responsibility",
            text: "Explore how families, communities and appropriate organisations can contribute to supportive environments.",
          },
        ]}
      />

      <BlogTopicGuidance />

      <BlogTopicCta
        title="Return to the Tuko Pamoja editorial hub."
        href="/blog/programs-projects/tuko-pamoja"
        label="Back to Tuko Pamoja"
      />
    </>
  );
}
