import Link from "next/link";

export default function BlogArchiveCta() {
  return (
    <section className="bg-cyan-50 px-6 py-16 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-5xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700">
          Keep exploring
        </p>

        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          Start with what interests you.
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600">
          Explore current stories and conversations, or use the archive to
          discover content as the Media Center grows.
        </p>

        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <Link
            href="/blog/stories"
            className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            Read stories
          </Link>

          <Link
            href="/blog/archive/search"
            className="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-400"
          >
            Search archive
          </Link>
        </div>
      </div>
    </section>
  );
}
