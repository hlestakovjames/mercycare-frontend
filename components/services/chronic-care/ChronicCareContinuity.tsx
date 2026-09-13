const principles = [
  {
    title: "Consistency",
    description:
      "Reliable support can make ongoing care easier to organize and understand.",
  },
  {
    title: "Communication",
    description:
      "Clear communication helps families and caregivers remain informed about support arrangements.",
  },
  {
    title: "Person-centered care",
    description:
      "The individual's preferences, dignity, circumstances, and goals remain important.",
  },
  {
    title: "Adaptability",
    description:
      "Support should be reviewed when an individual's circumstances or needs change.",
  },
];

export default function ChronicCareContinuity() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#0F766E]">
              Continuity of Care
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
              Long-term support needs a dependable approach.
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
              Ongoing care can involve many people and changing circumstances.
              A consistent approach helps create clearer expectations for the
              individual, family, and caregivers.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
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
      </div>
    </section>
  );
}
