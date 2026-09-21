import BlogFamilyCommunityHero from "@/components/blog/family-community/BlogFamilyCommunityHero";
import BlogFamilyCommunityIntro from "@/components/blog/family-community/BlogFamilyCommunityIntro";
import BlogFamilyCommunityTopics from "@/components/blog/family-community/BlogFamilyCommunityTopics";
import BlogFamilyCommunityVoices from "@/components/blog/family-community/BlogFamilyCommunityVoices";
import BlogFamilyCommunityEditorial from "@/components/blog/family-community/BlogFamilyCommunityEditorial";
import BlogFamilyCommunityCta from "@/components/blog/family-community/BlogFamilyCommunityCta";

export default function FamilyCommunityPage() {
  return (
    <>
      <BlogFamilyCommunityHero />
      <BlogFamilyCommunityIntro />
      <BlogFamilyCommunityTopics />
      <BlogFamilyCommunityVoices />
      <BlogFamilyCommunityEditorial />
      <BlogFamilyCommunityCta />
    </>
  );
}
