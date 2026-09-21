import BlogResourceHub from "@/components/blog/resources/BlogResourceHub";

export default function FamilyResourcesPage() {
  return (
    <BlogResourceHub
      eyebrow="Resources · Family Resources"
      title="Resources for families, relationships and everyday wellbeing."
      description="A future collection focused on family life, parenting, supporting loved ones and creating stronger, more supportive environments around care and wellbeing."
      href="/blog/resources"
      focus={[
        "Family wellbeing",
        "Parenting and child wellbeing",
        "Supporting loved ones",
        "Family conversations",
        "Building supportive environments",
        "Community support",
      ]}
    />
  );
}
