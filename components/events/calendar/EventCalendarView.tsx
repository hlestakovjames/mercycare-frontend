const calendarItems = [
  {
    month: "Coming",
    day: "Soon",
    category: "Health & Wellness",
    title: "Community Health & Wellness Gathering",
    description:
      "A community-focused gathering creating space for conversations around health, wellbeing and compassionate support.",
    status: "Registration planned",
  },
  {
    month: "Coming",
    day: "Soon",
    category: "Community",
    title: "Senior Wellness Community Event",
    description:
      "A community gathering centered on older adults, families, caregivers and conversations that support dignity and wellbeing.",
    status: "Registration planned",
  },
  {
    month: "Coming",
    day: "Soon",
    category: "Awareness",
    title: "Health Awareness Community Forum",
    description:
      "An opportunity for community members to connect, learn and participate in meaningful health and awareness conversations.",
    status: "Event details to be announced",
  },
];

export default function EventCalendarView() {
  return (
    <section className="bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#0F766E]">
              Events Schedule
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
              Upcoming opportunities
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Events will appear here as their dates and details are confirmed.
            </p>
          </div>

          <span className="w-fit rounded-full bg-[#D4AF37]/10 px-4 py-2 text-sm font-semibold text-[#0B1B3A]">
            Calendar preview
          </span>
        </div>

        <div className="mt-12 space-y-5">
          {calendarItems.map((event) => (
            <article
              key={event.title}
              className="grid gap-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:grid-cols-[120px_1fr] sm:p-7"
            >
              <div className="flex h-fit flex-row gap-3 rounded-2xl bg-[#0B1B3A] p-4 text-white sm:flex-col sm:items-center sm:justify-center sm:gap-1">
                <span className="text-sm font-semibold uppercase tracking-wide text-[#D4AF37]">
                  {event.month}
                </span>
                <span className="text-lg font-bold">{event.day}</span>
              </div>

              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-[#0F766E]/10 px-3 py-1 text-xs font-semibold text-[#0F766E]">
                    {event.category}
                  </span>

                  <span className="text-sm text-slate-500">
                    {event.status}
                  </span>
                </div>

                <h3 className="mt-4 text-2xl font-bold text-[#0B1B3A]">
                  {event.title}
                </h3>

                <p className="mt-3 max-w-3xl leading-7 text-slate-600">
                  {event.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-[#D4AF37]/30 bg-[#D4AF37]/5 p-6">
          <p className="text-sm leading-7 text-slate-700">
            <span className="font-semibold text-[#0B1B3A]">
              Calendar note:
            </span>{" "}
            The entries currently shown are frontend placeholders. Confirmed
            dates, times, venues and registration deadlines will be supplied
            through the Events management system.
          </p>
        </div>
      </div>
    </section>
  );
}
