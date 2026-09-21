import BlogMediaHero from "@/components/blog/media/BlogMediaHero";
import BlogMediaIntro from "@/components/blog/media/BlogMediaIntro";
import BlogMediaCategories from "@/components/blog/media/BlogMediaCategories";
import BlogMediaExperience from "@/components/blog/media/BlogMediaExperience";
import BlogMediaEditorial from "@/components/blog/media/BlogMediaEditorial";
import BlogMediaCta from "@/components/blog/media/BlogMediaCta";

export default function MediaPage() {
  return (
    <>
      <BlogMediaHero />
      <BlogMediaIntro />
      <BlogMediaCategories />
      <BlogMediaExperience />
      <BlogMediaEditorial />
      <BlogMediaCta />
    </>
  );
}
