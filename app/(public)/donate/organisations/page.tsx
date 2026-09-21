import Link from "next/link";

const opportunities = [
  {
    title: "Corporate Giving",
    description:
      "Businesses can explore ways to contribute resources toward MercyCare programs, projects, and community initiatives.",
  },
  {
    title: "Institutional Support",
    description:
      "Institutions and organisations can explore structured support aligned with their community and social impact priorities.",
  },
  {
    title: "Sponsored Initiatives",
    description:
      "Organisations may explore opportunities to support specific approved activities, campaigns, or program areas.",
  },
];

export default function OrganisationsGivingPage() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700">
            Support MercyCare
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Corporate & Organisation Giving
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Organisations can support MercyCare through appropriate giving,
            sponsorship, collaboration, and community-focused initiatives.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {opportunities.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-slate-200 p-7 shadow-sm"
            >
              <h2 className="text-xl font-semibold text-slate-900">
                {item.title}
              </h2>

              <p className="mt-3 leading-7 text-slate-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-3xl bg-slate-50 p-8">
          <h2 className="text-2xl font-semibold text-slate-900">
            Discuss organisational support
          </h2>

          <p className="mt-3 max-w-2xl leading-7 text-slate-600">
            Get in touch with MercyCare to discuss a potential giving or
            sponsorship opportunity.
          </p>

          <Link
            href="/contact"
            className="mt-6 inline-flex rounded-full bg-cyan-700 px-6 py-3 text-sm font-semibold text-white hover:bg-cyan-800"
          >
            Contact MercyCare
          </Link>
        </div>
      </div>
    </section>
  );
}
