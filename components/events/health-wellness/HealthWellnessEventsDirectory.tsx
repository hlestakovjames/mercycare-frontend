const eventTypes = [
  {
    title: "Wellness Gatherings",
    description:
      "Community gatherings centered on conversations about wellbeing, healthy living and supportive community connections.",
  },
  {
    title: "Senior Wellness Events",
    description:
      "Events creating space for older adults, families and caregivers to connect around dignity, wellbeing and supportive care.",
  },
  {
    title: "Family Wellness Forums",
    description:
      "Family-oriented conversations that encourage shared learning and practical approaches to supporting wellbeing at home.",
  },
  {
    title: "Community Health Conversations",
    description:
      "Accessible community forums where participants can engage in health-related conversations and learn where to seek appropriate professional support.",
  },
];

export default function HealthWellnessEventsDirectory() {
  return (
    <section className="bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#0F766E]">
            Event Formats
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
            Different ways to connect around wellbeing
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Future MercyCare health and wellness events can take different
            formats depending on the purpose, audience and community context.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {eventTypes.map((event) => (
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
