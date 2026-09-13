const principles = [
  {
    title: "Respect",
    description:
      "Every individual deserves to be treated with patience, dignity, and respect.",
  },
  {
    title: "Comfort",
    description:
      "Support should contribute to a calm and comfortable home environment.",
  },
  {
    title: "Choice",
    description:
      "Individual preferences and wishes should be listened to and respected wherever possible.",
  },
  {
    title: "Privacy",
    description:
      "Personal information, routines, and private moments should be handled respectfully.",
  },
];

export default function PalliativeComfortCareDignity() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#0F766E]">
              Dignity & Comfort
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
              The way care is provided matters.
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
              Comfort-focused care is about more than practical assistance. It
              is also about creating an environment where people feel heard,
              respected, and supported.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {principles.map((principle) => (
              <article
                key={principle.title}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
              >
                <h3 className="text-lg font-semibold text-[#0B1B3A]">
                  {principle.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {principle.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
