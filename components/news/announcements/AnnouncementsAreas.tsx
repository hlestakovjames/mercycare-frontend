const areas = [
  {
    title: "Service notices",
    description:
      "Important information relating to service availability, changes, or other public-facing service matters.",
  },
  {
    title: "Event notices",
    description:
      "Formal notices connected to MercyCare events, including confirmed changes or important attendee information.",
  },
  {
    title: "Program notices",
    description:
      "Important public information concerning MercyCare programs and initiatives.",
  },
  {
    title: "Community notices",
    description:
      "Notices relevant to community engagement, participation, outreach, or public activities.",
  },
  {
    title: "Organizational notices",
    description:
      "Confirmed organizational information that MercyCare needs to communicate publicly.",
  },
  {
    title: "Important updates",
    description:
      "Other significant notices that require a clear and easily accessible public reference.",
  },
];

export default function AnnouncementsAreas() {
  return (
    <section className="bg-slate-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
            Notice categories
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
            Information organized for clarity.
          </h2>

          <p className="mt-5 leading-7 text-slate-600">
            Announcements will be categorized so visitors can quickly
            distinguish formal notices from general news and stories.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {areas.map((area) => (
            <article
              key={area.title}
              className="rounded-[2rem] border border-slate-100 bg-white p-7 shadow-sm sm:p-8"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#D4AF37] text-xl font-bold text-[#0B1B3A]">
                !
              </div>

              <h3 className="mt-6 text-xl font-bold text-[#0B1B3A]">
                {area.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                {area.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
