import Link from "next/link";

export default function BlogFeaturedGuidance() {
  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 sm:p-10 lg:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
            Explore the Media Center
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
            There is more beyond the featured stories.
          </h2>

          <p className="mt-5 max-w-2xl leading-7 text-slate-600">
            Explore community stories, caregiving knowledge, conversations,
            features, media, resources, and perspectives from across the
            MercyCare ecosystem.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/blog/stories"
              className="inline-flex rounded-full bg-[#0B1B3A] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#D4AF37] hover:text-[#0B1B3A]"
            >
              Explore stories
            </Link>

            <Link
              href="/blog/care-wellness"
              className="inline-flex rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-[#D4AF37] hover:text-[#0B1B3A]"
            >
              Care & wellness
            </Link>

            <Link
              href="/blog/media"
              className="inline-flex rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-[#D4AF37] hover:text-[#0B1B3A]"
            >
              Media
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
