import BlogTopicHero from "@/components/blog/care-wellness/topics/BlogTopicHero";
import BlogTopicContent from "@/components/blog/care-wellness/topics/BlogTopicContent";
import BlogTopicGuidance from "@/components/blog/care-wellness/topics/BlogTopicGuidance";
import BlogTopicCta from "@/components/blog/care-wellness/topics/BlogTopicCta";

export default function TukoPamojaUpdatesPage() {
  return (
    <>
      <BlogTopicHero
        eyebrow="Tuko Pamoja · Updates"
        title="Follow the journey as Tuko Pamoja grows."
        description="A dedicated editorial space for future updates, milestones, activities and developments connected to the initiative."
      />

      <BlogTopicContent
        intro="Updates will distinguish between confirmed programme information and editorial coverage, helping readers follow the development of Tuko Pamoja over time."
        sections={[
          {
            title: "Programme updates",
            text: "Future posts can communicate confirmed developments and changes connected to the initiative.",
          },
          {
            title: "Activity highlights",
            text: "Document selected activities and moments through stories, photography and other editorial formats.",
          },
          {
            title: "Community updates",
            text: "Share relevant community-facing developments and participation opportunities when confirmed.",
          },
          {
            title: "Looking ahead",
            text: "Use editorial updates to provide context around future directions without presenting plans as confirmed until they are official.",
          },
        ]}
      />

      <BlogTopicGuidance />

      <BlogTopicCta
        title="Explore the complete Tuko Pamoja collection."
        href="/blog/programs-projects/tuko-pamoja"
        label="Back to Tuko Pamoja"
      />
    </>
  );
}
