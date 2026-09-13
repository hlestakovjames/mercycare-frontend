import Link from "next/link";

export default function ImpactHero() {
  return (
    <section className="bg-[#0B1B3A] py-20 text-white lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Link
          href="/projects"
          className="text-sm font-medium text-slate-300 transition hover:text-[#D4AF37]"
        >
          ← Back to Projects
        </Link>

        <div className="mt-10 max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
            Project Impact
          </p>

          <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Understanding the difference our projects seek to make.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            MercyCare looks beyond activities to understand how projects can
            contribute to healthier, more supported, connected, and dignified
            communities.
          </p>
        </div>
      </div>
    </section>
  );
}
