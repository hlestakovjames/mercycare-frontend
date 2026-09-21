const areas = [
  {
    title: "Community initiatives",
    description:
      "Updates about initiatives designed around community participation, connection, wellbeing, and practical support.",
  },
  {
    title: "Community partnerships",
    description:
      "Stories about organizations, groups, volunteers, and other partners contributing to community-centered work.",
  },
  {
    title: "Community engagement",
    description:
      "News about opportunities for people to connect, participate, learn, and contribute.",
  },
  {
    title: "Community stories",
    description:
      "Thoughtful stories and reflections that help bring the human side of MercyCare's work into view.",
  },
  {
    title: "Local conversations",
    description:
      "Updates and perspectives connected to conversations around care, dignity, family wellbeing, and community support.",
  },
  {
    title: "Growing together",
    description:
      "Milestones and developments that show how MercyCare's community relationships continue to evolve.",
  },
];

export default function CommunityNewsAreas() {
  return (
    <section className="bg-slate-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
            What you will find
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
            Community-focused coverage.
          </h2>

          <p className="mt-5 leading-7 text-slate-600">
            This section will grow as MercyCare's confirmed community work and
            partnerships develop.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {areas.map((area) => (
            <article
              key={area.title}
              className="rounded-[2rem] border border-slate-100 bg-white p-7 shadow-sm sm:p-8"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#0B1B3A] text-lg font-bold text-[#D4AF37]">
                +
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
