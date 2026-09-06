export default function ProjectObjectives() {
  const objectives = [
    {
      number: "01",
      title: "Promote Healthy Ageing",
      description:
        "Support older adults to maintain physical, emotional and social wellbeing through accessible, community-centred wellness initiatives.",
    },
    {
      number: "02",
      title: "Protect Dignity & Independence",
      description:
        "Promote an environment where older adults are respected, valued and supported to remain as independent as possible.",
    },
    {
      number: "03",
      title: "Strengthen Social Connection",
      description:
        "Reduce isolation by creating meaningful opportunities for older adults to interact, participate and remain connected to their communities.",
    },
    {
      number: "04",
      title: "Support Families & Caregivers",
      description:
        "Equip families and caregivers with practical knowledge and support to better respond to the changing needs of older adults.",
    },
    {
      number: "05",
      title: "Increase Health Awareness",
      description:
        "Promote awareness of healthy lifestyles, preventive care, chronic disease management and other issues affecting senior wellbeing.",
    },
    {
      number: "06",
      title: "Build Community Partnerships",
      description:
        "Work with local communities, healthcare professionals, organisations and other partners to strengthen support systems for older adults.",
    },
  ];

  return (
    <section className="bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
            Our Objectives
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
            Creating better outcomes for older adults
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-600">
            Tuko Pamoja focuses on practical, sustainable approaches that
            improve the wellbeing of older adults while strengthening the
            families and communities around them.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {objectives.map((objective) => (
            <article
              key={objective.number}
              className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0B1B3A] text-sm font-bold text-white">
                {objective.number}
              </div>

              <h3 className="mt-6 text-lg font-semibold text-[#0B1B3A]">
                {objective.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                {objective.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}