const principles = [
  {
    title: "Purposeful",
    description:
      "Contributions should connect to a meaningful project, activity, or community need.",
  },
  {
    title: "Respectful",
    description:
      "Participation should uphold the dignity, privacy, safety, and circumstances of the people involved.",
  },
  {
    title: "Responsible",
    description:
      "Contributions and collaborations should be handled transparently and appropriately.",
  },
  {
    title: "Community-Centred",
    description:
      "Participation should contribute to work that responds to genuine community needs.",
  },
];

export default function GetInvolvedPrinciples() {
  return (
    <section className="bg-slate-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
            Responsible Participation
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
            Getting involved means contributing responsibly.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {principles.map((principle) => (
            <article
              key={principle.title}
              className="rounded-2xl border border-slate-200 bg-white p-7"
            >
              <h3 className="text-xl font-bold text-[#0B1B3A]">
                {principle.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                {principle.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
