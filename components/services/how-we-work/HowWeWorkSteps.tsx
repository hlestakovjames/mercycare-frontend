const steps = [
  {
    number: "01",
    title: "Listen",
    description:
      "We begin by listening to the individual and, where appropriate, their family or caregiver to understand the situation and priorities.",
  },
  {
    number: "02",
    title: "Understand",
    description:
      "We clarify the type of support required, the individual's preferences, and the responsibilities of everyone involved.",
  },
  {
    number: "03",
    title: "Plan",
    description:
      "An appropriate support arrangement is considered around the agreed needs, routines, and scope of care.",
  },
  {
    number: "04",
    title: "Coordinate",
    description:
      "Communication and responsibilities are established so that support can fit into the wider care environment.",
  },
  {
    number: "05",
    title: "Support",
    description:
      "Agreed services are provided with compassion, respect, consistency, and attention to the individual's dignity.",
  },
  {
    number: "06",
    title: "Review",
    description:
      "Changing circumstances are recognized and communicated so that appropriate adjustments or professional input can be considered.",
  },
];

export default function HowWeWorkSteps() {
  return (
    <section className="bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#0F766E]">
            How It Works
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
            From first conversation to ongoing support.
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-600">
            Our process is designed to keep communication clear while keeping
            the individual at the center of the care experience.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step) => (
            <article
              key={step.number}
              className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm"
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
