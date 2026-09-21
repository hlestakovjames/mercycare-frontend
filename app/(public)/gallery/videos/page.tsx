import GallerySectionPage from "@/components/gallery/GallerySectionPage";

export default function VideosPage() {
  return (
    <GallerySectionPage
      eyebrow="Videos"
      title="Watch the MercyCare story."
      description="Explore video content that brings MercyCare programs, people, community experiences, and stories to life."
      items={[
        {
          title: "Community Stories",
          description:
            "Video stories highlighting community experiences and connections.",
        },
        {
          title: "Programs & Projects",
          description:
            "Visual content connected to MercyCare programs and projects.",
        },
        {
          title: "Events & Activities",
          description:
            "Video moments from MercyCare events and activities.",
        },
      ]}
    />
  );
}
