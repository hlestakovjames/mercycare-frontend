import BlogTopicHero from "@/components/blog/care-wellness/topics/BlogTopicHero";
import BlogTopicContent from "@/components/blog/care-wellness/topics/BlogTopicContent";
import BlogTopicGuidance from "@/components/blog/care-wellness/topics/BlogTopicGuidance";
import BlogTopicCta from "@/components/blog/care-wellness/topics/BlogTopicCta";

export default function CaregiverVoicesPage() {
  return (
    <>
      <BlogTopicHero
        eyebrow="Voices · Caregiver Voices"
        title="The experiences of people who provide care."
        description="Explore caregiver perspectives on responsibility, relationships, routines, wellbeing and the realities of supporting another person."
      />

      <BlogTopicContent
        intro="Caregivers have their own experiences, challenges, insights and stories. This collection creates room for those perspectives to be heard."
        sections={[
          {
            title: "Everyday caregiving",
            text: "Explore the ordinary moments, routines and responsibilities that form part of caring for another person.",
          },
          {
            title: "Caregiver wellbeing",
            text: "Give space to conversations about the wellbeing and support needs of caregivers themselves.",
          },
          {
            title: "Lessons learned",
            text: "Future contributors can share experiences and reflections that may help others understand the caregiving journey.",
          },
          {
            title: "Family perspectives",
            text: "Explore the different ways caregiving can affect families, relationships and household life.",
          },
        ]}
      />

      <BlogTopicGuidance />

      <BlogTopicCta
        title="Continue exploring voices from across MercyCare's community."
        href="/blog/voices"
        label="Back to Voices"
      />
    </>
  );
}
