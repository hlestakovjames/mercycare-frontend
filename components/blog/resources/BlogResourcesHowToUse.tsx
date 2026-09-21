const steps = [
  {
    number: "01",
    title: "Explore by topic",
    description:
      "Start with the subject closest to what you are looking for, from care and wellness to family and caregiving.",
  },
  {
    number: "02",
    title: "Read with context",
    description:
      "Use resources as educational and practical material while considering your own circumstances and information needs.",
  },
  {
    number: "03",
    title: "Know when to seek advice",
    description:
      "General information does not replace individual assessment, diagnosis or professional healthcare advice.",
  },
];

export default function BlogResourcesHowToUse() {
  return (
    <section className="bg-white px-6 py-16 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-violet-600">
            Using the Resource Center
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Resources should inform, not overwhelm.
          </h2>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {steps.map((step) => (
            <article
              key={step.number}
              className="rounded-3xl bg-slate-50 p-7"
            >
              <span className="text-sm font-bold text-cyan-600">
                {step.number}
              </span>

              <h3 className="mt-4 text-xl font-semibold text-slate-900">
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
