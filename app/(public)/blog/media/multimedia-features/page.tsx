import BlogMediaHub from "@/components/blog/media/BlogMediaHub";

export default function MultimediaFeaturesPage() {
  return (
    <BlogMediaHub
      eyebrow="Media · Multimedia Features"
      title="When one format is not enough."
      intro="Future immersive stories that bring writing, photography, audio, video and other media together around one subject."
      sections={[
        {
          title: "Connected storytelling",
          text: "Multiple formats can work together when each contributes something different to the understanding of a subject.",
        },
        {
          title: "Interactive experiences",
          text: "Future editorial projects may include interactive elements where they genuinely improve exploration or understanding.",
        },
        {
          title: "Multiple perspectives",
          text: "Multimedia features can connect interviews, voices, photographs and written stories into one broader narrative.",
        },
        {
          title: "Editorial discipline",
          text: "Additional media should strengthen the story rather than distract from it, with clear attribution and appropriate context throughout.",
        },
      ]}
    />
  );
}
