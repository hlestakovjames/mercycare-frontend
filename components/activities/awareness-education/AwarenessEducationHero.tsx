import Link from "next/link";

export default function AwarenessEducationHero() {
  return (
    <section className="relative overflow-hidden bg-[#0B1B3A] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.16),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(15,118,110,0.22),transparent_40%)]" />

      <div className="relative mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-24 lg:px-10">
        <div className="max-w-4xl">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
            Awareness & Education
          </p>

          <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Creating space to learn, understand and make informed choices.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200 sm:text-xl">
            MercyCare activities can create opportunities for communities,
            families and caregivers to share knowledge, ask questions and
            engage with important health and wellbeing topics.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href="/activities/get-involved"
              className="rounded-full bg-[#D4AF37] px-6 py-3.5 text-sm font-semibold text-[#0B1B3A] transition hover:opacity-90"
            >
              Get Involved
            </Link>

            <Link
              href="/contact"
              className="rounded-full border border-white/30 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Talk to MercyCare
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
