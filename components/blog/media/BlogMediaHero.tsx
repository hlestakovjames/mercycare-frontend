export default function BlogMediaHero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(21,151,201,0.24),transparent_42%)]" />
      <div className="relative mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
        <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
          Media
        </p>

        <div className="max-w-4xl">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Stories in more than one format.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">
            Videos, podcasts, photo stories and multimedia experiences that
            help bring MercyCare&apos;s conversations and community stories to
            life.
          </p>
        </div>
      </div>
    </section>
  );
}
