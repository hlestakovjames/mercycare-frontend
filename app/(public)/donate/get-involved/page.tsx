import Link from "next/link";

const options = [
  {
    title: "Volunteer",
    description:
      "Give your time, skills, and energy to appropriate MercyCare activities and initiatives.",
    href: "/volunteer",
  },
  {
    title: "Partner With Us",
    description:
      "Explore opportunities for organisations and community partners to work with MercyCare.",
    href: "/about/partnerships",
  },
  {
    title: "Support a Campaign",
    description:
      "Take part in MercyCare fundraising and awareness initiatives as they become available.",
    href: "/donate/campaigns",
  },
];

export default function DonateGetInvolvedPage() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700">
            Support MercyCare
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Get Involved
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Supporting MercyCare is not limited to financial giving. You can
            also contribute your time, skills, networks, ideas, or
            organisational support.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {options.map((option) => (
            <Link
              key={option.href}
              href={option.href}
              className="group rounded-3xl border border-slate-200 p-7 shadow-sm transition hover:-translate-y-1 hover:border-cyan-200 hover:shadow-md"
            >
              <h2 className="text-xl font-semibold text-slate-900 group-hover:text-cyan-700">
                {option.title}
              </h2>

              <p className="mt-3 leading-7 text-slate-600">
                {option.description}
              </p>

              <span className="mt-6 inline-flex text-sm font-semibold text-cyan-700">
                Explore →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
