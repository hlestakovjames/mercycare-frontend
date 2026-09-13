import Link from "next/link";

export default function UpcomingEventsCTA() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-4xl px-6 text-center sm:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0F766E]">
          Stay Connected
        </p>

        <h2 className="mt-4 text-3xl font-semibold text-[#0B1B3A] sm:text-4xl">
          Don&apos;t see the event you are looking for?
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
          Explore the full event calendar or contact MercyCare if you need
          information about an upcoming event.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="/events/calendar"
            className="inline-flex items-center justify-center rounded-full bg-[#0F766E] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#0d655f]"
          >
            View Event Calendar
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full border border-[#0B1B3A]/20 px-7 py-3.5 text-sm font-semibold text-[#0B1B3A] transition hover:bg-slate-50"
          >
            Contact MercyCare
          </Link>
        </div>
      </div>
    </section>
  );
}
