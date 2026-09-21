import BlogStoriesHero from "@/components/blog/stories/BlogStoriesHero";
import BlogStoriesIntro from "@/components/blog/stories/BlogStoriesIntro";
import BlogStoriesFeatured from "@/components/blog/stories/BlogStoriesFeatured";
import BlogStoriesCategories from "@/components/blog/stories/BlogStoriesCategories";
import BlogStoriesLatest from "@/components/blog/stories/BlogStoriesLatest";
import BlogStoriesApproach from "@/components/blog/stories/BlogStoriesApproach";
import BlogStoriesCta from "@/components/blog/stories/BlogStoriesCta";

export default function BlogStoriesPage() {
  return (
    <>
      <BlogStoriesHero />
      <BlogStoriesIntro />
      <BlogStoriesFeatured />
      <BlogStoriesCategories />
      <BlogStoriesLatest />
      <BlogStoriesApproach />
      <BlogStoriesCta />
    </>
  );
}
