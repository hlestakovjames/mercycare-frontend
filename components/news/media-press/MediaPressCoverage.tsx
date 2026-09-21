import Link from "next/link";

export default function MediaPressCoverage() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 sm:p-10 lg:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
            Current availability
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
            Media materials will grow with MercyCare.
          </h2>

          <p className="mt-5 leading-7 text-slate-600">
            As MercyCare develops its public work, this section will become a
            central reference for confirmed press releases, statements, media
            mentions, and other approved public materials. No media coverage
            is presented here as confirmed unless it has actually been
            published or formally issued.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/news/latest"
              className="inline-flex rounded-full bg-[#0B1B3A] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#D4AF37] hover:text-[#0B1B3A]"
            >
              Latest news
            </Link>

            <Link
              href="/contact"
              className="inline-flex rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-[#D4AF37] hover:text-[#0B1B3A]"
            >
              Contact MercyCare
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
