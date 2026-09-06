import Link from "next/link";

export default function ProjectsCTA() {
  return (
    <section className="bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="rounded-3xl bg-[#0B1B3A] px-6 py-14 text-center shadow-xl sm:px-12 sm:py-16">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
            Get Involved
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Help us create lasting impact
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-300">
            MercyCare's projects depend on compassionate people, meaningful
            partnerships and community support. There are many ways to be
            part of the work.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/volunteer"
              className="inline-flex items-center justify-center rounded-full bg-[#D4AF37] px-6 py-3 text-sm font-semibold text-[#0B1B3A] transition hover:bg-[#e3c45a]"
            >
              Volunteer With Us
            </Link>

            <Link
              href="/donate"
              className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Support MercyCare
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Partner With Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}