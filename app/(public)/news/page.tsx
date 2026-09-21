import NewsOverviewHero from "@/components/news/overview/NewsOverviewHero";
import NewsOverviewIntro from "@/components/news/overview/NewsOverviewIntro";
import NewsOverviewLatest from "@/components/news/overview/NewsOverviewLatest";
import NewsOverviewChannels from "@/components/news/overview/NewsOverviewChannels";
import NewsOverviewConnection from "@/components/news/overview/NewsOverviewConnection";

export default function NewsPage() {
  return (
    <>
      <NewsOverviewHero />
      <NewsOverviewIntro />
      <NewsOverviewLatest />
      <NewsOverviewChannels />
      <NewsOverviewConnection />
    </>
  );
}
