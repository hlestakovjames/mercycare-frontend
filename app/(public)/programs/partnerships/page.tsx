import Link from "next/link";

const partnershipAreas = [
  {
    number: "01",
    title: "Community Partners",
    description:
      "We work with community groups, local leaders, families, and grassroots organisations to understand needs and strengthen community-centred initiatives.",
  },
  {
    number: "02",
    title: "Healthcare Partners",
    description:
      "Collaboration with healthcare professionals and organisations can strengthen access to expertise, referrals, coordinated care, and health-related initiatives.",
  },
  {
    number: "03",
    title: "Institutional Partners",
    description:
      "We welcome collaboration with institutions and organisations that share our commitment to improving health, wellbeing, dignity, and access to care.",
  },
  {
    number: "04",
    title: "Become a Partner",
    description:
      "Organisations, professionals, institutions, and supporters interested in working with MercyCare can explore opportunities for meaningful collaboration.",
  },
];

export default function ProgramsPartnershipsPage() {
  return (
    <>
      <section className="bg-[#0B1B3A] py-20 text-white lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
              Partnerships
            </p>

            <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Working together to extend the reach of care.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              MercyCare believes that stronger collaboration creates stronger
              opportunities to respond to health, wellness, and community
              needs.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
              Partnership Opportunities
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
              Collaboration across communities, healthcare, and institutions.
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Our partnerships can support program development, community
              engagement, healthcare coordination, professional collaboration,
              resources, knowledge sharing, and sustainable impact.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {partnershipAreas.map((area) => (
              <article
                key={area.number}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-7 transition duration-300 hover:-translate-y-1 hover:shadow-md sm:p-8"
              >
                <span className="text-sm font-bold tracking-[0.15em] text-[#D4AF37]">
                  {area.number}
                </span>

                <h3 className="mt-4 text-xl font-bold text-[#0B1B3A]">
                  {area.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {area.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
            Partner With MercyCare
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
            Let's explore what we can achieve together.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-600">
            Whether you represent a community organisation, healthcare
            institution, professional body, company, or another organisation,
            we welcome conversations around meaningful collaboration.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-full bg-[#0B1B3A] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#162d5c]"
            >
              Contact MercyCare
            </Link>

            <Link
              href="/volunteer"
              className="rounded-full border-2 border-[#0B1B3A] px-7 py-3.5 text-sm font-semibold text-[#0B1B3A] transition hover:bg-[#0B1B3A] hover:text-white"
            >
              Get Involved
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}