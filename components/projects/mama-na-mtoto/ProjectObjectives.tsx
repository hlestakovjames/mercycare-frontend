const objectives = [
  {
    number: "01",
    title: "Support Maternal Wellbeing",
    description:
      "Promote practical approaches that support mothers' health, wellbeing, dignity, and access to appropriate information and support.",
  },
  {
    number: "02",
    title: "Promote Child Wellbeing",
    description:
      "Support initiatives that contribute to healthy development, wellbeing, safety, and appropriate care for children.",
  },
  {
    number: "03",
    title: "Strengthen Families",
    description:
      "Encourage families and caregivers to participate in informed and supportive approaches to maternal and child wellbeing.",
  },
  {
    number: "04",
    title: "Connect Community & Care",
    description:
      "Create appropriate links between community initiatives, professional support, health education, and wider MercyCare services.",
  },
];

export default function ProjectObjectives() {
  return (
    <section className="bg-slate-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
            Objectives
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
            What Mama na Mtoto seeks to support.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {objectives.map((objective) => (
            <article
              key={objective.number}
              className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm"
            >
              <span className="text-sm font-bold tracking-[0.15em] text-[#D4AF37]">
                {objective.number}
              </span>

              <h3 className="mt-4 text-xl font-bold text-[#0B1B3A]">
                {objective.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                {objective.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
