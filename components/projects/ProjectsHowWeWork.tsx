export default function ProjectsHowWeWork() {
  const steps = [
    {
      number: "01",
      title: "Identify the Need",
      description:
        "We begin by understanding the health, wellbeing, and community needs that a project is intended to address.",
    },
    {
      number: "02",
      title: "Plan the Response",
      description:
        "Project activities are shaped around clear objectives, appropriate resources, professional input, and the people they are intended to serve.",
    },
    {
      number: "03",
      title: "Work With Partners",
      description:
        "Where appropriate, MercyCare works with communities, healthcare professionals, organizations, institutions, and volunteers to strengthen implementation.",
    },
    {
      number: "04",
      title: "Implement",
      description:
        "Planned activities are carried out through practical, community-centred approaches that respond to the identified need.",
    },
    {
      number: "05",
      title: "Learn & Improve",
      description:
        "Project experiences and feedback help MercyCare understand what is working and identify opportunities to improve future initiatives.",
    },
  ];

  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
            How We Work
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
            A practical approach from need to action.
          </h2>

          <p className="mt-6 text-base leading-8 text-slate-600">
            MercyCare projects are developed through a structured but
            community-centred process that allows each initiative to respond to
            its purpose, context, and available partnerships.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-5">
          {steps.map((step) => (
            <article
              key={step.number}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
            >
              <span className="text-sm font-bold tracking-[0.15em] text-[#D4AF37]">
                {step.number}
              </span>

              <h3 className="mt-4 text-lg font-bold text-[#0B1B3A]">
                {step.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
