const expectations = [
  "Respect community members, families, caregivers and fellow volunteers.",
  "Follow the instructions and activity guidelines provided by the coordinating team.",
  "Protect personal information and respect appropriate boundaries.",
  "Only undertake responsibilities that are appropriate to the volunteer role.",
  "Raise questions or concerns with the coordinating team when something is unclear.",
  "Participate responsibly and communicate when availability changes.",
];

export default function VolunteerActivityExpectations() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-24 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#0F766E]">
              Responsible participation
            </p>

            <h2 className="mt-4 text-3xl font-bold text-[#0B1B3A] sm:text-4xl">
              Volunteering comes with responsibility.
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Good volunteer experiences depend on respect, reliability,
              communication and clear boundaries.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 sm:p-10">
            <ul className="space-y-5">
              {expectations.map((expectation) => (
                <li
                  key={expectation}
                  className="flex gap-4 text-base leading-7 text-slate-700"
                >
                  <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[#D4AF37]" />
                  <span>{expectation}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
