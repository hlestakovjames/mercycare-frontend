const impactAreas = [
  {
    number: "01",
    title: "Improved wellbeing",
    description:
      "Contribute to the physical, emotional, social, and overall wellbeing of older adults through appropriate wellness and support activities.",
  },
  {
    number: "02",
    title: "Stronger social connection",
    description:
      "Help create opportunities for older adults to remain connected with families, peers, caregivers, and their communities.",
  },
  {
    number: "03",
    title: "Greater dignity and inclusion",
    description:
      "Promote environments where older adults are respected, valued, included, and supported to participate meaningfully in community life.",
  },
  {
    number: "04",
    title: "Stronger community support",
    description:
      "Encourage families, volunteers, organizations, and partners to play a greater role in supporting senior wellbeing.",
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
              Building healthier and more supportive communities for older
              adults.
            </h2>

            <p className="mt-5 leading-7 text-slate-600">
              Tuko Pamoja is intended to create meaningful improvements in
              senior wellbeing while strengthening the people and support
              systems around older adults.
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