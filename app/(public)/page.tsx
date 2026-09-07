import Hero from "@/components/home/Hero";
import WhoWeAre from "@/components/home/WhoWeAre";
import Programs from "@/components/home/Programs";
import Impact from "@/components/home/Impact";
import LatestNews from "@/components/home/LatestNews";
import UpcomingEvents from "@/components/home/UpcomingEvents";
import GalleryPreview from "@/components/home/GalleryPreview";
import GetInvolved from "@/components/home/GetInvolved";
import DonateCTA from "@/components/home/DonateCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <WhoWeAre />
      <Programs />
      <Impact />
      <LatestNews />
      <UpcomingEvents />
      <GalleryPreview />
      <GetInvolved />
      <DonateCTA />
    </>
  );
}