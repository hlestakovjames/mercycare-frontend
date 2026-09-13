import Link from "next/link";

export default function UpcomingEventsHero() {
  return (
    <section className="relative overflow-hidden bg-[#0B1B3A] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(15,118,110,0.28),transparent_42%),radial-gradient(circle_at_bottom_left,rgba(212,175,55,0.14),transparent_38%)]" />

      <div className="relative mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
        <div className="max-w-4xl">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.22em] text-[#D4AF37]">
            MercyCare Events
          </p>

          <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
            Upcoming Events
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200 sm:text-xl">
            Discover upcoming MercyCare gatherings, health and wellness
            events, awareness initiatives and community experiences.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/events/calendar"
              className="inline-flex items-center justify-center rounded-full bg-[#0F766E] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#0d655f]"
            >
              View Event Calendar
            </Link>

            <Link
              href="/events/get-involved"
              className="inline-flex items-center justify-center rounded-full border border-white/30 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Get Involved
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
