export default function HowWeWorkOverview() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#0F766E]">
            Our Process
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
            A clear process creates better care experiences.
          </h2>
        </div>

        <div className="space-y-5 text-base leading-8 text-slate-600">
          <p>
            Every household is different. MercyCare therefore avoids a
            one-size-fits-all approach and begins by understanding what support
            is actually needed.
          </p>

          <p>
            We consider the individual's preferences, daily routines, family
            involvement, existing care arrangements, and the agreed scope of
            support.
          </p>

          <p>
            From there, appropriate support can be coordinated with clear
            responsibilities and communication between the people involved.
          </p>
        </div>
      </div>
    </section>
  );
}
