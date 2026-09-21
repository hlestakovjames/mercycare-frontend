const areas = [
  {
    title: "Organizational developments",
    description:
      "Updates about important developments in MercyCare's operations, direction, and public work.",
  },
  {
    title: "Program development",
    description:
      "News about the development and evolution of MercyCare programs and initiatives.",
  },
  {
    title: "Partnerships",
    description:
      "Confirmed partnership developments and collaborative opportunities involving MercyCare.",
  },
  {
    title: "Community work",
    description:
      "Updates connected to outreach, engagement, activities, and community-centered initiatives.",
  },
  {
    title: "Service developments",
    description:
      "Public updates about the development and availability of MercyCare services.",
  },
  {
    title: "Milestones",
    description:
      "Meaningful organizational milestones and confirmed developments as MercyCare grows.",
  },
];

export default function MercyCareUpdatesAreas() {
  return (
    <section className="bg-slate-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
            Coverage
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
            What counts as a MercyCare update?
          </h2>

          <p className="mt-5 leading-7 text-slate-600">
            Updates will focus on confirmed developments rather than
            speculation or unverified information.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {areas.map((area) => (
            <article
              key={area.title}
              className="rounded-[2rem] border border-slate-100 bg-white p-7 shadow-sm sm:p-8"
            >
              <div className="h-1.5 w-12 rounded-full bg-[#D4AF37]" />

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
