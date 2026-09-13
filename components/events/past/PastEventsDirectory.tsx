const pastEvents = [
  {
    category: "Community",
    date: "Past Event",
    title: "Community Wellness Gathering",
    description:
      "A community-focused gathering creating space for conversations around wellbeing, compassionate support and stronger community connections.",
    location: "Community venue",
  },
  {
    category: "Senior Wellness",
    date: "Past Event",
    title: "Tuko Pamoja Senior Wellness Gathering",
    description:
      "A gathering centered on older adults, families and caregivers, with a focus on dignity, connection and supportive conversations.",
    location: "Community venue",
  },
  {
    category: "Health Awareness",
    date: "Past Event",
    title: "Community Health Awareness Forum",
    description:
      "A community engagement opportunity focused on health awareness, shared learning and encouraging people to seek appropriate support when needed.",
    location: "Community venue",
  },
];

export default function PastEventsDirectory() {
  return (
    <section className="bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#0F766E]">
            Event Archive
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
            Past community moments
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Browse completed events and discover the kinds of community
            experiences MercyCare seeks to create.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {pastEvents.map((event) => (
            <article
              key={event.title}
              className="flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="rounded-full bg-[#0F766E]/10 px-3 py-1 text-xs font-semibold text-[#0F766E]">
                  {event.category}
                </span>

                <span className="text-sm font-medium text-slate-500">
                  {event.date}
                </span>
              </div>

              <h3 className="mt-6 text-2xl font-bold text-[#0B1B3A]">
                {event.title}
              </h3>

              <p className="mt-4 flex-1 leading-7 text-slate-600">
                {event.description}
              </p>

              <div className="mt-6 border-t border-slate-100 pt-5">
                <p className="text-sm font-medium text-slate-500">
                  Location
                </p>
                <p className="mt-1 text-sm text-slate-700">{event.location}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-[#D4AF37]/30 bg-[#D4AF37]/5 p-6">
          <p className="text-sm leading-7 text-slate-700">
            <span className="font-semibold text-[#0B1B3A]">Archive note:</span>{" "}
            The event records shown here are structured as frontend archive
            placeholders. Verified event dates, venues, reports, photographs
            and other historical records can be connected when the Events
            management system is introduced.
          </p>
        </div>
      </div>
    </section>
  );
}
