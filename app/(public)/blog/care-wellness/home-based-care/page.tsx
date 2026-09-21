import BlogTopicHero from "@/components/blog/care-wellness/topics/BlogTopicHero";
import BlogTopicContent from "@/components/blog/care-wellness/topics/BlogTopicContent";
import BlogTopicGuidance from "@/components/blog/care-wellness/topics/BlogTopicGuidance";
import BlogTopicCta from "@/components/blog/care-wellness/topics/BlogTopicCta";

export default function HomeBasedCarePage() {
  return (
    <>
      <BlogTopicHero
        eyebrow="Care & Wellness · Home-Based Care"
        title="When care becomes part of the home."
        description="Explore stories and perspectives about wellbeing, support and family life within familiar home environments."
      />

      <BlogTopicContent
        intro="Home is where many important parts of life happen. Conversations about home-based care therefore involve not only support, but also routines, relationships, dignity, comfort and the experience of the wider household."
        sections={[
          {
            title: "Care at home",
            text: "Explore perspectives on how families and care professionals can work around the realities of home life when support is needed.",
          },
          {
            title: "The family environment",
            text: "Consider how care can interact with household routines, responsibilities and relationships.",
          },
          {
            title: "Comfort and familiarity",
            text: "Explore why familiar surroundings can matter to people's sense of routine, connection and wellbeing.",
          },
          {
            title: "Planning for support",
            text: "Read conversations about preparing for changing needs, communicating expectations and involving the people who matter.",
          },
        ]}
      />

      <BlogTopicGuidance />

      <BlogTopicCta
        title="Explore the wider Care & Wellness collection."
        href="/blog/care-wellness"
        label="Back to Care & Wellness"
      />
    </>
  );
}
