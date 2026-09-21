import BlogTopicHero from "@/components/blog/care-wellness/topics/BlogTopicHero";
import BlogTopicContent from "@/components/blog/care-wellness/topics/BlogTopicContent";
import BlogTopicGuidance from "@/components/blog/care-wellness/topics/BlogTopicGuidance";
import BlogTopicCta from "@/components/blog/care-wellness/topics/BlogTopicCta";

export default function CaregiverResourcesPage() {
  return (
    <>
      <BlogTopicHero
        eyebrow="Caregiving · Caregiver Resources"
        title="A growing library for people navigating care."
        description="A dedicated space for future caregiver guides, educational material, useful references and practical resources."
      />

      <BlogTopicContent
        intro="The Caregiver Resources collection is designed to grow into a practical knowledge area for families, caregivers and community members looking for clearer information about care."
        sections={[
          {
            title: "Care guides",
            text: "Future resources can provide accessible explanations and practical considerations for common caregiving situations.",
          },
          {
            title: "Family resources",
            text: "Resources can help families think through communication, planning, support and everyday caregiving responsibilities.",
          },
          {
            title: "Wellbeing resources",
            text: "The collection can include material focused on caregiver wellbeing, support networks and sustainable caregiving.",
          },
          {
            title: "Useful references",
            text: "Where appropriate, future resources can point readers toward reliable organisations, professional guidance and additional learning material.",
          },
        ]}
      />

      <BlogTopicGuidance />

      <BlogTopicCta
        title="Return to the Caregiving editorial hub."
        href="/blog/care-wellness/caregiving"
        label="Back to Caregiving"
      />
    </>
  );
}
