import GallerySectionPage from "@/components/gallery/GallerySectionPage";

export default function MamaNaMtotoGalleryPage() {
  return (
    <GallerySectionPage
      eyebrow="Photo Gallery · Mama na Mtoto"
      title="Mama na Mtoto"
      description="Visual stories connected to maternal, child, family, and community wellbeing."
      items={[
        {
          title: "Maternal Wellbeing",
          description:
            "Visual stories around maternal wellbeing and supportive community engagement.",
        },
        {
          title: "Child Wellbeing",
          description:
            "Moments connected to children, families, and healthy development.",
        },
        {
          title: "Family & Community",
          description:
            "Stories showing the role of families and communities in wellbeing.",
        },
      ]}
    />
  );
}
