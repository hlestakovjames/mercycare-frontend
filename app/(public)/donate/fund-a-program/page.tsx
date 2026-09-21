import Link from "next/link";

const programs = [
  {
    title: "Tuko Pamoja",
    description:
      "Support initiatives focused on senior wellness, connection, dignity, and community support.",
    href: "/projects/tuko-pamoja",
  },
  {
    title: "Mama na Mtoto",
    description:
      "Support initiatives that contribute to maternal, child, family, and community wellbeing.",
    href: "/projects/mama-na-mtoto",
  },
];

export default function FundAProgramPage() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700">
            Support MercyCare
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Fund a Program
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Support specific areas of MercyCare&apos;s work and help strengthen
            programs that respond to community needs.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {programs.map((program) => (
            <Link
              key={program.href}
              href={program.href}
              className="group rounded-3xl border border-slate-200 p-8 shadow-sm transition hover:-translate-y-1 hover:border-cyan-200 hover:shadow-md"
            >
              <h2 className="text-2xl font-semibold text-slate-900 group-hover:text-cyan-700">
                {program.title}
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                {program.description}
              </p>

              <span className="mt-6 inline-flex text-sm font-semibold text-cyan-700">
                Explore program →
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-12 rounded-3xl bg-slate-50 p-8">
          <h2 className="text-2xl font-semibold text-slate-900">
            Looking for another area to support?
          </h2>

          <p className="mt-3 max-w-2xl leading-7 text-slate-600">
            Contact MercyCare to discuss support for another program, project,
            activity, or community initiative.
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
