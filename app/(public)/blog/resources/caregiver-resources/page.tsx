import BlogResourceHub from "@/components/blog/resources/BlogResourceHub";

export default function CaregiverResourcesPage() {
  return (
    <BlogResourceHub
      eyebrow="Resources · Caregiver Resources"
      title="Resources for people who care for others."
      description="A future collection designed around everyday caregiving, caregiver wellbeing, family perspectives and the practical realities of supporting a loved one."
      href="/blog/resources"
      focus={[
        "Everyday caregiving",
        "Caregiver wellbeing",
        "Family caregiving",
        "Practical caregiving considerations",
        "Finding support",
        "Sharing responsibility",
      ]}
    />
  );
}
