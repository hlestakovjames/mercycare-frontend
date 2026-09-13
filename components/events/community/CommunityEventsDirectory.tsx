const communityEvents = [
  {
    title: "Community Wellness Gatherings",
    description:
      "Community-focused gatherings that create space for conversations about wellbeing, compassionate support and stronger community connections.",
  },
  {
    title: "Family & Caregiver Gatherings",
    description:
      "Opportunities for families and caregivers to connect, share experiences and explore practical approaches to supporting loved ones.",
  },
  {
    title: "Community Engagement Forums",
    description:
      "Interactive community forums that encourage dialogue, participation and awareness around issues affecting wellbeing and quality of life.",
  },
  {
    title: "Senior Community Gatherings",
    description:
      "Community spaces centered on older adults, families and caregivers, with an emphasis on dignity, connection and inclusion.",
  },
];

export default function CommunityEventsDirectory() {
  return (
    <section className="bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#0F766E]">
            What You May Find
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
            Community-focused experiences
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Community events may take different forms depending on the needs
            and interests of the communities involved.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {communityEvents.map((event) => (
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
