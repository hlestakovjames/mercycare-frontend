const areas = [
  {
    number: "01",
    title: "Health & Wellbeing",
    description:
      "Projects can contribute to improved awareness, wellbeing, healthy practices, and appropriate access to support.",
  },
  {
    number: "02",
    title: "Dignity & Care",
    description:
      "Initiatives can strengthen respectful approaches to care and support for people and families.",
  },
  {
    number: "03",
    title: "Connection",
    description:
      "Projects can help people connect with families, communities, professionals, volunteers, and relevant support.",
  },
  {
    number: "04",
    title: "Participation",
    description:
      "Meaningful participation can help communities and individuals play an active role in initiatives affecting them.",
  },
  {
    number: "05",
    title: "Knowledge & Awareness",
    description:
      "Education and awareness activities can strengthen understanding of health, prevention, wellbeing, and available resources.",
  },
  {
    number: "06",
    title: "Community Capacity",
    description:
      "Appropriate collaboration can strengthen relationships, skills, networks, and community-led responses.",
  },
];

export default function ImpactAreas() {
  return (
    <section className="bg-slate-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
            Areas of Impact
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
            The kinds of change our projects can support.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {areas.map((area) => (
            <article
              key={area.number}
              className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm"
            >
              <span className="text-sm font-bold tracking-[0.15em] text-[#D4AF37]">
                {area.number}
              </span>

              <h3 className="mt-4 text-xl font-bold text-[#0B1B3A]">
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
