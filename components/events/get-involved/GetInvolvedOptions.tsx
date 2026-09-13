const involvementOptions = [
  {
    number: "01",
    title: "Attend",
    description:
      "Join an upcoming event, participate respectfully and connect with other community members.",
  },
  {
    number: "02",
    title: "Support",
    description:
      "Support an event through appropriate resources, practical assistance or other forms of contribution.",
  },
  {
    number: "03",
    title: "Partner",
    description:
      "Organizations and community groups can explore opportunities to collaborate around suitable events.",
  },
  {
    number: "04",
    title: "Share",
    description:
      "Help increase awareness by sharing verified event information with people and communities who may benefit from attending.",
  },
];

export default function GetInvolvedOptions() {
  return (
    <section className="bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#0F766E]">
            Ways to Participate
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
            Choose how you would like to contribute
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Different events may offer different participation opportunities.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {involvementOptions.map((option) => (
            <article
              key={option.number}
              className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"
            >
              <span className="text-sm font-bold tracking-[0.15em] text-[#D4AF37]">
                {option.number}
              </span>

              <h3 className="mt-4 text-2xl font-bold text-[#0B1B3A]">
                {option.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                {option.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
