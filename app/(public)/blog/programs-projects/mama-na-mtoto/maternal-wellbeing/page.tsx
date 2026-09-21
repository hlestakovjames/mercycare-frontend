import BlogTopicHero from "@/components/blog/care-wellness/topics/BlogTopicHero";
import BlogTopicContent from "@/components/blog/care-wellness/topics/BlogTopicContent";
import BlogTopicGuidance from "@/components/blog/care-wellness/topics/BlogTopicGuidance";
import BlogTopicCta from "@/components/blog/care-wellness/topics/BlogTopicCta";

export default function MaternalWellbeingPage() {
  return (
    <>
      <BlogTopicHero
        eyebrow="Mama na Mtoto · Maternal Wellbeing"
        title="Making space for the wellbeing of mothers."
        description="Explore editorial conversations around maternal wellbeing, support, family life and the experiences surrounding motherhood."
      />

      <BlogTopicContent
        intro="Maternal wellbeing is connected to physical, emotional, social and family experiences. This collection provides room for those wider conversations."
        sections={[
          {
            title: "Motherhood experiences",
            text: "Explore the diversity of experiences that can accompany motherhood and family life.",
          },
          {
            title: "Support systems",
            text: "Look at the role of family, community and appropriate professional support.",
          },
          {
            title: "Everyday wellbeing",
            text: "Consider routines, relationships, rest, connection and other dimensions of everyday wellbeing.",
          },
          {
            title: "Listening to mothers",
            text: "Create space for mothers to share perspectives about their own experiences and priorities.",
          },
        ]}
      />

      <BlogTopicGuidance />

      <BlogTopicCta
        title="Continue exploring Mama na Mtoto."
        href="/blog/programs-projects/mama-na-mtoto"
        label="Back to Mama na Mtoto"
      />
    </>
  );
}
