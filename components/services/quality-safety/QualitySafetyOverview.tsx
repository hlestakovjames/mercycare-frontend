export default function QualitySafetyOverview() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0F766E]">
              Our Commitment
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[#0B1B3A] sm:text-4xl">
              Quality starts with the way we care.
            </h2>
          </div>

          <div className="space-y-5 text-base leading-8 text-slate-600">
            <p>
              Quality is not only about what support is provided. It is also
              about how people are treated, how information is communicated,
              how concerns are handled and how families remain involved.
            </p>

            <p>
              MercyCare seeks to create a care experience that is respectful,
              coordinated and responsive to the individual circumstances of
              each person and family.
            </p>

            <p>
              Where a need falls outside the appropriate scope of home-based
              support, we encourage communication with the relevant qualified
              healthcare professional or service.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
