const impactStats = [
  {
    value: "01",
    label: "Community Programs",
    description: "Initiatives designed around real community needs.",
  },
  {
    value: "02",
    label: "Core Focus Areas",
    description: "Supporting seniors, mothers, and children.",
  },
  {
    value: "∞",
    label: "Possibilities",
    description: "Building partnerships for sustainable impact.",
  },
  {
    value: "1",
    label: "Shared Mission",
    description: "Creating healthier, stronger communities together.",
  },
];

export default function Impact() {
  return (
    <section className="bg-[#0B1B3A] py-20 text-white lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
            Our Impact
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Every act of care can create a lasting difference.
          </h2>

          <p className="mt-5 leading-7 text-slate-300">
            MercyCare brings people, resources, and community initiatives
            together to turn compassion into meaningful action.
          </p>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {impactStats.map((stat) => (
            <div
              key={stat.label}
              className="bg-[#0B1B3A] p-7 sm:p-8"
            >
              <p className="text-3xl font-bold text-[#D4AF37]">
                {stat.value}
              </p>

              <h3 className="mt-4 font-semibold text-white">
                {stat.label}
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-400">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}