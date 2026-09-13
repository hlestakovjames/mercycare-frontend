const supportAreas = [
  {
    title: "Personal Hygiene Support",
    description:
      "Respectful assistance with appropriate personal hygiene routines while protecting privacy and dignity.",
  },
  {
    title: "Dressing & Grooming",
    description:
      "Support with appropriate dressing and grooming routines according to individual preferences and abilities.",
  },
  {
    title: "Daily Personal Routines",
    description:
      "Practical assistance with personal routines that may be difficult to manage independently.",
  },
  {
    title: "Mobility-Related Support",
    description:
      "Appropriate assistance around everyday movement and routines within the agreed scope of care.",
  },
  {
    title: "Comfort & Wellbeing",
    description:
      "A compassionate approach that considers comfort, emotional wellbeing, privacy, and personal preferences.",
  },
  {
    title: "Family Communication",
    description:
      "Clear communication with families and caregivers where appropriate to support continuity and understanding.",
  },
];

export default function PersonalCareSupport() {
  return (
    <section className="bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#0F766E]">
            Areas of Support
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
            Assistance shaped around the individual.
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-600">
            Personal care needs vary from person to person. MercyCare seeks to
            understand the individual's circumstances before determining the
            appropriate level and type of support.
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
