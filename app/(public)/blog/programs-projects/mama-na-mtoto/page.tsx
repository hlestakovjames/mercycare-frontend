import BlogMamaNaMtotoHero from "@/components/blog/programs-projects/mama-na-mtoto/BlogMamaNaMtotoHero";
import BlogMamaNaMtotoSections from "@/components/blog/programs-projects/mama-na-mtoto/BlogMamaNaMtotoSections";
import BlogTopicGuidance from "@/components/blog/care-wellness/topics/BlogTopicGuidance";
import BlogTopicCta from "@/components/blog/care-wellness/topics/BlogTopicCta";

export default function MamaNaMtotoEditorialPage() {
  return (
    <>
      <BlogMamaNaMtotoHero />
      <BlogMamaNaMtotoSections />
      <BlogTopicGuidance />
      <BlogTopicCta
        title="Return to the wider Programs & Projects collection."
        href="/blog/programs-projects"
        label="Back to Programs & Projects"
      />
    </>
  );
}
