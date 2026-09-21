import BlogTopicHero from "@/components/blog/care-wellness/topics/BlogTopicHero";
import BlogTopicContent from "@/components/blog/care-wellness/topics/BlogTopicContent";
import BlogTopicGuidance from "@/components/blog/care-wellness/topics/BlogTopicGuidance";
import BlogTopicCta from "@/components/blog/care-wellness/topics/BlogTopicCta";

export default function SocialWellbeingPage() {
  return (
    <>
      <BlogTopicHero
        eyebrow="Family & Community · Social Wellbeing"
        title="Wellbeing also means feeling connected."
        description="Explore belonging, relationships, participation and the social dimensions of everyday wellbeing."
      />

      <BlogTopicContent
        intro="People are connected to families, friends, neighbourhoods, organisations and communities. These relationships can shape how people experience belonging, participation and everyday wellbeing."
        sections={[
          {
            title: "Belonging",
            text: "Explore the importance of feeling connected to people, places and communities.",
          },
          {
            title: "Relationships",
            text: "Look at how supportive relationships contribute to everyday experiences and social wellbeing.",
          },
          {
            title: "Participation",
            text: "Explore opportunities for people to participate meaningfully in family and community life.",
          },
          {
            title: "Community connection",
            text: "Consider how shared activities, conversations and mutual support can strengthen connections between people.",
          },
        ]}
      />

      <BlogTopicGuidance />

      <BlogTopicCta
        title="Continue exploring Family & Community."
        href="/blog/family-community"
        label="Back to Family & Community"
      />
    </>
  );
}
