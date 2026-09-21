import BlogEditorialHub from "@/components/blog/editorial/BlogEditorialHub";

export default function EditorialStandardsPage() {
  return (
    <BlogEditorialHub
      eyebrow="Editorial · Standards"
      title="Clear, respectful and responsible publishing."
      description="This page establishes the direction for future MercyCare Media Center editorial standards. Formal policies can be expanded as the publishing operation develops."
      sections={[
        {
          title: "Accuracy and clarity",
          description:
            "Published material should aim to communicate clearly and distinguish established information from personal perspectives or commentary.",
        },
        {
          title: "Respect and dignity",
          description:
            "Stories involving people, families and communities should be approached with sensitivity and respect.",
        },
        {
          title: "Attribution and context",
          description:
            "Contributors, perspectives and relevant context should be identified so readers can understand the source and nature of information.",
        },
        {
          title: "Responsible health communication",
          description:
            "Health-related content should avoid presenting general educational material as personalised medical advice.",
        },
        {
          title: "Corrections and updates",
          description:
            "The future editorial workflow can provide clear mechanisms for correcting or updating published material when necessary.",
        },
        {
          title: "Visual responsibility",
          description:
            "Photography and multimedia should be used thoughtfully, with appropriate context and respect for the people represented.",
        },
      ]}
    />
  );
}
