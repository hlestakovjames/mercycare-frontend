export default function PastActivitiesHighlights() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-24 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#0F766E]">
              What we can capture
            </p>

            <h2 className="mt-4 text-3xl font-bold text-[#0B1B3A] sm:text-4xl">
              More than a list of dates.
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              A useful activity archive can preserve the context around each
              activity and make community participation easier to understand.
            </p>
          </div>

          <div className="lg:col-span-2">
            <div className="grid gap-5 sm:grid-cols-2">
              {[
                "Activity purpose and focus",
                "Date and location",
                "Community or participant group",
                "Key activity moments",
                "Volunteer and partner participation",
                "Photos, stories or other approved media",
                "Community feedback and reflections",
                "Relevant follow-up information",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
                >
                  <div className="flex gap-4">
                    <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-[#D4AF37]" />
                    <p className="font-medium leading-7 text-slate-700">
                      {item}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
