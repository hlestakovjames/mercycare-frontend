import Link from "next/link";

export default function HowWeWorkHero() {
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
            How We Work
          </p>

          <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            From community needs to practical action.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            MercyCare develops projects through a practical, people-centred
            approach that connects identified needs with appropriate action,
            collaboration, and learning.
          </p>
        </div>
      </div>
    </section>
  );
}
