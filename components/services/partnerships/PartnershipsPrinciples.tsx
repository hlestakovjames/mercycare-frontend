const principles = [
  {
    title: "Shared Purpose",
    description:
      "Partnerships should have a clear purpose that contributes positively to the people, families or communities involved.",
  },
  {
    title: "Respect for Roles",
    description:
      "Each partner brings a different responsibility or area of expertise. Those roles should remain clear and respected.",
  },
  {
    title: "Clear Communication",
    description:
      "Open and appropriate communication helps partners understand expectations and coordinate their contribution effectively.",
  },
  {
    title: "Trust & Professionalism",
    description:
      "Reliable relationships are built through honesty, accountability, respectful conduct and responsible follow-through.",
  },
  {
    title: "Person-Centered Thinking",
    description:
      "The interests, dignity and circumstances of the person or community being supported should remain central to collaboration.",
  },
  {
    title: "Appropriate Boundaries",
    description:
      "Collaboration should remain within the agreed responsibilities of each partner and should not replace specialist professional care.",
  },
];

export default function PartnershipsPrinciples() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0F766E]">
              Partnership Principles
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[#0B1B3A] sm:text-4xl">
              Collaboration should be purposeful and responsible.
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              We value partnerships that create clarity, strengthen support
              and respect the responsibilities of everyone involved.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {principles.map((principle, index) => (
              <article
                key={principle.title}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
              >
                <span className="text-sm font-bold text-[#D4AF37]">
                  0{index + 1}
                </span>

                <h3 className="mt-3 text-lg font-bold text-[#0B1B3A]">
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
