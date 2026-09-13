const considerations = [
  {
    title: "Reach",
    description:
      "Who participated, who was supported, and whether the intended communities were reached.",
  },
  {
    title: "Experience",
    description:
      "What participants, families, volunteers, professionals, and partners experienced during the initiative.",
  },
  {
    title: "Outcomes",
    description:
      "What meaningful changes or benefits may have emerged from the project's activities.",
  },
  {
    title: "Learning",
    description:
      "What the project teaches MercyCare about future activities, partnerships, and community needs.",
  },
];

export default function ImpactMeasurement() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
              Learning From Impact
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
              Looking at more than numbers.
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-600">
              Quantitative information can be useful, but understanding a
              project's contribution may also require listening to people and
              considering context.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {considerations.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
              >
                <h3 className="text-lg font-bold text-[#0B1B3A]">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
