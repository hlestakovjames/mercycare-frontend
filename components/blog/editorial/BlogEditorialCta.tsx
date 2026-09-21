import Link from "next/link";

export default function BlogEditorialCta() {
  return (
    <section className="bg-cyan-50 px-6 py-16 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-5xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700">
          Keep exploring
        </p>

        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          Stories are only one part of the conversation.
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600">
          Move between stories, conversations, features, media and resources
          across the MercyCare Media Center.
        </p>

        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <Link
            href="/blog/interviews"
            className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            Explore interviews
          </Link>

          <Link
            href="/blog/resources"
            className="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-400"
          >
            Explore resources
          </Link>
        </div>
      </div>
    </section>
  );
}
