import BlogTopicHero from "@/components/blog/care-wellness/topics/BlogTopicHero";
import BlogTopicGuidance from "@/components/blog/care-wellness/topics/BlogTopicGuidance";
import BlogTopicCta from "@/components/blog/care-wellness/topics/BlogTopicCta";

export default function OtherInitiativesPage() {
  return (
    <>
      <BlogTopicHero
        eyebrow="Programs & Projects · Other Initiatives"
        title="More stories will grow here."
        description="A future editorial collection for additional MercyCare programmes, projects and community initiatives."
      />

      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-6 py-16 lg:px-8 lg:py-20">
          <h2 className="text-3xl font-semibold tracking-tight text-[#0B1B3A]">
            A growing editorial space
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-600">
            As MercyCare develops additional initiatives, this collection can
            provide space for their stories, perspectives, field experiences
            and updates without forcing unrelated content into the existing
            programme hubs.
          </p>
        </div>
      </section>

      <BlogTopicGuidance />

      <BlogTopicCta
        title="Explore the current MercyCare programme collections."
        href="/blog/programs-projects"
        label="Back to Programs & Projects"
      />
    </>
  );
}
