const areas = [
  {
    number: "01",
    title: "Community Health",
    description:
      "Projects that bring practical health support, education, awareness, and wellbeing-focused initiatives closer to communities.",
  },
  {
    number: "02",
    title: "Family & Care Support",
    description:
      "Initiatives that respond to the needs of families, caregivers, children, and people requiring coordinated support.",
  },
  {
    number: "03",
    title: "Senior Wellness",
    description:
      "Community-focused projects supporting the wellbeing, dignity, social connection, and quality of life of older adults.",
  },
  {
    number: "04",
    title: "Maternal & Child Wellbeing",
    description:
      "Initiatives supporting mothers, newborns, children, and families through appropriate health and community-based interventions.",
  },
  {
    number: "05",
    title: "Health Education & Awareness",
    description:
      "Projects that promote health knowledge, prevention, early awareness, healthy living, and informed community decision-making.",
  },
  {
    number: "06",
    title: "Community Partnerships",
    description:
      "Collaborative initiatives developed with professionals, organizations, institutions, volunteers, and community stakeholders.",
  },
];

export default function ProjectAreaDirectory() {
  return (
    <section className="bg-slate-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
            Areas of Work
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
            Our project areas
          </h2>

          <p className="mt-6 text-base leading-8 text-slate-600">
            These areas provide the foundation for projects developed around
            specific community needs and opportunities for action.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {areas.map((area) => (
            <article
              key={area.number}
              className="flex flex-col rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-shadow hover:shadow-md"
            >
              <span className="text-sm font-bold tracking-[0.15em] text-[#D4AF37]">
                {area.number}
              </span>

              <h3 className="mt-4 text-xl font-bold text-[#0B1B3A]">
                {area.title}
              </h3>

              <p className="mt-4 flex-1 text-sm leading-7 text-slate-600">
                {area.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
