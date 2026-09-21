import GallerySectionPage from "@/components/gallery/GallerySectionPage";

export default function TukoPamojaGalleryPage() {
  return (
    <GallerySectionPage
      eyebrow="Photo Gallery · Tuko Pamoja"
      title="Tuko Pamoja"
      description="Visual stories from MercyCare's senior wellness journey, community connections, and moments of dignity and support."
      items={[
        {
          title: "Senior Wellness",
          description:
            "Moments connected to senior wellbeing and supportive care.",
        },
        {
          title: "Community Moments",
          description:
            "Stories of connection, participation, and shared experiences.",
        },
        {
          title: "Program Stories",
          description:
            "Visual moments documenting the journey of Tuko Pamoja.",
        },
      ]}
    />
  );
}
