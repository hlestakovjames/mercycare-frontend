import BlogTopicHero from "@/components/blog/care-wellness/topics/BlogTopicHero";
import BlogTopicContent from "@/components/blog/care-wellness/topics/BlogTopicContent";
import BlogTopicGuidance from "@/components/blog/care-wellness/topics/BlogTopicGuidance";
import BlogTopicCta from "@/components/blog/care-wellness/topics/BlogTopicCta";

export default function HealthyLivingPage() {
  return (
    <>
      <BlogTopicHero
        eyebrow="Care & Wellness · Healthy Living"
        title="Healthy living, viewed through everyday life."
        description="Explore practical conversations about wellbeing, routines, relationships and the everyday choices that can contribute to a healthier life."
      />

      <BlogTopicContent
        intro="Healthy living is not one-size-fits-all. It is shaped by individual circumstances, family life, environment, access to information and the choices people make every day."
        sections={[
          {
            title: "Everyday wellbeing",
            text: "Explore stories and conversations about routines, rest, movement, relationships and other parts of everyday wellbeing.",
          },
          {
            title: "Healthy habits",
            text: "Discover editorial perspectives on building sustainable habits without reducing wellbeing to a checklist or a single measure.",
          },
          {
            title: "Family wellbeing",
            text: "Look at how family routines, responsibilities and relationships can influence the way people experience wellbeing.",
          },
          {
            title: "Community health",
            text: "Understand how community environments, awareness and shared participation can shape conversations around health.",
          },
        ]}
      />

      <BlogTopicGuidance />

      <BlogTopicCta
        title="Explore more conversations about care and wellbeing."
        href="/blog/care-wellness"
        label="Back to Care & Wellness"
      />
    </>
  );
}
