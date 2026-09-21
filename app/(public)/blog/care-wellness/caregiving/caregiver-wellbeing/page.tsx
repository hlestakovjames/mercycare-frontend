import BlogTopicHero from "@/components/blog/care-wellness/topics/BlogTopicHero";
import BlogTopicContent from "@/components/blog/care-wellness/topics/BlogTopicContent";
import BlogTopicGuidance from "@/components/blog/care-wellness/topics/BlogTopicGuidance";
import BlogTopicCta from "@/components/blog/care-wellness/topics/BlogTopicCta";

export default function CaregiverWellbeingPage() {
  return (
    <>
      <BlogTopicHero
        eyebrow="Caregiving · Caregiver Wellbeing"
        title="Supporting the wellbeing of the people who care."
        description="Explore conversations about balance, emotional wellbeing, support systems, boundaries and the personal realities of caregiving."
      />

      <BlogTopicContent
        intro="The wellbeing of a caregiver matters. Sustaining care responsibilities can be demanding, making support, communication and realistic expectations important parts of the wider caregiving conversation."
        sections={[
          {
            title: "Making space for yourself",
            text: "Explore the importance of recognising that caregivers have their own needs, responsibilities and lives.",
          },
          {
            title: "Support systems",
            text: "Consider the role that family, friends, community networks and appropriate professional support can play.",
          },
          {
            title: "Boundaries and balance",
            text: "Explore conversations around setting realistic expectations and finding sustainable ways to manage responsibilities.",
          },
          {
            title: "Being heard",
            text: "Give attention to caregiver experiences, concerns and perspectives that can sometimes remain invisible.",
          },
        ]}
      />

      <BlogTopicGuidance />

      <BlogTopicCta
        title="Explore more caregiving perspectives."
        href="/blog/care-wellness/caregiving"
        label="Back to Caregiving"
      />
    </>
  );
}
