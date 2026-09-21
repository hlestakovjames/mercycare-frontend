import BlogTukoPamojaHero from "@/components/blog/programs-projects/tuko-pamoja/BlogTukoPamojaHero";
import BlogTukoPamojaSections from "@/components/blog/programs-projects/tuko-pamoja/BlogTukoPamojaSections";
import BlogTopicGuidance from "@/components/blog/care-wellness/topics/BlogTopicGuidance";
import BlogTopicCta from "@/components/blog/care-wellness/topics/BlogTopicCta";

export default function TukoPamojaEditorialPage() {
  return (
    <>
      <BlogTukoPamojaHero />
      <BlogTukoPamojaSections />
      <BlogTopicGuidance />
      <BlogTopicCta
        title="Return to the wider Programs & Projects collection."
        href="/blog/programs-projects"
        label="Back to Programs & Projects"
      />
    </>
  );
}
