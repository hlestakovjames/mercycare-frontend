const supportAreas = [
  {
    title: "Comfort & Daily Support",
    description:
      "Appropriate assistance with everyday routines and personal needs while prioritizing dignity and comfort.",
  },
  {
    title: "Personal Care",
    description:
      "Respectful support with personal routines in a way that protects privacy, dignity, and individual preferences.",
  },
  {
    title: "Companionship",
    description:
      "A compassionate presence and meaningful human connection during a potentially difficult period.",
  },
  {
    title: "Family Support",
    description:
      "Practical and compassionate support for family members and caregivers involved in the individual's care.",
  },
  {
    title: "Care Coordination",
    description:
      "Communication with families and relevant care providers to support continuity within the established care plan.",
  },
  {
    title: "Changing Needs",
    description:
      "Awareness that comfort and support needs can change, requiring communication and appropriate review.",
  },
];

export default function PalliativeComfortCareSupport() {
  return (
    <section className="bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#0F766E]">
            Areas of Support
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
            Support focused on comfort and quality of life.
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-600">
            Palliative and comfort-focused support can involve different needs
            for different individuals. MercyCare considers the person's
            circumstances, preferences, family environment, and established
            healthcare arrangements.
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
