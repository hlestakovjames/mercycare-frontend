import Link from "next/link";

export default function BlogResourcesCta() {
  return (
    <section className="bg-white px-6 py-16 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-5xl rounded-[2rem] bg-cyan-50 px-7 py-12 text-center sm:px-12">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700">
          Keep exploring
        </p>

        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900">
          There is more to discover across MercyCare Media Center.
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600">
          Explore stories, conversations, features and media alongside the
          growing Resource Center.
        </p>

        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <Link
            href="/blog/stories"
            className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            Read stories
          </Link>

          <Link
            href="/blog/media"
            className="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-400"
          >
            Explore media
          </Link>
        </div>
      </div>
    </section>
  );
}
