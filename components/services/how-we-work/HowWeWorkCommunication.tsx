const principles = [
  {
    title: "Clear Communication",
    description:
      "Everyone involved should understand the agreed support, responsibilities, and important changes.",
  },
  {
    title: "Respectful Listening",
    description:
      "The individual receiving support remains central to conversations about their care and preferences.",
  },
  {
    title: "Family Involvement",
    description:
      "Where appropriate, families and caregivers can contribute valuable knowledge and perspective.",
  },
  {
    title: "Professional Coordination",
    description:
      "Healthcare matters outside the agreed scope of home support should involve the appropriate qualified professionals.",
  },
];

export default function HowWeWorkCommunication() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#0F766E]">
              Communication & Coordination
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
              Care works better when people stay connected.
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
              Home care often involves several people. Clear communication
              helps everyone understand their role and supports continuity.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {principles.map((principle) => (
              <article
                key={principle.title}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
              >
                <h3 className="text-lg font-semibold text-[#0B1B3A]">
                  {principle.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {principle.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
