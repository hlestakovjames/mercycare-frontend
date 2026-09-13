const principles = [
  {
    title: "Child-centered",
    description:
      "The child's needs, abilities, preferences, dignity, and wellbeing remain central to the support approach.",
  },
  {
    title: "Family-aware",
    description:
      "Parents, guardians, and caregivers are important partners in understanding and supporting the child.",
  },
  {
    title: "Respectful",
    description:
      "Support is delivered with patience, privacy, dignity, and respect for the child's individuality.",
  },
  {
    title: "Consistent",
    description:
      "Clear routines and communication can help create a more predictable support environment.",
  },
];

export default function SpecialNeedsChildrenApproach() {
  return (
    <section className="bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#0F766E]">
            Our Approach
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
            Supporting the child, supporting the family.
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-600">
            Effective home support requires more than completing tasks. It
            requires understanding the child and working respectfully with the
            people who know and support them every day.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
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
    </section>
  );
}
