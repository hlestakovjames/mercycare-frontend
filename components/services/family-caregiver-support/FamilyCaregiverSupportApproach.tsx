const steps = [
  {
    number: "01",
    title: "Listen",
    description:
      "Understand the individual's situation and the family's priorities, concerns, and expectations.",
  },
  {
    number: "02",
    title: "Understand",
    description:
      "Clarify what type of support is appropriate and what responsibilities remain with family or qualified professionals.",
  },
  {
    number: "03",
    title: "Coordinate",
    description:
      "Establish clear communication and agreed routines for the support being provided.",
  },
  {
    number: "04",
    title: "Review",
    description:
      "Recognize changing circumstances and communicate appropriately when additional assessment or professional input is needed.",
  },
];

export default function FamilyCaregiverSupportApproach() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#0F766E]">
            Our Approach
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
            Clear roles. Open communication. Compassionate support.
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
