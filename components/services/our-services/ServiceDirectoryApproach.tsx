const principles = [
  {
    title: "Person-centered",
    description:
      "Care begins with the individual, their circumstances, preferences, and goals.",
  },
  {
    title: "Family-aware",
    description:
      "Families and caregivers are recognized as important partners in the care experience.",
  },
  {
    title: "Dignity-focused",
    description:
      "Every interaction should respect privacy, independence, comfort, and human dignity.",
  },
  {
    title: "Connected",
    description:
      "Different areas of support can work together when a person's needs require a broader response.",
  },
];

export default function ServiceDirectoryApproach() {
  return (
    <section className="bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#0F766E]">
              Our Care Philosophy
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
              More than a service. A caring relationship.
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
              The service someone receives matters, but so does how that
              service is delivered. MercyCare aims to make every care
              experience respectful, compassionate, and responsive.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {principles.map((principle) => (
              <article
                key={principle.title}
                className="rounded-2xl border border-slate-200 bg-white p-6"
              >
                <h3 className="text-lg font-semibold text-[#0B1B3A]">
                  {principle.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {principle.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
