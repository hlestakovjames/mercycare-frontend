const awarenessEventTypes = [
  {
    title: "Community Awareness Forums",
    description:
      "Open community gatherings that encourage discussion, questions and shared understanding around wellbeing and community support.",
  },
  {
    title: "Family Awareness Sessions",
    description:
      "Sessions designed to create space for families and caregivers to learn, discuss concerns and identify appropriate sources of support.",
  },
  {
    title: "Care & Wellbeing Conversations",
    description:
      "Community conversations exploring the importance of compassionate support, dignity and wellbeing.",
  },
  {
    title: "Awareness Campaign Events",
    description:
      "Public-facing events that help bring attention to selected wellbeing and community-support themes.",
  },
];

export default function AwarenessEventsDirectory() {
  return (
    <section className="bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#0F766E]">
            Event Formats
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
            Different ways to build awareness
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Awareness events can be adapted to different audiences, settings
            and community priorities.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {awarenessEventTypes.map((event) => (
            <article
              key={event.title}
              className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0F766E] text-xl font-bold text-white">
                +
              </div>

              <h3 className="mt-6 text-2xl font-bold text-[#0B1B3A]">
                {event.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                {event.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
