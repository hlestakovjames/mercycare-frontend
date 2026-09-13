const supportAreas = [
  {
    title: "Daily Living Support",
    description:
      "Practical assistance with appropriate everyday activities while respecting the individual's independence and preferences.",
  },
  {
    title: "Personal Care Support",
    description:
      "Respectful support with personal routines where additional assistance may be needed.",
  },
  {
    title: "Companionship",
    description:
      "Friendly human connection and meaningful interaction that can help reduce isolation and support wellbeing.",
  },
  {
    title: "Routine & Continuity",
    description:
      "Consistent support that helps maintain familiar routines and provides reassurance for individuals and families.",
  },
  {
    title: "Family Support",
    description:
      "Communication and practical support for family members involved in an older adult's care journey.",
  },
  {
    title: "Care Coordination",
    description:
      "Support in maintaining clear communication between the individual, family, caregivers, and relevant care providers.",
  },
];

export default function SeniorElderlyCareSupport() {
  return (
    <section className="bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#0F766E]">
            Areas of Support
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
            Support that fits everyday life.
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-600">
            Senior care can involve different types of support. MercyCare
            focuses on understanding what matters to each individual and
            providing appropriate assistance around their circumstances.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {supportAreas.map((area) => (
            <article
              key={area.title}
              className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm"
            >
              <h3 className="text-xl font-semibold text-[#0B1B3A]">
                {area.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                {area.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
