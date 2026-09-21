import NewsArchiveHero from "@/components/news/archive/NewsArchiveHero";
import NewsArchiveIntro from "@/components/news/archive/NewsArchiveIntro";
import NewsArchiveYears from "@/components/news/archive/NewsArchiveYears";
import NewsArchiveCategories from "@/components/news/archive/NewsArchiveCategories";
import NewsArchiveGuidance from "@/components/news/archive/NewsArchiveGuidance";

export default function NewsArchivePage() {
  return (
    <>
      <NewsArchiveHero />
      <NewsArchiveIntro />
      <NewsArchiveYears />
      <NewsArchiveCategories />
      <NewsArchiveGuidance />
    </>
  );
}
