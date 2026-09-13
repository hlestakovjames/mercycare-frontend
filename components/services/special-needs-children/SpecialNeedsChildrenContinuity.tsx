const steps = [
  {
    number: "01",
    title: "Listen",
    description:
      "Understand the child's situation and listen carefully to the family and caregivers.",
  },
  {
    number: "02",
    title: "Understand",
    description:
      "Identify routines, preferences, strengths, support needs, and relevant circumstances.",
  },
  {
    number: "03",
    title: "Support",
    description:
      "Provide appropriate support while encouraging participation and independence where possible.",
  },
  {
    number: "04",
    title: "Communicate",
    description:
      "Maintain clear communication with the family and relevant people involved in the child's support.",
  },
];

export default function SpecialNeedsChildrenContinuity() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#0F766E]">
            Continuity of Support
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
            Consistency helps create confidence.
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-600">
            Children and families can benefit from clear expectations,
            familiar routines, and consistent communication. MercyCare seeks
            to build continuity into the way support is organized and
            delivered.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <article
              key={step.number}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-7"
            >
              <span className="text-sm font-bold text-[#D4AF37]">
                {step.number}
              </span>

              <h3 className="mt-4 text-xl font-semibold text-[#0B1B3A]">
                {step.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
