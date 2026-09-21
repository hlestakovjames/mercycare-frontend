import BlogResourceHub from "@/components/blog/resources/BlogResourceHub";

export default function WellnessGuidesPage() {
  return (
    <BlogResourceHub
      eyebrow="Resources · Wellness Guides"
      title="Wellness resources for everyday life."
      description="A future collection exploring everyday wellbeing, healthy living, connection and perspectives on supporting wellbeing across different stages of life."
      href="/blog/resources"
      focus={[
        "Everyday wellbeing",
        "Healthy living perspectives",
        "Senior wellness",
        "Emotional and social wellbeing",
        "Staying connected",
        "Community wellbeing",
      ]}
    />
  );
}
