const stages = [
  {
    number: "01",
    title: "Connect",
    description:
      "Understand community interests, needs and opportunities for engagement.",
  },
  {
    number: "02",
    title: "Participate",
    description:
      "Bring people together through appropriate activities, conversations and shared experiences.",
  },
  {
    number: "03",
    title: "Learn",
    description:
      "Encourage reflection, awareness and the responsible exchange of knowledge.",
  },
  {
    number: "04",
    title: "Grow",
    description:
      "Use experience and community feedback to inform future activities and engagement.",
  },
];

export default function ActivitiesOverviewLifecycle() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-24 lg:px-10">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#0F766E]">
            Our activity approach
          </p>

          <h2 className="mt-4 text-3xl font-bold text-[#0B1B3A] sm:text-4xl">
            Activities can create a cycle of connection and learning.
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            The emphasis is on meaningful participation rather than simply
            counting activities.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {stages.map((stage) => (
            <article
              key={stage.number}
              className="rounded-3xl border border-slate-200 p-7"
            >
              <span className="text-sm font-bold text-[#D4AF37]">
                {stage.number}
              </span>

              <h3 className="mt-4 text-2xl font-semibold text-[#0B1B3A]">
                {stage.title}
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                {stage.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
