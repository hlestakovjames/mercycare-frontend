import BlogResourcesCategories from "@/components/blog/resources/BlogResourcesCategories";
import BlogResourcesCta from "@/components/blog/resources/BlogResourcesCta";
import BlogResourcesEditorial from "@/components/blog/resources/BlogResourcesEditorial";
import BlogResourcesHero from "@/components/blog/resources/BlogResourcesHero";
import BlogResourcesHowToUse from "@/components/blog/resources/BlogResourcesHowToUse";
import BlogResourcesIntro from "@/components/blog/resources/BlogResourcesIntro";

export default function BlogResourcesPage() {
  return (
    <>
      <BlogResourcesHero />
      <BlogResourcesIntro />
      <BlogResourcesCategories />
      <BlogResourcesHowToUse />
      <BlogResourcesEditorial />
      <BlogResourcesCta />
    </>
  );
}
