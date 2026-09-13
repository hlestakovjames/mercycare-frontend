const ways = [
  {
    number: "01",
    title: "Volunteer",
    description:
      "Contribute your time, skills, experience, or community knowledge to appropriate MercyCare activities and initiatives.",
  },
  {
    number: "02",
    title: "Partner",
    description:
      "Organizations, institutions, professionals, and businesses can explore opportunities for responsible collaboration.",
  },
  {
    number: "03",
    title: "Support a Project",
    description:
      "Individuals and organizations can contribute resources or other appropriate forms of support to project initiatives.",
  },
  {
    number: "04",
    title: "Share Your Expertise",
    description:
      "Relevant professional, technical, creative, educational, or community expertise can strengthen project activities.",
  },
  {
    number: "05",
    title: "Join Community Activities",
    description:
      "Participate in relevant outreach, awareness, wellbeing, education, and community engagement activities.",
  },
  {
    number: "06",
    title: "Start a Conversation",
    description:
      "Have an idea, resource, network, or opportunity that could support community wellbeing? Talk to MercyCare.",
  },
];

export default function GetInvolvedWays() {
  return (
    <section className="bg-slate-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
            Ways to Get Involved
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
            Find a way to contribute that fits you.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {ways.map((way) => (
            <article
              key={way.number}
              className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm"
            >
              <span className="text-sm font-bold tracking-[0.15em] text-[#D4AF37]">
                {way.number}
              </span>

              <h3 className="mt-4 text-xl font-bold text-[#0B1B3A]">
                {way.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                {way.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
