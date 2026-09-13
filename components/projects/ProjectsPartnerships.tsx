export default function ProjectsPartnerships() {
  const partnerships = [
    {
      title: "Healthcare Professionals",
      description:
        "Working with qualified healthcare professionals can strengthen the clinical knowledge, guidance, and support available within appropriate projects.",
    },
    {
      title: "Community Organizations",
      description:
        "Community-based organizations can help MercyCare understand local needs and connect initiatives with the people they are intended to serve.",
    },
    {
      title: "Institutions",
      description:
        "Schools, workplaces, institutions, and other organizations can provide valuable opportunities for collaborative health and wellbeing initiatives.",
    },
    {
      title: "Volunteers",
      description:
        "Volunteers can contribute time, skills, community knowledge, and practical support to appropriate MercyCare initiatives.",
    },
    {
      title: "Strategic Partners",
      description:
        "Long-term partnerships can help strengthen resources, expertise, coordination, and opportunities for sustainable community impact.",
    },
  ];

  return (
    <section className="bg-slate-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
            Partnerships
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
            Working together to strengthen community impact.
          </h2>

          <p className="mt-6 text-base leading-8 text-slate-600">
            Meaningful projects often require collaboration. MercyCare
            welcomes opportunities to work with people and organizations that
            share a commitment to improving health, wellbeing, dignity, and
            community support.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {partnerships.map((partnership) => (
            <article
              key={partnership.title}
              className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm"
            >
              <h3 className="text-xl font-bold text-[#0B1B3A]">
                {partnership.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                {partnership.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
