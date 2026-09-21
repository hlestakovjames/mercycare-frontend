import BlogTopicHero from "@/components/blog/care-wellness/topics/BlogTopicHero";
import BlogTopicContent from "@/components/blog/care-wellness/topics/BlogTopicContent";
import BlogTopicGuidance from "@/components/blog/care-wellness/topics/BlogTopicGuidance";
import BlogTopicCta from "@/components/blog/care-wellness/topics/BlogTopicCta";

export default function ProfessionalPerspectivesPage() {
  return (
    <>
      <BlogTopicHero
        eyebrow="Voices · Professional Perspectives"
        title="Ideas and perspectives from relevant professionals."
        description="A space for informed conversations that help readers understand care, wellbeing and community issues from professional perspectives."
      />

      <BlogTopicContent
        intro="Professional perspectives can add useful context to public conversations. Contributions will be clearly attributed and presented according to the contributor's area of expertise."
        sections={[
          {
            title: "Expert conversations",
            text: "Future interviews can explore topics related to care, wellbeing, families and community life.",
          },
          {
            title: "Professional insight",
            text: "Invite relevant professionals to explain concepts and share perspectives in accessible language.",
          },
          {
            title: "Practice perspectives",
            text: "Explore what professionals observe in their work while avoiding unsupported claims about individual cases.",
          },
          {
            title: "Responsible information",
            text: "Health-related contributions should remain appropriately contextualised and should not substitute for individual professional assessment.",
          },
        ]}
      />

      <BlogTopicGuidance />

      <BlogTopicCta
        title="Explore other voices in the Media Center."
        href="/blog/voices"
        label="Back to Voices"
      />
    </>
  );
}
