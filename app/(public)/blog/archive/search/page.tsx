import Link from "next/link";

export default function ArchiveSearchPage() {
  return (
    <section className="bg-white px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-5xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600">
          Archive · Search
        </p>

        <h1 className="mt-5 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
          Search the MercyCare Media Center.
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
          Search is designed as the future discovery layer for stories,
          conversations, features, media and resources.
        </p>

        <div className="mt-10 rounded-3xl border border-slate-200 bg-slate-50 p-7">
          <form className="flex flex-col gap-3 sm:flex-row">
            <label htmlFor="archive-search" className="sr-only">
              Search the archive
            </label>

            <input
              id="archive-search"
              name="q"
              type="search"
              placeholder="Search stories, topics or resources..."
              className="min-h-12 flex-1 rounded-2xl border border-slate-300 bg-white px-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
            />

            <button
              type="submit"
              className="min-h-12 rounded-2xl bg-slate-900 px-6 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Search
            </button>
          </form>

          <p className="mt-4 text-sm leading-7 text-slate-500">
            Search functionality will connect to the full editorial content
            index when the Media Center content system is connected.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            href="/blog/archive/by-year"
            className="rounded-full border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-900 hover:border-cyan-300"
          >
            Browse by year
          </Link>

          <Link
            href="/blog/archive/by-category"
            className="rounded-full border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-900 hover:border-cyan-300"
          >
            Browse by category
          </Link>

          <Link
            href="/blog/archive/by-topic"
            className="rounded-full border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-900 hover:border-cyan-300"
          >
            Browse by topic
          </Link>
        </div>
      </div>
    </section>
  );
}
