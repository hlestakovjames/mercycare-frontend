export default function ProjectAreasOverview() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
              Our Focus
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
              Projects shaped around real community needs.
            </h2>
          </div>

          <div className="space-y-6 text-base leading-8 text-slate-600">
            <p>
              MercyCare projects provide a practical way of responding to
              specific needs identified within families, communities, and
              groups we seek to support.
            </p>

            <p>
              The focus of each project may differ depending on the people
              involved, the nature of the need, available expertise,
              partnerships, resources, and the intended outcomes.
            </p>

            <p>
              Our project areas therefore provide a framework for developing
              initiatives while allowing individual projects to remain
              responsive to their specific context.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
