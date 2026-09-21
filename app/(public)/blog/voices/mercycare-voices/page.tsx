import BlogTopicHero from "@/components/blog/care-wellness/topics/BlogTopicHero";
import BlogTopicContent from "@/components/blog/care-wellness/topics/BlogTopicContent";
import BlogTopicGuidance from "@/components/blog/care-wellness/topics/BlogTopicGuidance";
import BlogTopicCta from "@/components/blog/care-wellness/topics/BlogTopicCta";

export default function MercyCareVoicesPage() {
  return (
    <>
      <BlogTopicHero
        eyebrow="Voices · MercyCare Voices"
        title="The people behind MercyCare."
        description="Explore perspectives from people involved in building, supporting and delivering the MercyCare vision."
      />

      <BlogTopicContent
        intro="Organisations are shaped by the people within them. MercyCare Voices provides space for team perspectives, reflections and conversations about the work and values behind the organisation."
        sections={[
          {
            title: "Team perspectives",
            text: "Future stories can introduce the people and perspectives behind different areas of MercyCare.",
          },
          {
            title: "Why we do the work",
            text: "Explore personal reflections on compassion, dignity, community and service.",
          },
          {
            title: "Lessons from the journey",
            text: "Document experiences and lessons that emerge as MercyCare develops.",
          },
          {
            title: "Behind the scenes",
            text: "Show the preparation, collaboration and everyday work that supports MercyCare's public-facing activities.",
          },
        ]}
      />

      <BlogTopicGuidance />

      <BlogTopicCta
        title="Return to the main Voices collection."
        href="/blog/voices"
        label="Back to Voices"
      />
    </>
  );
}
