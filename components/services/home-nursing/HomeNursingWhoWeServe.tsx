const people = [
  "Individuals who require nursing support at home",
  "People adjusting to care after treatment or hospitalization",
  "Individuals with ongoing or longer-term care needs",
  "Older adults who require additional nursing support",
  "Families coordinating care for a loved one",
];

export default function HomeNursingWhoWeServe() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#0F766E]">
              Who We Support
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
              Home nursing can support different care journeys.
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
              The service may be relevant in different circumstances. What
              matters is understanding the individual's needs and identifying
              an appropriate and safe approach to care.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-7 sm:p-9">
            <ul className="space-y-5">
              {people.map((person) => (
                <li key={person} className="flex gap-4">
                  <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[#0F766E]" />
                  <span className="text-sm leading-7 text-slate-700">
                    {person}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
