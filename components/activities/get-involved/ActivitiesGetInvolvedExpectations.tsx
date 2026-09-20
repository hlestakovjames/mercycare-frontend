const expectations = [
  {
    title: "Respect",
    description:
      "Treat community members, families, caregivers, volunteers and partners with dignity and consideration.",
  },
  {
    title: "Responsibility",
    description:
      "Participate within the responsibilities and boundaries appropriate to the activity.",
  },
  {
    title: "Communication",
    description:
      "Share relevant information clearly and raise questions whenever instructions or responsibilities are unclear.",
  },
  {
    title: "Privacy",
    description:
      "Respect personal information and avoid sharing private details or images without appropriate permission.",
  },
];

export default function ActivitiesGetInvolvedExpectations() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-24 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#0F766E]">
              Responsible involvement
            </p>

            <h2 className="mt-4 text-3xl font-bold text-[#0B1B3A] sm:text-4xl">
              Participation should be safe, respectful and purposeful.
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              MercyCare activities involve people, families and communities.
              Responsible participation helps create a positive environment
              for everyone involved.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {expectations.map((expectation) => (
              <article
                key={expectation.title}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-7"
              >
                <h3 className="text-xl font-semibold text-[#0B1B3A]">
                  {expectation.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {expectation.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
