import BlogVoicesHero from "@/components/blog/voices/BlogVoicesHero";
import BlogVoicesIntro from "@/components/blog/voices/BlogVoicesIntro";
import BlogVoicesCategories from "@/components/blog/voices/BlogVoicesCategories";
import BlogVoicesPrinciples from "@/components/blog/voices/BlogVoicesPrinciples";
import BlogVoicesCta from "@/components/blog/voices/BlogVoicesCta";

export default function VoicesPage() {
  return (
    <>
      <BlogVoicesHero />
      <BlogVoicesIntro />
      <BlogVoicesCategories />
      <BlogVoicesPrinciples />
      <BlogVoicesCta />
    </>
  );
}
