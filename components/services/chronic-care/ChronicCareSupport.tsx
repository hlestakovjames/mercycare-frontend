const supportAreas = [
  {
    title: "Daily Living Support",
    description:
      "Practical assistance with appropriate everyday routines for individuals whose ongoing circumstances affect daily activities.",
  },
  {
    title: "Personal Care",
    description:
      "Respectful support with personal routines while protecting dignity, privacy, and individual preferences.",
  },
  {
    title: "Routine & Continuity",
    description:
      "Consistent support that helps individuals and families maintain familiar routines over time.",
  },
  {
    title: "Family & Caregiver Support",
    description:
      "Communication and practical collaboration with family members and caregivers involved in ongoing support.",
  },
  {
    title: "Care Coordination",
    description:
      "Support for clear communication between the individual, family, caregivers, and relevant healthcare professionals.",
  },
  {
    title: "Changing Needs",
    description:
      "Awareness that long-term care needs can change and may require review or adjustment of support arrangements.",
  },
];

export default function ChronicCareSupport() {
  return (
    <section className="bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#0F766E]">
            Areas of Support
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
            Support that fits into everyday life.
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-600">
            Chronic care support is not identical for everyone. MercyCare
            considers the individual's circumstances and existing care
            arrangements when determining appropriate home-based support.
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
