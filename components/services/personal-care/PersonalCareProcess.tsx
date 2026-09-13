const steps = [
  {
    number: "01",
    title: "Understand",
    description:
      "Learn about the individual's routines, preferences, abilities, and support needs.",
  },
  {
    number: "02",
    title: "Agree",
    description:
      "Clarify the appropriate areas of assistance and how support should fit into everyday life.",
  },
  {
    number: "03",
    title: "Support",
    description:
      "Provide agreed assistance respectfully, patiently, and with attention to dignity.",
  },
  {
    number: "04",
    title: "Review",
    description:
      "Recognize when circumstances change and communicate appropriately about changing support needs.",
  },
];

export default function PersonalCareProcess() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#0F766E]">
            How It Works
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
            A respectful approach to personal support.
          </h2>
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
