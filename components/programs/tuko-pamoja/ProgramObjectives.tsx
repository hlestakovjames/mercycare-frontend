const objectives = [
  {
    number: "01",
    title: "Promote wellbeing",
    description:
      "Encourage activities and support systems that contribute to the physical, emotional, mental, and social wellbeing of older adults.",
  },
  {
    number: "02",
    title: "Strengthen connection",
    description:
      "Create opportunities for older adults to remain connected with their families, peers, caregivers, and wider communities.",
  },
  {
    number: "03",
    title: "Protect dignity and independence",
    description:
      "Promote respectful, compassionate, and inclusive approaches that recognize the dignity, experience, and individuality of every older adult.",
  },
  {
    number: "04",
    title: "Build stronger support systems",
    description:
      "Bring families, volunteers, organizations, healthcare professionals, and community partners together around the wellbeing of older adults.",
  },
  {
    number: "05",
    title: "Encourage healthy ageing",
    description:
      "Promote awareness, preventive wellness, healthy lifestyles, and practical approaches that support better quality of life as people age.",
  },
  {
    number: "06",
    title: "Improve access to support",
    description:
      "Help connect older adults and their families with relevant care, wellness resources, community support, and professional services.",
  },
];

export default function ProgramObjectives() {
  return (
    <section className="bg-slate-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
            Program Objectives
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
            What Tuko Pamoja aims to achieve.
          </h2>

          <p className="mt-5 leading-7 text-slate-600">
            Tuko Pamoja is designed to contribute to healthier, more connected,
            and more supportive communities for older adults and their
            families.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {objectives.map((objective) => (
            <article
              key={objective.number}
              className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-100 transition hover:-translate-y-1 hover:shadow-md"
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