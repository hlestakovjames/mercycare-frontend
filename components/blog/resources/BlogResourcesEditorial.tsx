export default function BlogResourcesEditorial() {
  return (
    <section className="bg-slate-950 px-6 py-16 text-white sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">
              Our approach
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Useful information deserves careful context.
            </h2>
          </div>

          <div className="space-y-5 text-sm leading-7 text-slate-300">
            <p>
              MercyCare resources will be developed with clarity, relevance
              and responsible communication in mind.
            </p>

            <p>
              Where a topic involves health or care decisions, educational
              material should complement—not replace—conversation with
              appropriately qualified healthcare professionals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
