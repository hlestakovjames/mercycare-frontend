import Link from "next/link";

export default function ServicesOverviewHero() {
  return (
    <section className="relative overflow-hidden bg-[#0B1B3A] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(15,118,110,0.3),transparent_42%),radial-gradient(circle_at_bottom_left,rgba(212,175,55,0.16),transparent_38%)]" />

      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:px-8 sm:py-28 lg:px-12">
        <div className="max-w-4xl">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.22em] text-[#D4AF37]">
            Home Health Services
          </p>

          <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Thoughtful support, closer to home.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200 sm:text-xl">
            MercyCare provides person-centered home-based support designed
            around dignity, family partnership, independence and continuity.
            Explore our services, approach and the ways we work with
            individuals and families.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/services/get-started"
              className="rounded-full bg-[#D4AF37] px-7 py-3.5 text-center text-sm font-semibold text-[#0B1B3A] transition hover:opacity-90"
            >
              Get Started
            </Link>

            <Link
              href="/services/our-services"
              className="rounded-full border border-white/30 px-7 py-3.5 text-center text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
