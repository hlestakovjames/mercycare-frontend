import BlogTopicHero from "@/components/blog/care-wellness/topics/BlogTopicHero";
import BlogTopicContent from "@/components/blog/care-wellness/topics/BlogTopicContent";
import BlogTopicGuidance from "@/components/blog/care-wellness/topics/BlogTopicGuidance";
import BlogTopicCta from "@/components/blog/care-wellness/topics/BlogTopicCta";

export default function ParentingChildWellbeingPage() {
  return (
    <>
      <BlogTopicHero
        eyebrow="Family & Community · Parenting & Child Wellbeing"
        title="Growing well begins with supportive environments."
        description="Explore thoughtful conversations around parenting, childhood, family support and the wider dimensions of child wellbeing."
      />

      <BlogTopicContent
        intro="Children grow within families, schools, communities and other environments. Their wellbeing is therefore connected to the relationships and support systems around them."
        sections={[
          {
            title: "Parenting perspectives",
            text: "Explore different experiences and perspectives on the everyday realities of parenting.",
          },
          {
            title: "Child wellbeing",
            text: "Look beyond a single measure of health to consider emotional, social, developmental and everyday wellbeing.",
          },
          {
            title: "Family support",
            text: "Explore the role of supportive family relationships and environments in children's everyday experiences.",
          },
          {
            title: "Community environments",
            text: "Consider how communities can contribute to spaces where children and families can participate, connect and thrive.",
          },
        ]}
      />

      <BlogTopicGuidance />

      <BlogTopicCta
        title="Explore the wider Family & Community collection."
        href="/blog/family-community"
        label="Back to Family & Community"
      />
    </>
  );
}
