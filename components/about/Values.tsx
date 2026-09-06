const values = [
  {
    number: "01",
    title: "Compassion",
    description:
      "We treat people with empathy, dignity, respect, and genuine care.",
  },
  {
    number: "02",
    title: "Community",
    description:
      "We listen to communities and place people at the center of our work.",
  },
  {
    number: "03",
    title: "Integrity",
    description:
      "We strive to act responsibly, transparently, and accountably.",
  },
  {
    number: "04",
    title: "Collaboration",
    description:
      "We believe meaningful partnerships create stronger and more sustainable results.",
  },
  {
    number: "05",
    title: "Sustainability",
    description:
      "We seek solutions that can create lasting value beyond individual interventions.",
  },
  {
    number: "06",
    title: "Impact",
    description:
      "We focus our efforts on practical actions that improve people's lives.",
  },
];

export default function Values() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
            Our Values
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
            The principles behind our work.
          </h2>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((value) => (
            <article
              key={value.number}
              className="rounded-3xl border border-slate-100 p-7 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <span className="text-sm font-bold text-[#D4AF37]">
                {value.number}
              </span>

              <h3 className="mt-5 text-xl font-bold text-[#0B1B3A]">
                {value.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                {value.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}