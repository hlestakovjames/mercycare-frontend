import BlogFeatureHub from "@/components/blog/features/BlogFeatureHub";

export default function PhotoFeaturesPage() {
  return (
    <BlogFeatureHub
      eyebrow="Features · Photo Features"
      title="Let the images tell part of the story."
      intro="Image-led editorial features designed to document people, places, moments and community experiences through photography."
      sections={[
        {
          title: "Visual narratives",
          text: "Future photo features can use carefully selected images to communicate moments and experiences that words alone may not capture.",
        },
        {
          title: "People and places",
          text: "Photography can help readers connect with the environments, communities and people connected to a story.",
        },
        {
          title: "Captions with context",
          text: "Images should be accompanied by clear captions and relevant context so that visual storytelling remains understandable and responsible.",
        },
        {
          title: "Future multimedia",
          text: "Photo features can eventually connect with video, audio, interviews and related editorial stories when those formats add genuine value.",
        },
      ]}
    />
  );
}
