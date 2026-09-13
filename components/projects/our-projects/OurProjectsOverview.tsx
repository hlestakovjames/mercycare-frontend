export default function OurProjectsOverview() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
              Project Directory
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
              From broader programs to focused community action.
            </h2>
          </div>

          <div className="space-y-6 text-base leading-8 text-slate-600">
            <p>
              MercyCare projects are focused initiatives developed to respond
              to particular community needs, opportunities, or areas of
              support.
            </p>

            <p>
              They operate within the wider MercyCare framework while allowing
              each initiative to have its own purpose, activities, participants,
              partnerships, and intended outcomes.
            </p>

            <p>
              Explore the projects below to understand their individual focus
              and how they contribute to MercyCare's wider community work.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
