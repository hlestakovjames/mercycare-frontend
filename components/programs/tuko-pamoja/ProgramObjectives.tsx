const objectives = [
  {
    number: "01",
    title: "Promote wellbeing",
    description:
      "Encourage activities and support systems that contribute to the physical, emotional, and social wellbeing of older adults.",
  },
  {
    number: "02",
    title: "Strengthen connection",
    description:
      "Create opportunities for seniors to remain connected with families, peers, and their wider communities.",
  },
  {
    number: "03",
    title: "Protect dignity",
    description:
      "Promote respectful, compassionate, and inclusive approaches to supporting older adults.",
  },
  {
    number: "04",
    title: "Build community support",
    description:
      "Bring volunteers, families, organizations, and community partners together around senior wellbeing.",
  },
];

export default function ProgramObjectives() {
  return (
    <section className="bg-slate-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
            Our Objectives
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
            What Tuko Pamoja aims to achieve.
          </h2>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {objectives.map((objective) => (
            <article
              key={objective.number}
              className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-100"
            >
              <span className="text-sm font-bold text-[#D4AF37]">
                {objective.number}
              </span>

              <h3 className="mt-5 text-xl font-bold text-[#0B1B3A]">
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