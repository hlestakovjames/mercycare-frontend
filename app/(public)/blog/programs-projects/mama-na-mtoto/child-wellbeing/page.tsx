import BlogTopicHero from "@/components/blog/care-wellness/topics/BlogTopicHero";
import BlogTopicContent from "@/components/blog/care-wellness/topics/BlogTopicContent";
import BlogTopicGuidance from "@/components/blog/care-wellness/topics/BlogTopicGuidance";
import BlogTopicCta from "@/components/blog/care-wellness/topics/BlogTopicCta";

export default function ChildWellbeingPage() {
  return (
    <>
      <BlogTopicHero
        eyebrow="Mama na Mtoto · Child Wellbeing"
        title="Looking at child wellbeing in the wider family context."
        description="Explore conversations about childhood, supportive environments, family relationships and children's wider wellbeing."
      />

      <BlogTopicContent
        intro="Children experience wellbeing within relationships and environments. This collection considers those wider contexts while avoiding one-size-fits-all assumptions."
        sections={[
          {
            title: "Growing and developing",
            text: "Explore broader conversations about children's everyday experiences and development.",
          },
          {
            title: "Family environments",
            text: "Look at how relationships, routines and support can shape children's experiences.",
          },
          {
            title: "Community environments",
            text: "Consider the role communities can play in creating supportive spaces for children and families.",
          },
          {
            title: "Listening to families",
            text: "Create room for family perspectives on children's wellbeing and everyday needs.",
          },
        ]}
      />

      <BlogTopicGuidance />

      <BlogTopicCta
        title="Return to the Mama na Mtoto editorial hub."
        href="/blog/programs-projects/mama-na-mtoto"
        label="Back to Mama na Mtoto"
      />
    </>
  );
}
