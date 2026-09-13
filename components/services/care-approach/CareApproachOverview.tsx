export default function CareApproachOverview() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#0F766E]">
            Our Philosophy
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
            Care is more than completing a task.
          </h2>
        </div>

        <div className="space-y-5 text-base leading-8 text-slate-600">
          <p>
            Home care affects a person's everyday life, environment, routines,
            relationships, and sense of independence.
          </p>

          <p>
            Our approach therefore looks beyond the immediate task and
            considers the person as a whole, while remaining within the
            appropriate scope of home-based support.
          </p>

          <p>
            We aim to create care experiences that feel respectful,
            dependable, compassionate, and responsive to individual
            circumstances.
          </p>
        </div>
      </div>
    </section>
  );
}
