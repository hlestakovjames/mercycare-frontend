import VolunteerSectionPage from "@/components/volunteer/VolunteerSectionPage";

export default function VolunteerAreasPage() {
  return (
    <VolunteerSectionPage
      eyebrow="Volunteer Areas"
      title="Different skills can support different kinds of work."
      description="Volunteer opportunities may span community engagement, programs, activities, events, communications, technology, and practical support."
      items={[
        {
          title: "Community Outreach",
          description:
            "Support community-facing activities and engagement initiatives.",
        },
        {
          title: "Health & Wellness Activities",
          description:
            "Support appropriate wellness, education, and community activities.",
        },
        {
          title: "Senior Support",
          description:
            "Contribute to activities connected with senior wellness and community connection.",
        },
        {
          title: "Family & Caregiver Support",
          description:
            "Support activities focused on families and caregivers.",
        },
        {
          title: "Awareness & Education",
          description:
            "Help with responsible awareness and educational activities.",
        },
        {
          title: "Events & Activities",
          description:
            "Support planning, coordination, participation, and community events.",
        },
        {
          title: "Communications & Media",
          description:
            "Contribute appropriate writing, photography, design, social media, or media support.",
        },
        {
          title: "Digital & ICT",
          description:
            "Support suitable technology, digital content, website, or information-management activities.",
        },
        {
          title: "Administration & Support",
          description:
            "Assist with appropriate organizational, administrative, or logistical activities.",
        },
      ]}
    />
  );
}
