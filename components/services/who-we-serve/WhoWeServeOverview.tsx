export default function WhoWeServeOverview() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#0F766E]">
            Our Community
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
            Every person's situation is different.
          </h2>
        </div>

        <div className="space-y-5 text-base leading-8 text-slate-600">
          <p>
            Home-based support may be useful at different stages of life and
            for different circumstances. Some people need temporary assistance,
            while others benefit from ongoing support.
          </p>

          <p>
            MercyCare takes time to understand the individual rather than
            assuming that a particular service is appropriate simply because
            of age, circumstance, or diagnosis.
          </p>

          <p>
            The right support is the support that fits the person's situation,
            preferences, safety considerations, and agreed care arrangements.
          </p>
        </div>
      </div>
    </section>
  );
}
