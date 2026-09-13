import Link from "next/link";

export default function HowWeWorkCTA() {
  return (
    <section className="bg-slate-50 py-20 lg:py-24">
      <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
          Explore Further
        </p>

        <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
          See how our approach becomes real community action.
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600">
          Explore MercyCare's projects or learn how you can contribute to
          initiatives that support health, wellbeing, dignity, and care.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/projects/our-projects"
            className="rounded-full bg-[#0B1B3A] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#162d5c]"
          >
            Explore Our Projects
          </Link>

          <Link
            href="/projects/get-involved"
            className="rounded-full border border-slate-300 bg-white px-7 py-3 text-sm font-semibold text-[#0B1B3A] transition hover:border-[#0B1B3A]"
          >
            Get Involved
          </Link>
        </div>
      </div>
    </section>
  );
}
