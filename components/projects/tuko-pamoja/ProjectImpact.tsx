const outcomes = [
  {
    title: "Dignity",
    description:
      "Encouraging approaches that respect older adults as individuals with their own preferences, experiences, and aspirations.",
  },
  {
    title: "Connection",
    description:
      "Creating opportunities for older adults to remain connected to families, communities, and supportive networks.",
  },
  {
    title: "Wellbeing",
    description:
      "Supporting practical approaches that contribute to broader physical, emotional, and social wellbeing.",
  },
  {
    title: "Participation",
    description:
      "Creating opportunities for older adults and their support networks to participate meaningfully in appropriate initiatives.",
  },
];

export default function ProjectImpact() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
            Impact & Outcomes
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
            What meaningful senior wellness action can contribute to.
          </h2>

          <p className="mt-6 text-base leading-8 text-slate-600">
            Tuko Pamoja is intended to contribute to positive experiences and
            stronger support around older adults. Specific outcomes depend on
            the nature and context of individual initiatives.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {outcomes.map((outcome) => (
            <article
              key={outcome.title}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-7"
            >
              <h3 className="text-xl font-bold text-[#0B1B3A]">
                {outcome.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                {outcome.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
