import BlogMediaHub from "@/components/blog/media/BlogMediaHub";

export default function PhotoStoriesPage() {
  return (
    <BlogMediaHub
      eyebrow="Media · Photo Stories"
      title="Stories told through images."
      intro="A photography-led collection documenting people, places, moments and experiences connected to MercyCare and its communities."
      sections={[
        {
          title: "People",
          text: "Photography can bring human experiences and community perspectives closer to the audience.",
        },
        {
          title: "Places",
          text: "Images can help readers understand the environments and settings in which stories take place.",
        },
        {
          title: "Moments",
          text: "Photo stories can preserve meaningful moments from activities, events and community engagement.",
        },
        {
          title: "Context",
          text: "Captions, dates and relevant context should accompany images so that visual storytelling remains clear and responsible.",
        },
      ]}
    />
  );
}
