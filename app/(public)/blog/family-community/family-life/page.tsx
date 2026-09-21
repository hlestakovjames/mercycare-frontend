import BlogTopicHero from "@/components/blog/care-wellness/topics/BlogTopicHero";
import BlogTopicContent from "@/components/blog/care-wellness/topics/BlogTopicContent";
import BlogTopicGuidance from "@/components/blog/care-wellness/topics/BlogTopicGuidance";
import BlogTopicCta from "@/components/blog/care-wellness/topics/BlogTopicCta";

export default function FamilyLifePage() {
  return (
    <>
      <BlogTopicHero
        eyebrow="Family & Community · Family Life"
        title="The everyday stories that make a family."
        description="Explore relationships, responsibilities, routines, connection and the changing experiences of family life."
      />

      <BlogTopicContent
        intro="Every family has its own rhythms, responsibilities and relationships. Family Life explores those experiences with an emphasis on connection, understanding and the realities of everyday life."
        sections={[
          {
            title: "Relationships",
            text: "Explore how communication, connection and changing responsibilities shape family relationships.",
          },
          {
            title: "Everyday routines",
            text: "Look at the ordinary routines and responsibilities that influence family wellbeing and quality of life.",
          },
          {
            title: "Families through change",
            text: "Explore how families adapt when circumstances, responsibilities or care needs change.",
          },
          {
            title: "Connection and support",
            text: "Consider the different ways families create support, belonging and connection in everyday life.",
          },
        ]}
      />

      <BlogTopicGuidance />

      <BlogTopicCta
        title="Explore more Family & Community stories."
        href="/blog/family-community"
        label="Back to Family & Community"
      />
    </>
  );
}
