const actions = [
  "Listen to participants and communities.",
  "Review what worked and what could be improved.",
  "Learn from partners and professionals.",
  "Use experience to strengthen future initiatives.",
];

export default function ImpactContinuousLearning() {
  return (
    <section className="bg-slate-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
              Continuous Improvement
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
              Impact also helps us improve.
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-600">
              Learning from project experience allows MercyCare to refine
              activities, strengthen collaboration, understand changing needs,
              and make future initiatives more useful and responsive.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
            <h3 className="text-xl font-bold text-[#0B1B3A]">
              What continuous learning can involve
            </h3>

            <ul className="mt-6 space-y-4">
              {actions.map((action) => (
                <li
                  key={action}
                  className="flex gap-3 text-sm leading-7 text-slate-600"
                >
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#D4AF37]" />
                  <span>{action}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
