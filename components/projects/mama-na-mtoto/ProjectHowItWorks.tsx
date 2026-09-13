const steps = [
  {
    number: "01",
    title: "Understand the Context",
    description:
      "Initiatives begin by considering the needs of mothers, children, families, and the communities involved.",
  },
  {
    number: "02",
    title: "Identify the Focus",
    description:
      "The specific purpose and intended participants of each initiative are defined according to the identified need.",
  },
  {
    number: "03",
    title: "Plan With the Right People",
    description:
      "Relevant families, professionals, community stakeholders, volunteers, and partners can contribute where appropriate.",
  },
  {
    number: "04",
    title: "Implement",
    description:
      "Activities are delivered through practical, respectful, and community-centred approaches.",
  },
  {
    number: "05",
    title: "Learn & Improve",
    description:
      "Participation, experience, and feedback provide opportunities to strengthen future initiatives.",
  },
];

export default function ProjectHowItWorks() {
  return (
    <section className="bg-slate-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
            How It Works
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
            A practical approach centred on families and communities.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
          {steps.map((step) => (
            <article
              key={step.number}
              className="rounded-2xl border border-slate-200 bg-white p-6"
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
