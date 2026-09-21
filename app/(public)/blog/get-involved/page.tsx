import BlogGetInvolvedCta from "@/components/blog/get-involved/BlogGetInvolvedCta";
import BlogGetInvolvedHero from "@/components/blog/get-involved/BlogGetInvolvedHero";
import BlogGetInvolvedIntro from "@/components/blog/get-involved/BlogGetInvolvedIntro";
import BlogGetInvolvedPrinciples from "@/components/blog/get-involved/BlogGetInvolvedPrinciples";
import BlogGetInvolvedWays from "@/components/blog/get-involved/BlogGetInvolvedWays";

export default function BlogGetInvolvedPage() {
  return (
    <>
      <BlogGetInvolvedHero />
      <BlogGetInvolvedIntro />
      <BlogGetInvolvedWays />
      <BlogGetInvolvedPrinciples />
      <BlogGetInvolvedCta />
    </>
  );
}
