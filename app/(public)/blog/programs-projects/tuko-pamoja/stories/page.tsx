import BlogTopicHero from "@/components/blog/care-wellness/topics/BlogTopicHero";
import BlogTopicContent from "@/components/blog/care-wellness/topics/BlogTopicContent";
import BlogTopicGuidance from "@/components/blog/care-wellness/topics/BlogTopicGuidance";
import BlogTopicCta from "@/components/blog/care-wellness/topics/BlogTopicCta";

export default function TukoPamojaStoriesPage() {
  return (
    <>
      <BlogTopicHero
        eyebrow="Tuko Pamoja · Stories"
        title="The people and experiences behind Tuko Pamoja."
        description="A future collection of people-centred stories connected to senior wellness, community and the Tuko Pamoja journey."
      />

      <BlogTopicContent
        intro="Stories can help show what an initiative means in everyday life. This collection is designed for experiences, reflections and perspectives connected to Tuko Pamoja."
        sections={[
          {
            title: "Participant stories",
            text: "Future stories can highlight experiences shared by people participating in or engaging with the initiative.",
          },
          {
            title: "Family perspectives",
            text: "Explore the experiences of families and people supporting older adults.",
          },
          {
            title: "Community stories",
            text: "Document the wider community context surrounding senior wellness and connection.",
          },
          {
            title: "Field stories",
            text: "Capture moments, observations and experiences from activities connected to the initiative.",
          },
        ]}
      />

      <BlogTopicGuidance />

      <BlogTopicCta
        title="Explore the wider Tuko Pamoja collection."
        href="/blog/programs-projects/tuko-pamoja"
        label="Back to Tuko Pamoja"
      />
    </>
  );
}
