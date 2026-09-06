const impactAreas = [
  {
    title: "Healthier Mothers",
    description:
      "Promoting access to practical maternal health information, supportive care and appropriate health services.",
  },
  {
    title: "Healthier Children",
    description:
      "Supporting families with knowledge and resources that encourage healthy growth, development and wellbeing.",
  },
  {
    title: "Stronger Families",
    description:
      "Equipping parents and caregivers with practical knowledge and confidence to support mothers and children.",
  },
  {
    title: "Informed Communities",
    description:
      "Building community awareness around maternal, newborn and child wellbeing and available support.",
  },
];

export default function ProjectImpact() {
  return (
    <section className="bg-[#0B1B3A] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
            Our Intended Impact
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Creating healthier beginnings and stronger families
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-300">
            Mama na Mtoto is designed to create meaningful, sustainable
            benefits for mothers, children, families and the communities
            around them.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {impactAreas.map((area) => (
            <article
              key={area.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <div className="h-1 w-10 rounded-full bg-[#D4AF37]" />

              <h3 className="mt-6 text-lg font-semibold text-white">
                {area.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-300">
                {area.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8">
          <div className="grid gap-6 md:grid-cols-3">
            <div>
              <p className="text-sm font-semibold text-[#D4AF37]">
                Measure
              </p>

              <p className="mt-2 text-sm leading-7 text-slate-300">
                Track participation, engagement and the reach of project
                activities.
              </p>
            </div>

            <div>
              <p className="text-sm font-semibold text-[#D4AF37]">
                Learn
              </p>

              <p className="mt-2 text-sm leading-7 text-slate-300">
                Gather feedback from families, caregivers and community
                partners to improve the project.
              </p>
            </div>

            <div>
              <p className="text-sm font-semibold text-[#D4AF37]">
                Improve
              </p>

              <p className="mt-2 text-sm leading-7 text-slate-300">
                Use evidence and community feedback to strengthen future
                interventions and support.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}