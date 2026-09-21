import GallerySectionPage from "@/components/gallery/GallerySectionPage";

export default function StoriesInPicturesPage() {
  return (
    <GallerySectionPage
      eyebrow="Stories in Pictures"
      title="More than a photograph."
      description="Discover visual stories that bring together people, places, programs, and moments from the MercyCare journey."
      items={[
        {
          title: "Community Stories",
          description:
            "Visual narratives from MercyCare's community engagement.",
        },
        {
          title: "Care & Wellness Stories",
          description:
            "Images that reflect care, dignity, wellbeing, and connection.",
        },
        {
          title: "Program Stories",
          description:
            "Visual journeys from MercyCare programs and initiatives.",
        },
      ]}
    />
  );
}
