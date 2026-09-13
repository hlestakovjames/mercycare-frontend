export default function ProjectsImpact() {
  const outcomes = [
    {
      title: "Improved Access",
      description:
        "Projects can help bring appropriate health information, support, and services closer to people and communities.",
    },
    {
      title: "Greater Awareness",
      description:
        "Community initiatives can strengthen understanding of health, prevention, wellbeing, caregiving, and available support.",
    },
    {
      title: "Stronger Communities",
      description:
        "Collaborative projects can encourage families, professionals, volunteers, and community stakeholders to work together.",
    },
    {
      title: "Better Connections",
      description:
        "Projects can create stronger links between community needs, professional healthcare support, and wider MercyCare services.",
    },
    {
      title: "Sustainable Learning",
      description:
        "Each initiative provides opportunities to learn from community experiences and improve future approaches.",
    },
  ];

  return (
    <section className="bg-[#0B1B3A] py-20 text-white lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
              Project Impact
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Measuring what meaningful action can achieve.
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-300">
              MercyCare looks beyond activity alone. Projects are intended to
              contribute to practical improvements in access, awareness,
              connection, wellbeing, and community participation.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {outcomes.map((outcome) => (
              <article
                key={outcome.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <h3 className="text-lg font-bold text-white">
                  {outcome.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {outcome.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
