import BlogCareWellnessHero from "@/components/blog/care-wellness/BlogCareWellnessHero";
import BlogCareWellnessIntro from "@/components/blog/care-wellness/BlogCareWellnessIntro";
import BlogCareWellnessTopics from "@/components/blog/care-wellness/BlogCareWellnessTopics";
import BlogCareWellnessCaregiving from "@/components/blog/care-wellness/BlogCareWellnessCaregiving";
import BlogCareWellnessEditorial from "@/components/blog/care-wellness/BlogCareWellnessEditorial";
import BlogCareWellnessCta from "@/components/blog/care-wellness/BlogCareWellnessCta";

export default function CareWellnessPage() {
  return (
    <>
      <BlogCareWellnessHero />
      <BlogCareWellnessIntro />
      <BlogCareWellnessTopics />
      <BlogCareWellnessCaregiving />
      <BlogCareWellnessEditorial />
      <BlogCareWellnessCta />
    </>
  );
}
