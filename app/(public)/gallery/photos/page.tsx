import GallerySectionPage from "@/components/gallery/GallerySectionPage";

const photoCategories = [
  {
    title: "Community & Outreach",
    description:
      "Visual stories from MercyCare's community engagement, outreach, and connection with families and communities.",
    href: "/gallery/photos/community-outreach",
  },
  {
    title: "Health & Wellness",
    description:
      "Moments highlighting wellness, healthy living, education, and community-focused wellbeing.",
    href: "/gallery/photos/health-wellness",
  },
  {
    title: "Tuko Pamoja",
    description:
      "Images and visual stories from MercyCare's senior wellness work and Tuko Pamoja initiatives.",
    href: "/gallery/photos/tuko-pamoja",
  },
  {
    title: "Mama na Mtoto",
    description:
      "Visual stories connected to maternal, child, family, and community wellbeing.",
    href: "/gallery/photos/mama-na-mtoto",
  },
  {
    title: "Events & Activities",
    description:
      "Moments from MercyCare events, activities, gatherings, and community experiences.",
    href: "/gallery/photos/events-activities",
  },
];

export default function PhotoGalleryPage() {
  return (
    <GallerySectionPage
      eyebrow="Photo Gallery"
      title="Stories captured through images."
      description="Explore photographs that document MercyCare's programs, community engagement, wellbeing initiatives, and the people who make the journey meaningful."
      items={photoCategories}
    />
  );
}
