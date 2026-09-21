import GallerySectionPage from "@/components/gallery/GallerySectionPage";

export default function CampaignsAwarenessPage() {
  return (
    <GallerySectionPage
      eyebrow="Campaigns & Awareness"
      title="Visual stories that raise awareness."
      description="Explore visual content connected to MercyCare awareness initiatives, community education, and campaigns."
      items={[
        {
          title: "Health Awareness",
          description:
            "Visual content supporting health and wellness awareness.",
        },
        {
          title: "Community Awareness",
          description:
            "Stories connected to community education and engagement.",
        },
        {
          title: "Campaign Moments",
          description:
            "Visual highlights from MercyCare awareness initiatives.",
        },
      ]}
    />
  );
}
