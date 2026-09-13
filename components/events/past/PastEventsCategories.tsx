const categories = [
  {
    title: "Community Events",
    description:
      "Gatherings that bring community members, families and caregivers together.",
  },
  {
    title: "Health & Wellness",
    description:
      "Events creating opportunities for conversations around wellbeing and supportive care.",
  },
  {
    title: "Awareness Events",
    description:
      "Community engagement activities focused on awareness, education and connection to support.",
  },
  {
    title: "Senior Wellness",
    description:
      "Events that create space for older adults, families and caregivers.",
  },
];

export default function PastEventsCategories() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#0F766E]">
            Event Categories
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
            Different events, one community purpose
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            MercyCare events may take different forms while supporting the
            broader goal of creating meaningful community connections.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <div
              key={category.title}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0B1B3A] text-lg font-bold text-white">
                +
              </div>

              <h3 className="mt-5 text-xl font-bold text-[#0B1B3A]">
                {category.title}
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                {category.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
