import BlogInterviewsHero from "@/components/blog/interviews/BlogInterviewsHero";
import BlogInterviewsIntro from "@/components/blog/interviews/BlogInterviewsIntro";
import BlogInterviewsCategories from "@/components/blog/interviews/BlogInterviewsCategories";
import BlogInterviewsFormat from "@/components/blog/interviews/BlogInterviewsFormat";
import BlogInterviewsPrinciples from "@/components/blog/interviews/BlogInterviewsPrinciples";
import BlogInterviewsCta from "@/components/blog/interviews/BlogInterviewsCta";

export default function InterviewsPage() {
  return (
    <>
      <BlogInterviewsHero />
      <BlogInterviewsIntro />
      <BlogInterviewsCategories />
      <BlogInterviewsFormat />
      <BlogInterviewsPrinciples />
      <BlogInterviewsCta />
    </>
  );
}
