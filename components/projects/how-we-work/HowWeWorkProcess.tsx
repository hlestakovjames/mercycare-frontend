const steps = [
  {
    number: "01",
    title: "Identify the Need",
    description:
      "We seek to understand the health, wellbeing, care, or community need that a project is intended to address.",
  },
  {
    number: "02",
    title: "Understand the Context",
    description:
      "We consider the people involved, community circumstances, available resources, and factors that may influence the initiative.",
  },
  {
    number: "03",
    title: "Define the Response",
    description:
      "The project focus, objectives, activities, participants, and appropriate support are considered around the identified need.",
  },
  {
    number: "04",
    title: "Build Collaboration",
    description:
      "Where appropriate, MercyCare works with families, communities, professionals, organizations, institutions, and volunteers.",
  },
  {
    number: "05",
    title: "Implement",
    description:
      "Activities are carried out through practical and respectful approaches centred on the people and purpose of the project.",
  },
  {
    number: "06",
    title: "Learn & Improve",
    description:
      "Experience, participation, and feedback help identify lessons and opportunities to strengthen future initiatives.",
  },
];

export default function HowWeWorkProcess() {
  return (
    <section className="bg-slate-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
            Our Process
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
            A structured path from need to action.
          </h2>

          <p className="mt-6 text-base leading-8 text-slate-600">
            Not every project will follow exactly the same activities, but our
            overall approach provides a consistent framework for thoughtful
            project development.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step) => (
            <article
              key={step.number}
              className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm"
            >
              <span className="text-sm font-bold tracking-[0.15em] text-[#D4AF37]">
                {step.number}
              </span>

              <h3 className="mt-4 text-xl font-bold text-[#0B1B3A]">
                {step.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
