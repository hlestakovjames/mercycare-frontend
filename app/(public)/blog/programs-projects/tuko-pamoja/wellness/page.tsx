import BlogTopicHero from "@/components/blog/care-wellness/topics/BlogTopicHero";
import BlogTopicContent from "@/components/blog/care-wellness/topics/BlogTopicContent";
import BlogTopicGuidance from "@/components/blog/care-wellness/topics/BlogTopicGuidance";
import BlogTopicCta from "@/components/blog/care-wellness/topics/BlogTopicCta";

export default function TukoPamojaWellnessPage() {
  return (
    <>
      <BlogTopicHero
        eyebrow="Tuko Pamoja · Wellness"
        title="Senior wellness is about more than one dimension of health."
        description="Explore editorial conversations around ageing, dignity, connection, participation and everyday wellbeing."
      />

      <BlogTopicContent
        intro="The Tuko Pamoja wellness collection provides space for broader conversations around senior wellbeing and the experiences that shape everyday life."
        sections={[
          {
            title: "Ageing with dignity",
            text: "Explore perspectives on dignity, respect, identity and the individual experience of ageing.",
          },
          {
            title: "Connection",
            text: "Look at relationships, belonging and participation as parts of everyday wellbeing.",
          },
          {
            title: "Active participation",
            text: "Explore ways older adults can remain connected to activities, families and communities according to their circumstances.",
          },
          {
            title: "Everyday wellbeing",
            text: "Create space for broader conversations around routines, interests, relationships and quality of life.",
          },
        ]}
      />

      <BlogTopicGuidance />

      <BlogTopicCta
        title="Continue exploring Tuko Pamoja."
        href="/blog/programs-projects/tuko-pamoja"
        label="Back to Tuko Pamoja"
      />
    </>
  );
}
