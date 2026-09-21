import BlogArchiveChannels from "@/components/blog/archive/BlogArchiveChannels";
import BlogArchiveCta from "@/components/blog/archive/BlogArchiveCta";
import BlogArchiveHero from "@/components/blog/archive/BlogArchiveHero";
import BlogArchiveIntro from "@/components/blog/archive/BlogArchiveIntro";
import BlogArchiveStructure from "@/components/blog/archive/BlogArchiveStructure";

export default function BlogArchivePage() {
  return (
    <>
      <BlogArchiveHero />
      <BlogArchiveIntro />
      <BlogArchiveChannels />
      <BlogArchiveStructure />
      <BlogArchiveCta />
    </>
  );
}
