const objectives = [
  {
    number: "01",
    title: "Promote Maternal Wellbeing",
    description:
      "Support mothers with practical health information, wellbeing education and connections to appropriate care throughout pregnancy and after childbirth.",
  },
  {
    number: "02",
    title: "Support Child Health",
    description:
      "Promote healthy growth, development, nutrition, preventive care and early identification of concerns affecting babies and young children.",
  },
  {
    number: "03",
    title: "Strengthen Family Knowledge",
    description:
      "Equip parents, caregivers and families with practical knowledge that helps them make informed decisions about maternal and child wellbeing.",
  },
  {
    number: "04",
    title: "Encourage Early Support",
    description:
      "Promote timely attention to maternal, newborn and childhood wellbeing concerns while encouraging appropriate professional referrals when needed.",
  },
  {
    number: "05",
    title: "Build Community Support",
    description:
      "Create stronger connections between families, community members, healthcare professionals and partners supporting mothers and children.",
  },
  {
    number: "06",
    title: "Promote Healthy Development",
    description:
      "Encourage positive early-childhood practices that support children's physical, emotional, social and developmental wellbeing.",
  },
];

export default function ProjectObjectives() {
  return (
    <section className="bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
            Our Objectives
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
            What Mama na Mtoto aims to achieve
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-600">
            The project focuses on practical areas that can contribute to
            healthier mothers, healthier children and stronger families.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {objectives.map((objective) => (
            <article
              key={objective.number}
              className="rounded-2xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#D4AF37] text-sm font-bold text-[#0B1B3A]">
                {objective.number}
              </div>

              <h3 className="mt-6 text-lg font-semibold text-[#0B1B3A]">
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