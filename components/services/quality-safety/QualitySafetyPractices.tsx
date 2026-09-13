const practices = [
  {
    title: "Understanding the Support Needed",
    description:
      "We begin by understanding the person's circumstances, routines, priorities and the type of support being considered.",
  },
  {
    title: "Agreeing Expectations",
    description:
      "Clear expectations help families understand what support is being provided and where additional professional care may be required.",
  },
  {
    title: "Respecting Privacy",
    description:
      "Personal information should be handled thoughtfully and shared appropriately within the context of care and coordination.",
  },
  {
    title: "Recognizing Changes",
    description:
      "Changes in a person's situation should not be ignored. Appropriate concerns should be communicated to the family or relevant qualified professional.",
  },
  {
    title: "Escalating Appropriately",
    description:
      "When a situation requires specialist healthcare attention, the appropriate qualified professional or emergency service should be contacted.",
  },
  {
    title: "Reviewing Support",
    description:
      "Support needs can change. Reviewing arrangements helps families consider whether the current approach remains appropriate.",
  },
];

export default function QualitySafetyPractices() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0F766E]">
              Safety in Practice
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[#0B1B3A] sm:text-4xl">
              Practical habits that support safer care.
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Safety is strengthened through communication, appropriate
              boundaries and timely involvement of the people best placed to
              respond to a changing need.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {practices.map((practice, index) => (
              <article
                key={practice.title}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
              >
                <span className="text-sm font-bold text-[#D4AF37]">
                  0{index + 1}
                </span>

                <h3 className="mt-3 text-lg font-bold text-[#0B1B3A]">
                  {practice.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {practice.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
