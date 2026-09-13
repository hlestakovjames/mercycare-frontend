import Link from "next/link";

export default function EventsOverviewHero() {
  return (
    <section className="relative overflow-hidden bg-[#0B1B3A]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(15,118,110,0.3),transparent_45%)]" />

      <div className="relative mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-24 lg:px-12">
        <div className="max-w-4xl">
          <span className="inline-flex rounded-full bg-[#D4AF37]/15 px-4 py-2 text-sm font-semibold text-[#D4AF37]">
            MercyCare Events
          </span>

          <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Connecting people through meaningful community events
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200 sm:text-xl">
            MercyCare events create opportunities for people, families,
            caregivers and community partners to connect, learn, participate
            and support conversations around wellbeing and compassionate care.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/events/upcoming"
              className="inline-flex items-center justify-center rounded-full bg-[#D4AF37] px-7 py-3.5 text-sm font-semibold text-[#0B1B3A] transition hover:bg-[#e3c65c]"
            >
              View Upcoming Events
            </Link>

            <Link
              href="/events/calendar"
              className="inline-flex items-center justify-center rounded-full border border-white/30 px-7 py-3.5 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
            >
              Event Calendar
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
