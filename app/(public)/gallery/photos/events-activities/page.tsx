import GallerySectionPage from "@/components/gallery/GallerySectionPage";

export default function EventsActivitiesGalleryPage() {
  return (
    <GallerySectionPage
      eyebrow="Photo Gallery · Events & Activities"
      title="Events & Activities"
      description="Explore photographs from MercyCare events, activities, gatherings, awareness initiatives, and community experiences."
      items={[
        {
          title: "Events",
          description:
            "Visual moments from MercyCare events and community gatherings.",
        },
        {
          title: "Activities",
          description:
            "Images documenting activities across MercyCare's areas of engagement.",
        },
        {
          title: "Community Experiences",
          description:
            "Moments that capture participation, connection, and shared experiences.",
        },
      ]}
    />
  );
}
