const principles = [
  {
    title: "Dignity",
    description:
      "Every individual should be treated with respect, patience, privacy, and consideration.",
  },
  {
    title: "Person-Centered Support",
    description:
      "Support should reflect the individual's circumstances, preferences, abilities, and agreed needs.",
  },
  {
    title: "Compassion",
    description:
      "Kindness and empathy are essential to creating a supportive care environment.",
  },
  {
    title: "Independence",
    description:
      "Where appropriate, support should encourage individuals to participate in their own routines and decisions.",
  },
  {
    title: "Family Partnership",
    description:
      "Families and caregivers can provide valuable insight and remain important participants in the care environment.",
  },
  {
    title: "Continuity",
    description:
      "Consistent communication and coordinated support help create greater stability at home.",
  },
];

export default function CareApproachPrinciples() {
  return (
    <section className="bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#0F766E]">
            Core Principles
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
            The principles behind every care interaction.
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-600">
            These principles guide how MercyCare thinks about people, families,
            communication, and home-based support.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {principles.map((principle) => (
            <article
              key={principle.title}
              className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm"
            >
              <h3 className="text-xl font-semibold text-[#0B1B3A]">
                {principle.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                {principle.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
