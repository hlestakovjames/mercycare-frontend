import BlogTopicHero from "@/components/blog/care-wellness/topics/BlogTopicHero";
import BlogTopicContent from "@/components/blog/care-wellness/topics/BlogTopicContent";
import BlogTopicGuidance from "@/components/blog/care-wellness/topics/BlogTopicGuidance";
import BlogTopicCta from "@/components/blog/care-wellness/topics/BlogTopicCta";

export default function FamilyCaregivingPage() {
  return (
    <>
      <BlogTopicHero
        eyebrow="Caregiving · Family Caregiving"
        title="The everyday reality of caring for someone you love."
        description="Explore family caregiving stories, relationships, responsibilities and the experiences that often happen behind the scenes."
      />

      <BlogTopicContent
        intro="Family caregiving can take many forms. It can involve small daily acts, major changes in routine or long periods of supporting someone through changing circumstances."
        sections={[
          {
            title: "Everyday responsibilities",
            text: "Explore how caregiving can become part of household routines, responsibilities and family life.",
          },
          {
            title: "Family relationships",
            text: "Look at the ways caregiving can influence communication, roles, expectations and relationships within families.",
          },
          {
            title: "Sharing responsibility",
            text: "Consider conversations around involving family members and building appropriate circles of support.",
          },
          {
            title: "Changing needs",
            text: "Explore how families may adapt as the needs, preferences and circumstances of the person receiving care change.",
          },
        ]}
      />

      <BlogTopicGuidance />

      <BlogTopicCta
        title="Continue exploring the wider Caregiving collection."
        href="/blog/care-wellness/caregiving"
        label="Back to Caregiving"
      />
    </>
  );
}
