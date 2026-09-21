import GallerySectionPage from "@/components/gallery/GallerySectionPage";

export default function HealthWellnessGalleryPage() {
  return (
    <GallerySectionPage
      eyebrow="Photo Gallery · Health & Wellness"
      title="Health & Wellness"
      description="Explore visual stories around wellbeing, healthy living, health education, and community wellness."
      items={[
        {
          title: "Wellness Moments",
          description:
            "Visual stories celebrating healthy living and everyday wellbeing.",
        },
        {
          title: "Health Education",
          description:
            "Moments from health awareness and educational engagement.",
        },
        {
          title: "Community Wellness",
          description:
            "Images reflecting MercyCare's community-focused approach to wellbeing.",
        },
      ]}
    />
  );
}
