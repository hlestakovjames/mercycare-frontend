import Link from "next/link";

export default function BlogEditorialHero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(21,151,201,0.28),transparent_38%),radial-gradient(circle_at_bottom_left,rgba(103,87,217,0.18),transparent_35%)]" />

      <div className="relative mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
            MercyCare Media Center · Editorial
          </p>

          <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            The thinking behind the stories.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Learn how the MercyCare Media Center approaches stories,
            conversations, resources and contributions as the platform grows.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/blog/editorial/about"
              className="rounded-full bg-cyan-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-cyan-400"
            >
              About the Media Center
            </Link>

            <Link
              href="/blog"
              className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/5"
            >
              Back to Media Center
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
