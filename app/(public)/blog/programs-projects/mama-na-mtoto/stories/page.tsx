import BlogTopicHero from "@/components/blog/care-wellness/topics/BlogTopicHero";
import BlogTopicContent from "@/components/blog/care-wellness/topics/BlogTopicContent";
import BlogTopicGuidance from "@/components/blog/care-wellness/topics/BlogTopicGuidance";
import BlogTopicCta from "@/components/blog/care-wellness/topics/BlogTopicCta";

export default function MamaNaMtotoStoriesPage() {
  return (
    <>
      <BlogTopicHero
        eyebrow="Mama na Mtoto · Stories"
        title="Stories from mothers, children and families."
        description="A future collection for people-centred stories connected to maternal and child wellbeing."
      />

      <BlogTopicContent
        intro="Stories can add context to conversations about maternal and child wellbeing. This collection is designed to centre experiences while respecting the individuality of each family."
        sections={[
          {
            title: "Family stories",
            text: "Explore experiences shared by families and the people who support them.",
          },
          {
            title: "Motherhood perspectives",
            text: "Create space for diverse experiences and perspectives around motherhood and family life.",
          },
          {
            title: "Childhood perspectives",
            text: "Explore age-appropriate stories and broader conversations about children's experiences and wellbeing.",
          },
          {
            title: "Community stories",
            text: "Document the wider community context surrounding families and child wellbeing.",
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
