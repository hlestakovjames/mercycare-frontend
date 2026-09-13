import Link from "next/link";

export default function ChronicCareHero() {
  return (
    <section className="relative overflow-hidden bg-[#0B1B3A]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(20,184,166,0.18),transparent_38%),radial-gradient(circle_at_bottom_left,rgba(212,175,55,0.12),transparent_35%)]" />

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
        <div className="max-w-3xl">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-[#D4AF37]">
            Chronic Care Support
          </p>

          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Consistent support for ongoing care at home.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            MercyCare supports individuals and families managing longer-term
            care needs at home, with an approach centered on continuity,
            dignity, communication, and everyday wellbeing.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/services/get-started"
              className="rounded-full bg-white px-6 py-3 text-center text-sm font-semibold text-[#0B1B3A] transition-colors hover:bg-slate-100"
            >
              Get Started
            </Link>

            <Link
              href="/contact"
              className="rounded-full border border-white/30 px-6 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Contact MercyCare
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
