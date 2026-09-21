import VolunteerSectionPage from "@/components/volunteer/VolunteerSectionPage";

export default function VolunteerWithUsPage() {
  return (
    <VolunteerSectionPage
      eyebrow="Volunteer With MercyCare"
      title="There are many ways to contribute."
      description="Learn how volunteers can support MercyCare's community-centered work through time, skills, participation, and practical support."
      items={[
        {
          title: "Community participation",
          description:
            "Support activities that bring MercyCare closer to families and communities.",
        },
        {
          title: "Skills and expertise",
          description:
            "Contribute professional, creative, technical, administrative, or organizational skills where appropriate.",
        },
        {
          title: "Events and activities",
          description:
            "Help with community events, awareness activities, gatherings, and other organized initiatives.",
        },
        {
          title: "Awareness and education",
          description:
            "Support responsible community education and awareness activities.",
        },
        {
          title: "Program support",
          description:
            "Contribute to selected activities connected with MercyCare programs and projects.",
        },
        {
          title: "Community connection",
          description:
            "Help strengthen relationships between MercyCare, volunteers, families, partners, and communities.",
        },
      ]}
    />
  );
}
