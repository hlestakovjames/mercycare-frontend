import Link from "next/link";

export default function LatestNewsGuidance() {
  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="rounded-[2rem] bg-slate-50 p-8 sm:p-10 lg:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
            Explore more
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
            Follow the wider MercyCare story.
          </h2>

          <p className="mt-5 max-w-2xl leading-7 text-slate-600">
            News is only one part of the MercyCare story. Explore our
            community activities, events, programs, and longer-form
            conversations to understand more about our work.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/news"
              className="inline-flex rounded-full bg-[#0B1B3A] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#D4AF37] hover:text-[#0B1B3A]"
            >
              News overview
            </Link>

            <Link
              href="/activities"
              className="inline-flex rounded-full border border-[#0B1B3A] px-6 py-3 text-sm font-semibold text-[#0B1B3A] transition hover:bg-[#0B1B3A] hover:text-white"
            >
              Explore activities
            </Link>

            <Link
              href="/events"
              className="inline-flex rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-[#D4AF37] hover:text-[#0B1B3A]"
            >
              View events
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
