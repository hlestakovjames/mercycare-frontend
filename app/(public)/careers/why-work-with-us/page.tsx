import CareersSectionPage from "@/components/careers/CareersSectionPage";

export default function WhyWorkWithUsPage() {
  return (
    <CareersSectionPage
      title="Why work with MercyCare?"
      description="MercyCare brings together people who want their work to contribute to care, dignity, wellbeing, and community support."
      intro="Working with MercyCare can involve different responsibilities and professional backgrounds. What connects the work is a shared focus on meaningful service and responsible contribution."
      sections={[
        {
          title: "Purpose-driven work",
          description:
            "Contribute to work connected to care, wellbeing, families, older adults, and communities.",
        },
        {
          title: "Collaboration",
          description:
            "Work alongside people with different responsibilities and perspectives across the organisation.",
        },
        {
          title: "Learning & growth",
          description:
            "Develop practical experience and continue building skills relevant to your role and responsibilities.",
        },
        {
          title: "Meaningful contribution",
          description:
            "Bring your professional, technical, organisational, creative, or community skills to work that serves people.",
        },
      ]}
    />
  );
}
