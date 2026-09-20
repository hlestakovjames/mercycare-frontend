import Link from "next/link";

export default function SeniorSupportActivitiesHero() {
  return (
    <section className="relative overflow-hidden bg-[#0B1B3A]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(15,118,110,0.28),transparent_45%)]" />

      <div className="relative mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-24 lg:px-10">
        <div className="max-w-3xl">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
            MercyCare Activities
          </p>

          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Senior Support Activities
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200 sm:text-xl">
            Activities that create opportunities for older adults, families and
            caregivers to connect, participate and support dignity and
            wellbeing.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/activities/get-involved"
              className="rounded-full bg-[#D4AF37] px-6 py-3 text-sm font-semibold text-[#0B1B3A] transition hover:opacity-90"
            >
              Get Involved
            </Link>

            <Link
              href="/activities"
              className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Explore Activities
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
