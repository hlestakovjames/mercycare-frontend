const supportAreas = [
  {
    title: "Daily Routine Support",
    description:
      "Appropriate assistance with everyday routines while encouraging the child's participation and independence where possible.",
  },
  {
    title: "Personal Care Support",
    description:
      "Respectful assistance with personal routines according to the child's individual circumstances and care needs.",
  },
  {
    title: "Companionship & Engagement",
    description:
      "Supportive interaction and age-appropriate engagement that respects the child's interests, preferences, and abilities.",
  },
  {
    title: "Family Support",
    description:
      "Practical collaboration with parents, guardians, and caregivers to support continuity and understanding.",
  },
  {
    title: "Routine & Consistency",
    description:
      "Helping establish familiar patterns of support that can make everyday care more predictable and comfortable.",
  },
  {
    title: "Care Coordination",
    description:
      "Clear communication with families and relevant care providers where coordination is appropriate.",
  },
];

export default function SpecialNeedsChildrenSupport() {
  return (
    <section className="bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#0F766E]">
            Areas of Support
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
            Support designed around the child and family.
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-600">
            Support needs can vary significantly from one child and family to
            another. Our approach focuses on understanding the individual
            situation before determining how support should be provided.
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
