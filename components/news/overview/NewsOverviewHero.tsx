import Link from "next/link";

export default function NewsOverviewHero() {
  return (
    <section className="bg-[#0B1B3A] py-20 text-white lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
              MercyCare News
            </p>

            <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Stories, updates and information from MercyCare.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Follow MercyCare's journey through community stories, health and
              wellness information, organizational updates, announcements,
              media information, and more.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/news/latest"
                className="inline-flex rounded-full bg-[#D4AF37] px-6 py-3 text-sm font-semibold text-[#0B1B3A] transition hover:bg-white"
              >
                Latest news
              </Link>

              <Link
                href="/news/archive"
                className="inline-flex rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-[#D4AF37] hover:text-[#D4AF37]"
              >
                Browse archive
              </Link>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-7 sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#D4AF37]">
              Stay informed
            </p>

            <p className="mt-4 text-lg leading-8 text-slate-200">
              Explore the different News channels to find the information
              relevant to you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
