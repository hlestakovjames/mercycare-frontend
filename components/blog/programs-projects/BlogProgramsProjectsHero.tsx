export default function BlogProgramsProjectsHero() {
  return (
    <section className="relative overflow-hidden bg-[#0B1B3A]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(21,151,201,0.24),transparent_42%),radial-gradient(circle_at_bottom_left,rgba(103,87,217,0.18),transparent_38%)]" />

      <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
            Programs & Projects
          </p>

          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Stories from the work MercyCare is building with communities.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
            Go beyond programme names to explore the ideas, experiences,
            conversations and updates connected to MercyCare initiatives.
          </p>
        </div>
      </div>
    </section>
  );
}
