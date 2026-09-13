const categories = [
  "Community Events",
  "Health & Wellness Events",
  "Awareness Events",
  "Senior Wellness",
];

export default function EventCalendarCategories() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#0F766E]">
            Browse by Type
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
            Events for different community needs
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            As the event system develops, calendar entries can be organized by
            category to make it easier to find relevant opportunities.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <div
              key={category}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
            >
              <div className="h-1.5 w-12 rounded-full bg-[#D4AF37]" />

              <h3 className="mt-5 text-lg font-bold text-[#0B1B3A]">
                {category}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
