import Link from "next/link";

export default function CommunityNewsGuidance() {
  return (
    <section className="bg-slate-50 py-20 lg:py-24">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="rounded-[2rem] bg-[#0B1B3A] p-8 text-white sm:p-10 lg:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
            Stay connected
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Be part of the MercyCare community story.
          </h2>

          <p className="mt-5 max-w-2xl leading-7 text-slate-300">
            Community stories grow through participation. Explore our
            activities and events, or find ways to support MercyCare's work.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/activities/get-involved"
              className="inline-flex rounded-full bg-[#D4AF37] px-6 py-3 text-sm font-semibold text-[#0B1B3A] transition hover:bg-white"
            >
              Get involved
            </Link>

            <Link
              href="/events"
              className="inline-flex rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-[#D4AF37] hover:text-[#D4AF37]"
            >
              Explore events
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
