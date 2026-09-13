const steps = [
  {
    number: "01",
    title: "Understand the Need",
    description:
      "Activities begin with an understanding of the people, community context, and senior wellness needs involved.",
  },
  {
    number: "02",
    title: "Plan the Initiative",
    description:
      "Appropriate activities, people, resources, and partnerships are considered according to the purpose of the initiative.",
  },
  {
    number: "03",
    title: "Engage the Community",
    description:
      "Families, older adults, professionals, volunteers, and relevant community stakeholders can participate where appropriate.",
  },
  {
    number: "04",
    title: "Implement",
    description:
      "Planned activities are delivered through practical and respectful approaches centred on the people being supported.",
  },
  {
    number: "05",
    title: "Learn & Improve",
    description:
      "Experience, participation, and feedback help MercyCare understand opportunities for strengthening future initiatives.",
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
            A community-centred project approach.
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
