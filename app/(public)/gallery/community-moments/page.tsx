import GallerySectionPage from "@/components/gallery/GallerySectionPage";

export default function CommunityMomentsPage() {
  return (
    <GallerySectionPage
      eyebrow="Community Moments"
      title="Moments that bring people together."
      description="A collection of meaningful moments from MercyCare's relationships with families, communities, volunteers, and partners."
      items={[
        {
          title: "Together",
          description:
            "Moments of connection, participation, and shared experiences.",
        },
        {
          title: "Volunteers",
          description:
            "Visual stories celebrating people who contribute their time and energy.",
        },
        {
          title: "Partnerships",
          description:
            "Moments reflecting collaboration and shared community goals.",
        },
      ]}
    />
  );
}
