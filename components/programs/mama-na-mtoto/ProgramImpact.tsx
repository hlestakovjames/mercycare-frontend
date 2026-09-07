const impactAreas = [
  {
    number: "01",
    title: "Improved maternal wellbeing",
    description:
      "Contribute to better physical, emotional, and social wellbeing for mothers through appropriate education, support, and connection to care.",
  },
  {
    number: "02",
    title: "Healthier child development",
    description:
      "Support awareness and practices that promote the health, growth, development, protection, and overall wellbeing of children.",
  },
  {
    number: "03",
    title: "Stronger families",
    description:
      "Encourage families and caregivers to become active participants in creating supportive and healthy environments for mothers and children.",
  },
  {
    number: "04",
    title: "Greater health awareness",
    description:
      "Strengthen access to practical maternal and child health information that can support informed decisions and preventive care.",
  },
];

export default function ProgramImpact() {
  return (
    <section className="bg-slate-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
              Impact & Outcomes
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
              Supporting healthier mothers, children, and families.
            </h2>

            <p className="mt-5 leading-7 text-slate-600">
              Mama na Mtoto is intended to contribute to stronger maternal and
              child wellbeing while building the knowledge, relationships, and
              support systems surrounding families.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {impactAreas.map((area) => (
              <article
                key={area.number}
                className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-slate-100"
              >
                <span className="text-sm font-bold text-[#D4AF37]">
                  {area.number}
                </span>

                <h3 className="mt-5 text-xl font-bold text-[#0B1B3A]">
                  {area.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {area.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}