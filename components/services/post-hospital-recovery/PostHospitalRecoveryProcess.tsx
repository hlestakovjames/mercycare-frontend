const steps = [
  {
    number: "01",
    title: "Understand",
    description:
      "Learn about the individual's circumstances, home environment, support network, and relevant care guidance.",
  },
  {
    number: "02",
    title: "Coordinate",
    description:
      "Clarify how MercyCare support fits alongside the individual's existing healthcare and family arrangements.",
  },
  {
    number: "03",
    title: "Support",
    description:
      "Provide appropriate home-based assistance while respecting the individual's dignity and recovery process.",
  },
  {
    number: "04",
    title: "Communicate",
    description:
      "Keep families and relevant caregivers informed about important changes or concerns within the appropriate boundaries.",
  },
];

export default function PostHospitalRecoveryProcess() {
  return (
    <section className="bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#0F766E]">
            Our Approach
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
            A coordinated approach to recovery at home.
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
