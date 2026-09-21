import BlogEditorialChannels from "@/components/blog/editorial/BlogEditorialChannels";
import BlogEditorialCta from "@/components/blog/editorial/BlogEditorialCta";
import BlogEditorialHero from "@/components/blog/editorial/BlogEditorialHero";
import BlogEditorialIntro from "@/components/blog/editorial/BlogEditorialIntro";
import BlogEditorialPrinciples from "@/components/blog/editorial/BlogEditorialPrinciples";

export default function BlogEditorialPage() {
  return (
    <>
      <BlogEditorialHero />
      <BlogEditorialIntro />
      <BlogEditorialChannels />
      <BlogEditorialPrinciples />
      <BlogEditorialCta />
    </>
  );
}
