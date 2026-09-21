import BlogResourceHub from "@/components/blog/resources/BlogResourceHub";

export default function CareGuidesPage() {
  return (
    <BlogResourceHub
      eyebrow="Resources · Care Guides"
      title="Care guides for everyday conversations and support."
      description="A future collection of practical material exploring care at home, support, planning and the everyday questions that families may encounter."
      href="/blog/resources"
      focus={[
        "Understanding care at home",
        "Everyday care considerations",
        "Preparing for care conversations",
        "Navigating support",
        "Care planning perspectives",
        "Supporting dignity in care",
      ]}
    />
  );
}
