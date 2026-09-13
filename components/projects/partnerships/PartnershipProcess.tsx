const steps = [
  {
    number: "01",
    title: "Start a Conversation",
    description:
      "Prospective partners can share their organization, expertise, resources, and the kind of collaboration they are considering.",
  },
  {
    number: "02",
    title: "Understand the Need",
    description:
      "MercyCare considers whether the proposed collaboration connects with a relevant project, community need, or organizational priority.",
  },
  {
    number: "03",
    title: "Explore the Fit",
    description:
      "Both parties can discuss the purpose, potential contribution, responsibilities, expectations, and practical requirements.",
  },
  {
    number: "04",
    title: "Agree the Approach",
    description:
      "Where appropriate, roles and arrangements are clarified before collaborative work begins.",
  },
];

export default function PartnershipProcess() {
  return (
    <section className="bg-slate-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
            Starting a Partnership
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
            From conversation to collaboration.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <article
              key={step.number}
              className="rounded-2xl border border-slate-200 bg-white p-7"
            >
              <span className="text-sm font-bold tracking-[0.15em] text-[#D4AF37]">
                {step.number}
              </span>

              <h3 className="mt-4 text-lg font-bold text-[#0B1B3A]">
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
