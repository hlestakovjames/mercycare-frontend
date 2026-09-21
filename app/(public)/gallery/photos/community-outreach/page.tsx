import GallerySectionPage from "@/components/gallery/GallerySectionPage";

export default function CommunityOutreachGalleryPage() {
  return (
    <GallerySectionPage
      eyebrow="Photo Gallery · Community & Outreach"
      title="Community & Outreach"
      description="Visual moments from MercyCare's engagement with communities, families, partners, and local initiatives."
      items={[
        {
          title: "Community Engagement",
          description:
            "Moments of connection, participation, and community engagement.",
        },
        {
          title: "Outreach",
          description:
            "Images from outreach activities and community-facing initiatives.",
        },
        {
          title: "Community Connections",
          description:
            "People, conversations, partnerships, and moments that bring communities together.",
        },
      ]}
    />
  );
}
