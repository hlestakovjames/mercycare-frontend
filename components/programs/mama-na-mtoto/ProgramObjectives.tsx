const objectives = [
  {
    number: "01",
    title: "Promote maternal wellbeing",
    description:
      "Support mothers through information, education, compassionate care, and appropriate wellness support across different stages of the maternal journey.",
  },
  {
    number: "02",
    title: "Support child wellbeing",
    description:
      "Promote healthy growth, development, protection, and wellbeing for children through family-centred and community-based support.",
  },
  {
    number: "03",
    title: "Strengthen family support",
    description:
      "Encourage families to play an active role in supporting mothers and children while building stronger and more supportive home environments.",
  },
  {
    number: "04",
    title: "Promote health education",
    description:
      "Improve access to practical health information that can help mothers and families make informed decisions about maternal and child wellbeing.",
  },
  {
    number: "05",
    title: "Encourage preventive care",
    description:
      "Promote awareness and practices that support prevention, early attention to health concerns, and healthier lifestyles for mothers and children.",
  },
  {
    number: "06",
    title: "Connect families to appropriate support",
    description:
      "Help families access relevant healthcare professionals, community resources, wellness services, and other forms of support according to identified needs.",
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
            What Mama na Mtoto aims to achieve.
          </h2>

          <p className="mt-5 leading-7 text-slate-600">
            The program seeks to strengthen the wellbeing of mothers and
            children while helping families and communities create healthier,
            safer, and more supportive environments.
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