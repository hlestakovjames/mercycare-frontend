const principles = [
  {
    number: "01",
    title: "Shared Purpose",
    description:
      "The partnership should have a clear connection to the purpose and intended outcomes of the project.",
  },
  {
    number: "02",
    title: "Mutual Value",
    description:
      "Each collaboration should recognise the contribution, expertise, and legitimate interests of the people involved.",
  },
  {
    number: "03",
    title: "Respect & Dignity",
    description:
      "Partnership activities should uphold respect for individuals, families, communities, and organizations.",
  },
  {
    number: "04",
    title: "Responsible Practice",
    description:
      "Partners should work within appropriate professional, ethical, safeguarding, privacy, and legal expectations.",
  },
  {
    number: "05",
    title: "Clear Roles",
    description:
      "Where appropriate, responsibilities, expectations, communication, and contributions should be understood clearly.",
  },
  {
    number: "06",
    title: "Learning",
    description:
      "Partners can learn from experience together and use those lessons to strengthen future collaboration.",
  },
];

export default function PartnershipPrinciples() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
            Partnership Principles
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
            Building collaborations responsibly.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {principles.map((principle) => (
            <article
              key={principle.number}
              className="rounded-2xl border border-slate-200 p-7"
            >
              <span className="text-sm font-bold tracking-[0.15em] text-[#D4AF37]">
                {principle.number}
              </span>

              <h3 className="mt-4 text-xl font-bold text-[#0B1B3A]">
                {principle.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                {principle.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
