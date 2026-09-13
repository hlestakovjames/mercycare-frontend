const steps = [
  {
    number: "01",
    title: "Understand",
    description:
      "Begin by understanding the individual's circumstances, needs, preferences, and available support.",
  },
  {
    number: "02",
    title: "Plan",
    description:
      "Identify an appropriate care approach and clarify the responsibilities of the people involved.",
  },
  {
    number: "03",
    title: "Support",
    description:
      "Provide agreed support with attention to dignity, communication, comfort, and consistency.",
  },
  {
    number: "04",
    title: "Review",
    description:
      "Review the situation as needs change and identify when adjustments or additional support may be appropriate.",
  },
];

export default function HomeNursingProcess() {
  return (
    <section className="bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#0F766E]">
            How It Works
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
            A thoughtful approach to home nursing
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <article
              key={step.number}
              className="rounded-2xl border border-slate-200 bg-white p-7"
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
