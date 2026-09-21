import BlogMediaHub from "@/components/blog/media/BlogMediaHub";

export default function VideosPage() {
  return (
    <BlogMediaHub
      eyebrow="Media · Videos"
      title="Watch the stories unfold."
      intro="A future collection for video stories, conversations, explainers and visual coverage connected to MercyCare and its communities."
      sections={[
        {
          title: "Video stories",
          text: "Future productions can bring people, places, programmes and community experiences into a visual storytelling format.",
        },
        {
          title: "Video conversations",
          text: "Interviews and conversations can be presented through video when seeing and hearing the participants adds meaningful context.",
        },
        {
          title: "Explainers",
          text: "Selected topics can be presented visually to make general information easier to understand and navigate.",
        },
        {
          title: "Field coverage",
          text: "Future field videos may document activities and moments while respecting privacy, consent and the context of the people involved.",
        },
      ]}
    />
  );
}
