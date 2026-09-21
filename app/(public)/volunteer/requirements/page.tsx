import VolunteerSectionPage from "@/components/volunteer/VolunteerSectionPage";

export default function VolunteerRequirementsPage() {
  return (
    <VolunteerSectionPage
      eyebrow="Volunteer Requirements"
      title="Understand what responsible volunteering involves."
      description="Requirements may vary according to the opportunity. Volunteers should be prepared to follow the relevant guidance, expectations, and participation requirements."
      items={[
        {
          title: "Commitment",
          description:
            "Be clear about the time and availability you can realistically contribute.",
        },
        {
          title: "Respect and professionalism",
          description:
            "Treat community members, families, volunteers, staff, and partners with dignity and respect.",
        },
        {
          title: "Reliability",
          description:
            "Communicate clearly and honour agreed volunteer commitments.",
        },
        {
          title: "Confidentiality",
          description:
            "Respect the privacy of information encountered during volunteer activities.",
        },
        {
          title: "Following guidance",
          description:
            "Follow the instructions and participation requirements relevant to your assigned activity.",
        },
        {
          title: "Opportunity-specific requirements",
          description:
            "Some volunteer opportunities may have additional requirements based on the nature of the activity.",
        },
      ]}
    />
  );
}
