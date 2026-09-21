import CareersSectionPage from "@/components/careers/CareersSectionPage";

export default function CareersRequirementsPage() {
  return (
    <CareersSectionPage
      title="Career requirements"
      description="Requirements vary according to the position. Always review the specific vacancy for the qualifications, skills, experience, and documents requested."
      intro="The information below provides general guidance rather than a universal requirement for every MercyCare role."
      sections={[
        {
          title: "Education & qualifications",
          description:
            "Some roles may require specific academic, professional, technical, or vocational qualifications.",
        },
        {
          title: "Relevant experience",
          description:
            "Depending on the role, previous professional, volunteer, community, technical, or sector experience may be relevant.",
        },
        {
          title: "Skills",
          description:
            "Communication, teamwork, organisation, digital skills, problem-solving, and role-specific capabilities may be important.",
        },
        {
          title: "Supporting documents",
          description:
            "A vacancy may request a CV, cover letter, certificates, references, portfolio, or other relevant documentation.",
        },
        {
          title: "Role-specific requirements",
          description:
            "Certain positions may have additional requirements. These will be stated directly in the relevant vacancy.",
        },
        {
          title: "Accuracy of information",
          description:
            "Applicants should provide accurate information and only submit documents and claims that they can reasonably support.",
        },
      ]}
    />
  );
}
