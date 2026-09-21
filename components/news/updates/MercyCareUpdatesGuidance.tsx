import Link from "next/link";

export default function MercyCareUpdatesGuidance() {
  return (
    <section className="bg-slate-50 py-20 lg:py-24">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 sm:p-10 lg:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
            Explore MercyCare
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
            Go beyond the updates.
          </h2>

          <p className="mt-5 max-w-2xl leading-7 text-slate-600">
            Explore the programs, projects, services, events, and activities
            behind the developments shared through MercyCare News.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/programs"
              className="inline-flex rounded-full bg-[#0B1B3A] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#D4AF37] hover:text-[#0B1B3A]"
            >
              Explore programs
            </Link>

            <Link
              href="/projects"
              className="inline-flex rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-[#D4AF37] hover:text-[#0B1B3A]"
            >
              Explore projects
            </Link>

            <Link
              href="/services"
              className="inline-flex rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-[#D4AF37] hover:text-[#0B1B3A]"
            >
              Explore services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
