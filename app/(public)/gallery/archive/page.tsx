import GallerySectionPage from "@/components/gallery/GallerySectionPage";

export default function GalleryArchivePage() {
  return (
    <GallerySectionPage
      eyebrow="Gallery Archive"
      title="Explore the MercyCare visual archive."
      description="Browse past visual stories and moments from MercyCare's journey as the collection continues to grow."
      items={[
        {
          title: "Past Collections",
          description:
            "Previous collections documenting MercyCare activities and initiatives.",
        },
        {
          title: "Program Archive",
          description:
            "Archived visual stories connected to programs and projects.",
        },
        {
          title: "Community Archive",
          description:
            "Past community moments, gatherings, and engagement stories.",
        },
      ]}
    />
  );
}
