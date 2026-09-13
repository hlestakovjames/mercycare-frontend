const principles = [
  {
    title: "Person-centered",
    description:
      "The individual remains at the center of the care conversation.",
  },
  {
    title: "Dignity-focused",
    description:
      "Support is delivered with respect for privacy, choices, and personal dignity.",
  },
  {
    title: "Family-aware",
    description:
      "Families and caregivers are recognized as important partners in the care journey.",
  },
  {
    title: "Consistent",
    description:
      "Clear communication and continuity help create a more dependable care experience.",
  },
];

export default function SeniorElderlyCareApproach() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#0F766E]">
            Our Approach
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
            Care built around the person.
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-600">
            Senior and elderly care is not simply about completing tasks. It is
            about understanding the person, respecting their life and choices,
            and providing support in a way that feels safe, respectful, and
            meaningful.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {principles.map((principle) => (
            <article
              key={principle.title}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
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
    </section>
  );
}
