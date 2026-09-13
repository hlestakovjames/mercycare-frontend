const partners = [
  {
    title: "Community Organizations",
    description:
      "Local organizations and community groups can contribute knowledge, relationships, networks, and insight into community needs.",
  },
  {
    title: "Healthcare Professionals",
    description:
      "Qualified professionals can contribute appropriate expertise, guidance, care, education, and technical support.",
  },
  {
    title: "Institutions",
    description:
      "Schools, universities, public institutions, faith-based organizations, and other institutions may provide relevant collaboration opportunities.",
  },
  {
    title: "Nonprofit & Social Organizations",
    description:
      "Organizations working in health, wellbeing, social support, development, and related areas can explore complementary initiatives.",
  },
  {
    title: "Businesses & Sponsors",
    description:
      "Businesses and sponsors can contribute resources, expertise, funding, services, or other forms of responsible support.",
  },
  {
    title: "Volunteers & Community Members",
    description:
      "Individuals can contribute time, skills, lived experience, community knowledge, and practical assistance where appropriate.",
  },
];

export default function PartnershipTypes() {
  return (
    <section className="bg-slate-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
            Potential Partners
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
            Different partners can contribute in different ways.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {partners.map((partner) => (
            <article
              key={partner.title}
              className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm"
            >
              <h3 className="text-xl font-bold text-[#0B1B3A]">
                {partner.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                {partner.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
