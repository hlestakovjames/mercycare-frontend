const nextSteps = [
  {
    title: "We Listen",
    description:
      "The initial conversation gives you space to explain what is happening and what kind of support you are considering.",
  },
  {
    title: "We Clarify",
    description:
      "We help establish what support may be relevant and what falls outside the appropriate scope.",
  },
  {
    title: "We Coordinate",
    description:
      "Where other people or professionals need to be involved, their role can be considered as part of the wider support picture.",
  },
  {
    title: "We Plan",
    description:
      "If MercyCare is an appropriate fit, the practical next steps can be discussed clearly before support begins.",
  },
];

export default function GetStartedNext() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0F766E]">
            What Happens Next
          </p>

          <h2 className="mt-3 text-3xl font-bold text-[#0B1B3A] sm:text-4xl">
            Clarity before commitment.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {nextSteps.map((step, index) => (
            <article
              key={step.title}
              className="rounded-2xl border border-slate-200 p-7"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0F766E] text-sm font-bold text-white">
                {index + 1}
              </div>

              <h3 className="mt-5 text-xl font-bold text-[#0B1B3A]">
                {step.title}
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
