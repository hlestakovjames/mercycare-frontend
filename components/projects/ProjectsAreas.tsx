export default function ProjectsAreas() {
  const areas = [
    {
      title: "Community Health",
      description:
        "Initiatives that bring practical health support, education, and wellbeing-focused activities closer to communities.",
    },
    {
      title: "Family & Care Support",
      description:
        "Projects that respond to the needs of families, caregivers, children, mothers, and other people who require coordinated support.",
    },
    {
      title: "Senior Wellness",
      description:
        "Community-focused initiatives connected to the wellbeing, dignity, social support, and quality of life of older adults.",
    },
    {
      title: "Maternal & Child Wellbeing",
      description:
        "Initiatives that support mothers, newborns, children, and families through appropriate health and community-based interventions.",
    },
    {
      title: "Health Education & Awareness",
      description:
        "Activities that promote health knowledge, prevention, early awareness, healthy living, and informed decisions within communities.",
    },
    {
      title: "Community Partnerships",
      description:
        "Collaborative initiatives developed with professionals, organizations, volunteers, institutions, and community stakeholders.",
    },
  ];

  return (
    <section className="bg-slate-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
            Project Areas
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
            Areas where our projects can create meaningful impact.
          </h2>

          <p className="mt-6 text-base leading-8 text-slate-600">
            MercyCare projects may operate across different areas depending on
            community needs, available partnerships, and the objectives of each
            initiative.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {areas.map((area) => (
            <article
              key={area.title}
              className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm"
            >
              <h3 className="text-xl font-bold text-[#0B1B3A]">
                {area.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                {area.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
