import BlogTopicHero from "@/components/blog/care-wellness/topics/BlogTopicHero";
import BlogTopicContent from "@/components/blog/care-wellness/topics/BlogTopicContent";
import BlogTopicGuidance from "@/components/blog/care-wellness/topics/BlogTopicGuidance";
import BlogTopicCta from "@/components/blog/care-wellness/topics/BlogTopicCta";

export default function PracticalCaregivingPage() {
  return (
    <>
      <BlogTopicHero
        eyebrow="Caregiving · Practical Caregiving"
        title="The practical side of caring, explained clearly."
        description="Explore everyday caregiving routines, communication, organisation and the practical questions families may encounter."
      />

      <BlogTopicContent
        intro="Good caregiving often involves many practical details. This collection focuses on understanding those everyday realities and encouraging clear communication and thoughtful preparation."
        sections={[
          {
            title: "Planning routines",
            text: "Explore ways families can think about routines, responsibilities and changing circumstances in an organised way.",
          },
          {
            title: "Communication",
            text: "Look at the importance of clear, respectful communication between the person receiving support, family members and appropriate professionals.",
          },
          {
            title: "Organising support",
            text: "Consider how families can think about responsibilities, schedules and available support without assuming one approach works for everyone.",
          },
          {
            title: "Preparing for change",
            text: "Explore conversations around anticipating changes and knowing when additional guidance or professional support may be appropriate.",
          },
        ]}
      />

      <BlogTopicGuidance />

      <BlogTopicCta
        title="Continue through the Caregiving collection."
        href="/blog/care-wellness/caregiving"
        label="Back to Caregiving"
      />
    </>
  );
}
