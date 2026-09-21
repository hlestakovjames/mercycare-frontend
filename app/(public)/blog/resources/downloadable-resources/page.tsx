import BlogResourceHub from "@/components/blog/resources/BlogResourceHub";

export default function DownloadableResourcesPage() {
  return (
    <BlogResourceHub
      eyebrow="Resources · Downloads"
      title="A growing library of downloadable resources."
      description="This space is designed for future MercyCare guides, checklists, information sheets and other downloadable material that readers can keep and revisit."
      href="/blog/resources"
      focus={[
        "Care guides",
        "Wellness guides",
        "Family resources",
        "Caregiver resources",
        "Checklists and practical tools",
        "Future MercyCare publications",
      ]}
    />
  );
}
