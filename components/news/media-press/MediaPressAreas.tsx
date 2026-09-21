const areas = [
  {
    title: "Press releases",
    description:
      "Formal public communications issued by MercyCare about significant developments and announcements.",
  },
  {
    title: "Media statements",
    description:
      "Confirmed statements prepared for public communication on relevant MercyCare matters.",
  },
  {
    title: "Media coverage",
    description:
      "A reference point for verified media mentions and coverage involving MercyCare.",
  },
  {
    title: "Media resources",
    description:
      "Useful public information and materials that help media and partners understand MercyCare.",
  },
  {
    title: "Organization information",
    description:
      "Background information that can support accurate reporting and public understanding.",
  },
  {
    title: "Media contact",
    description:
      "A clear pathway for journalists and media professionals seeking information or clarification.",
  },
];

export default function MediaPressAreas() {
  return (
    <section className="bg-slate-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
            Media centre
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
            Information for responsible communication.
          </h2>

          <p className="mt-5 leading-7 text-slate-600">
            Media information will be organized around confirmed material,
            making it easier to distinguish official communications from
            general news and community stories.
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
