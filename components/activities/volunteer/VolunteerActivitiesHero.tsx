import Link from "next/link";

export default function VolunteerActivitiesHero() {
  return (
    <section className="relative overflow-hidden bg-[#0B1B3A] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.16),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(15,118,110,0.22),transparent_40%)]" />

      <div className="relative mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-24 lg:px-10">
        <div className="max-w-4xl">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
            Volunteer Activities
          </p>

          <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Give your time, skills and energy to meaningful community work.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200 sm:text-xl">
            MercyCare volunteer activities create opportunities for people to
            contribute to community outreach, awareness, wellbeing activities
            and other initiatives according to their interests and available
            capacity.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href="/volunteer"
              className="rounded-full bg-[#D4AF37] px-6 py-3.5 text-sm font-semibold text-[#0B1B3A] transition hover:opacity-90"
            >
              Volunteer With Us
            </Link>

            <Link
              href="/contact"
              className="rounded-full border border-white/30 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Contact MercyCare
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
