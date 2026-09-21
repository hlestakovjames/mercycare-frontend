import BlogTopicHero from "@/components/blog/care-wellness/topics/BlogTopicHero";
import BlogTopicContent from "@/components/blog/care-wellness/topics/BlogTopicContent";
import BlogTopicGuidance from "@/components/blog/care-wellness/topics/BlogTopicGuidance";
import BlogTopicCta from "@/components/blog/care-wellness/topics/BlogTopicCta";

export default function SeniorWellnessPage() {
  return (
    <>
      <BlogTopicHero
        eyebrow="Care & Wellness · Senior Wellness"
        title="Ageing with dignity, connection and purpose."
        description="Stories and perspectives exploring the experiences of older adults, families and communities as they navigate ageing and wellbeing."
      />

      <BlogTopicContent
        intro="Senior wellness involves more than physical health. Connection, dignity, meaningful participation, independence and supportive relationships can all be important parts of an older person's experience."
        sections={[
          {
            title: "Ageing and dignity",
            text: "Explore conversations about respecting older adults as individuals with their own experiences, preferences, relationships and aspirations.",
          },
          {
            title: "Connection and belonging",
            text: "Discover stories about family, friendship, community participation and the importance of meaningful social connection.",
          },
          {
            title: "Everyday independence",
            text: "Look at the everyday realities of maintaining participation, choice and independence while recognising when additional support may be helpful.",
          },
          {
            title: "Family perspectives",
            text: "Hear about the experiences of families as they support older relatives and navigate changing needs across different stages of life.",
          },
        ]}
      />

      <BlogTopicGuidance />

      <BlogTopicCta
        title="Continue exploring MercyCare's care and wellness conversations."
        href="/blog/care-wellness"
        label="Back to Care & Wellness"
      />
    </>
  );
}
