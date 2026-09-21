import BlogTopicHero from "@/components/blog/care-wellness/topics/BlogTopicHero";
import BlogTopicContent from "@/components/blog/care-wellness/topics/BlogTopicContent";
import BlogTopicGuidance from "@/components/blog/care-wellness/topics/BlogTopicGuidance";
import BlogTopicCta from "@/components/blog/care-wellness/topics/BlogTopicCta";

export default function PalliativeComfortCarePage() {
  return (
    <>
      <BlogTopicHero
        eyebrow="Care & Wellness · Palliative & Comfort Care"
        title="Conversations about comfort, dignity and supportive care."
        description="A thoughtful editorial space for exploring the human side of comfort-focused care and the experiences of individuals, families and caregivers."
      />

      <BlogTopicContent
        intro="Conversations around serious illness, changing needs and comfort-focused support can involve difficult questions and deeply personal experiences. This space approaches those conversations with care and respect."
        sections={[
          {
            title: "Comfort and dignity",
            text: "Explore the importance of listening to people's preferences, experiences and priorities as circumstances change.",
          },
          {
            title: "Family experiences",
            text: "Understand some of the emotional and practical dimensions families may encounter while supporting someone with significant care needs.",
          },
          {
            title: "Communication and support",
            text: "Explore the role of open, respectful conversations between individuals, families, caregivers and appropriate healthcare professionals.",
          },
          {
            title: "Being present",
            text: "Consider the value of companionship, comfort and compassionate support alongside professional healthcare.",
          },
        ]}
      />

      <BlogTopicGuidance />

      <BlogTopicCta
        title="Return to the wider MercyCare care and wellness collection."
        href="/blog/care-wellness"
        label="Back to Care & Wellness"
      />
    </>
  );
}
