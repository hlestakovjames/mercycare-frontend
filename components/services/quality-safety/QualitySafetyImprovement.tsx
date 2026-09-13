const improvementAreas = [
  "Listening to people and families",
  "Learning from concerns and feedback",
  "Reviewing how support is coordinated",
  "Improving communication and clarity",
  "Strengthening consistency in everyday support",
  "Adapting to changing community and family needs",
];

export default function QualitySafetyImprovement() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0F766E]">
              Continuous Improvement
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[#0B1B3A] sm:text-4xl">
              Good care should keep learning and improving.
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Quality is an ongoing responsibility. Feedback, changing needs
              and everyday experience can all help identify opportunities to
              improve the way support is delivered.
            </p>
          </div>

          <div className="rounded-3xl bg-slate-50 p-8 sm:p-10">
            <ul className="space-y-4">
              {improvementAreas.map((item) => (
                <li key={item} className="flex items-start gap-4">
                  <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[#D4AF37]" />

                  <span className="leading-7 text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
