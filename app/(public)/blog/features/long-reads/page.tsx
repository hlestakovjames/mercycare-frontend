import BlogFeatureHub from "@/components/blog/features/BlogFeatureHub";

export default function LongReadsPage() {
  return (
    <BlogFeatureHub
      eyebrow="Features · Long Reads"
      title="More time for the stories that deserve it."
      intro="Long-form editorial pieces that explore important subjects with greater depth, context and perspective."
      sections={[
        {
          title: "Deep context",
          text: "Future long reads can provide background and context that would be difficult to capture in a shorter article.",
        },
        {
          title: "Multiple perspectives",
          text: "Where appropriate, long-form stories can bring together different experiences and viewpoints around the same subject.",
        },
        {
          title: "Human stories",
          text: "People and their experiences can remain central while the wider circumstances surrounding a story are explained.",
        },
        {
          title: "Useful depth",
          text: "Longer stories should leave readers with a clearer understanding rather than simply giving them more information.",
        },
      ]}
    />
  );
}
