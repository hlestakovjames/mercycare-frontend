import BlogFeaturesHero from "@/components/blog/features/BlogFeaturesHero";
import BlogFeaturesIntro from "@/components/blog/features/BlogFeaturesIntro";
import BlogFeaturesCategories from "@/components/blog/features/BlogFeaturesCategories";
import BlogFeaturesApproach from "@/components/blog/features/BlogFeaturesApproach";
import BlogFeaturesEditorial from "@/components/blog/features/BlogFeaturesEditorial";
import BlogFeaturesCta from "@/components/blog/features/BlogFeaturesCta";

export default function FeaturesPage() {
  return (
    <>
      <BlogFeaturesHero />
      <BlogFeaturesIntro />
      <BlogFeaturesCategories />
      <BlogFeaturesApproach />
      <BlogFeaturesEditorial />
      <BlogFeaturesCta />
    </>
  );
}
