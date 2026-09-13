const wellbeingAreas = [
  {
    title: "Time",
    description:
      "Practical support can help caregivers create space for other responsibilities and personal needs.",
  },
  {
    title: "Confidence",
    description:
      "Clear communication and defined responsibilities can make the care environment easier to navigate.",
  },
  {
    title: "Connection",
    description:
      "Families can remain connected to their loved one's care while receiving appropriate additional support.",
  },
  {
    title: "Sustainability",
    description:
      "Shared responsibility can help families approach caregiving as a sustainable process rather than a burden carried alone.",
  },
];

export default function FamilyCaregiverSupportWellbeing() {
  return (
    <section className="bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#0F766E]">
            Caregiver Wellbeing
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
            Supporting caregivers matters too.
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-600">
            A healthy care environment considers both the person receiving
            support and the people helping them. Appropriate assistance can
            reduce some practical pressure while allowing families to remain
            involved.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {wellbeingAreas.map((area) => (
            <article
              key={area.title}
              className="rounded-2xl border border-slate-200 bg-white p-7"
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
