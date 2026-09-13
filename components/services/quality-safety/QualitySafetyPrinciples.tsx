const principles = [
  {
    title: "Dignity & Respect",
    description:
      "Every person should be treated with dignity, patience, privacy and respect regardless of age, circumstance or support needs.",
  },
  {
    title: "Clear Communication",
    description:
      "Families and caregivers should understand the agreed support, expectations and important changes affecting the care experience.",
  },
  {
    title: "Person-Centered Support",
    description:
      "Support should reflect the individual's routines, preferences, circumstances and level of independence.",
  },
  {
    title: "Appropriate Scope",
    description:
      "Care should remain within an appropriate scope, with qualified professionals involved whenever needs require specialist healthcare attention.",
  },
  {
    title: "Continuity",
    description:
      "Consistent communication and coordination help families experience greater clarity as support needs change over time.",
  },
  {
    title: "Responsibility",
    description:
      "We take concerns seriously and seek to respond thoughtfully, communicate appropriately and improve where lessons are identified.",
  },
];

export default function QualitySafetyPrinciples() {
  return (
    <section className="bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0F766E]">
            Quality Principles
          </p>

          <h2 className="mt-3 text-3xl font-bold text-[#0B1B3A] sm:text-4xl">
            Principles that guide our support.
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            These principles help shape how MercyCare approaches people,
            families, communication and everyday care support.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {principles.map((principle) => (
            <article
              key={principle.title}
              className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm"
            >
              <div className="mb-5 h-1.5 w-12 rounded-full bg-[#D4AF37]" />

              <h3 className="text-xl font-bold text-[#0B1B3A]">
                {principle.title}
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                {principle.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
