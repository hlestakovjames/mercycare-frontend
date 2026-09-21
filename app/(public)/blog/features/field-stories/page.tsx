import BlogFeatureHub from "@/components/blog/features/BlogFeatureHub";

export default function FieldStoriesPage() {
  return (
    <BlogFeatureHub
      eyebrow="Features · Field Stories"
      title="Closer to the people and places behind the work."
      intro="A future collection for stories shaped by community experiences, observations and moments connected to MercyCare's work."
      sections={[
        {
          title: "Stories from the field",
          text: "Future field stories can document experiences and observations from activities, programmes and community engagement.",
        },
        {
          title: "Place matters",
          text: "The setting of a story can help readers understand the people, circumstances and community context surrounding it.",
        },
        {
          title: "People and perspective",
          text: "Field-based storytelling can create space for people to describe their experiences rather than speaking for them.",
        },
        {
          title: "Responsible documentation",
          text: "Stories should respect privacy, consent and context while avoiding unsupported claims about outcomes or experiences.",
        },
      ]}
    />
  );
}
