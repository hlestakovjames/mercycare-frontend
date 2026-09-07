import NewsHero from "@/components/news/NewsHero";
import NewsList from "@/components/news/NewsList";
import NewsCTA from "@/components/news/NewsCTA";

export default function NewsPage() {
  return (
    <>
      <NewsHero />
      <NewsList />
      <NewsCTA />
    </>
  );
}