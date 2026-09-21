import CareersSectionPage from "@/components/careers/CareersSectionPage";

export default function HowWeHirePage() {
  return (
    <CareersSectionPage
      title="How we hire"
      description="Our recruitment process is designed to help MercyCare understand applicants and help applicants understand the opportunity they are applying for."
      intro="The exact process may vary depending on the position. A published vacancy will provide any role-specific instructions that applicants need to follow."
      sections={[
        {
          title: "1. Explore the opportunity",
          description:
            "Review the published position, responsibilities, qualifications, experience requirements, and application instructions.",
        },
        {
          title: "2. Submit your application",
          description:
            "Provide the requested information and supporting documents through the designated application process.",
        },
        {
          title: "3. Application review",
          description:
            "Submitted applications may be reviewed against the requirements and needs of the published position.",
        },
        {
          title: "4. Further assessment",
          description:
            "Depending on the position, shortlisted applicants may be invited for an interview, assessment, or another appropriate stage.",
        },
        {
          title: "5. Selection",
          description:
            "Applicants who progress through the recruitment process will receive the appropriate communication regarding the outcome.",
        },
        {
          title: "6. Next steps",
          description:
            "Successful candidates can then proceed through the relevant onboarding and engagement process.",
        },
      ]}
    />
  );
}
