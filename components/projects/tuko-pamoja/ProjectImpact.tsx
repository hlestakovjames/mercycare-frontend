export default function ProjectImpact() {
  const impactAreas = [
    {
      number: "01",
      title: "Improved Wellbeing",
      description:
        "Supporting older adults to make healthier choices and maintain their physical, emotional and social wellbeing.",
    },
    {
      number: "02",
      title: "Stronger Connections",
      description:
        "Creating opportunities for seniors to build relationships, participate in community life and reduce social isolation.",
    },
    {
      number: "03",
      title: "Empowered Families",
      description:
        "Helping families and caregivers gain practical knowledge and confidence in supporting older adults.",
    },
    {
      number: "04",
      title: "Healthier Communities",
      description:
        "Strengthening community awareness and local support systems around healthy ageing and senior wellbeing.",
    },
  ];

  return (
    <section className="bg-[#0B1B3A] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
            Our Impact
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Making a meaningful difference
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-300">
            Tuko Pamoja is designed to create lasting improvements in the
            lives of older adults, their families and the communities that
            support them.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {impactAreas.map((area) => (
            <article
              key={area.number}
              className="rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#D4AF37] text-sm font-bold text-[#0B1B3A]">
                {area.number}
              </div>

              <h3 className="mt-6 text-lg font-semibold text-white">
                {area.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-300">
                {area.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-14 grid gap-5 border-t border-white/10 pt-12 sm:grid-cols-3">
          <div className="text-center">
            <p className="text-4xl font-bold text-[#D4AF37]">Community</p>
            <p className="mt-2 text-sm text-slate-300">
              Focused senior wellness
            </p>
          </div>

          <div className="text-center">
            <p className="text-4xl font-bold text-[#D4AF37]">Dignity</p>
            <p className="mt-2 text-sm text-slate-300">
              At the heart of every interaction
            </p>
          </div>

          <div className="text-center">
            <p className="text-4xl font-bold text-[#D4AF37]">Together</p>
            <p className="mt-2 text-sm text-slate-300">
              Families and communities working together
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}