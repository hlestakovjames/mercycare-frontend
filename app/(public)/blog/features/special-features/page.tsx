import BlogFeatureHub from "@/components/blog/features/BlogFeatureHub";

export default function SpecialFeaturesPage() {
  return (
    <BlogFeatureHub
      eyebrow="Features · Special Features"
      title="Stories built around moments that matter."
      intro="Themed editorial features designed to bring together stories, perspectives and media around a particular subject or moment."
      sections={[
        {
          title: "Themed storytelling",
          text: "Special features can bring several related stories together around a clearly defined editorial theme.",
        },
        {
          title: "Moments and milestones",
          text: "Future collections may explore important moments in MercyCare's work or community engagement when there is meaningful context to share.",
        },
        {
          title: "Different formats",
          text: "A special feature can combine written stories, interviews, photography, video or audio where those formats strengthen the narrative.",
        },
        {
          title: "Editorial clarity",
          text: "Each collection should clearly distinguish reported information, personal experience, organisational perspectives and general guidance.",
        },
      ]}
    />
  );
}
