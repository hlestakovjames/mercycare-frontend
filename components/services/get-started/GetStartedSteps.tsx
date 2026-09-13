const steps = [
  {
    number: "01",
    title: "Contact MercyCare",
    description:
      "Reach out through the available contact channels and let us know that you would like to discuss support.",
  },
  {
    number: "02",
    title: "Have a Conversation",
    description:
      "Share the circumstances, priorities and questions that matter to you and your family.",
  },
  {
    number: "03",
    title: "Understand the Need",
    description:
      "Together, we consider the type of support being explored and whether it fits within the appropriate scope.",
  },
  {
    number: "04",
    title: "Agree the Support",
    description:
      "Where there is a suitable fit, expectations and the practical approach can be discussed clearly.",
  },
  {
    number: "05",
    title: "Begin",
    description:
      "Once the appropriate arrangements are understood and agreed, the support journey can begin.",
  },
];

export default function GetStartedSteps() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0F766E]">
            The Process
          </p>

          <h2 className="mt-3 text-3xl font-bold text-[#0B1B3A] sm:text-4xl">
            A simple path from first contact to support.
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            The process is designed to create understanding before any support
            arrangement is made.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
          {steps.map((step) => (
            <article
              key={step.number}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
            >
              <span className="text-sm font-bold text-[#D4AF37]">
                {step.number}
              </span>

              <h3 className="mt-3 text-lg font-bold text-[#0B1B3A]">
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
