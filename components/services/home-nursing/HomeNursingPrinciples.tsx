const principles = [
  "Respect for dignity and privacy",
  "Person-centered care",
  "Clear communication",
  "Consistency and continuity",
  "Respect for family and caregiver roles",
  "Attention to changing needs",
];

export default function HomeNursingPrinciples() {
  return (
    <section className="bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#0F766E]">
              Our Principles
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
              The way we deliver care matters.
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {principles.map((principle) => (
              <div
                key={principle}
                className="rounded-xl border border-slate-200 bg-white px-5 py-4 text-sm font-medium text-slate-700"
              >
                {principle}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
