const steps = [
  {
    number: "01",
    title: "Listen",
    description:
      "Understand the individual's preferences, circumstances, and the family's concerns.",
  },
  {
    number: "02",
    title: "Coordinate",
    description:
      "Understand how home support fits alongside the individual's established healthcare arrangements.",
  },
  {
    number: "03",
    title: "Support",
    description:
      "Provide appropriate practical and personal support with dignity and compassion.",
  },
  {
    number: "04",
    title: "Communicate",
    description:
      "Maintain respectful communication with the family and relevant care providers within appropriate boundaries.",
  },
];

export default function PalliativeComfortCareCoordination() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#0F766E]">
            Coordinated Support
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
            Compassionate support within the wider care team.
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-600">
            Comfort-focused home support works best when everyone understands
            their role. MercyCare aims to contribute to a coordinated approach
            while respecting the responsibilities of qualified healthcare
            professionals.
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
