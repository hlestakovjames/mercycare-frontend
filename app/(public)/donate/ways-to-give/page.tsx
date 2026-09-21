import Link from "next/link";

const givingOptions = [
  {
    title: "Financial Support",
    description:
      "Support MercyCare's approved programs, projects, community activities, and service development.",
  },
  {
    title: "Organisational Partnerships",
    description:
      "Organisations can explore structured opportunities to support or collaborate with MercyCare.",
  },
  {
    title: "In-Kind Support",
    description:
      "Where appropriate, approved goods, equipment, materials, or other practical contributions may support MercyCare's work.",
  },
  {
    title: "Community Support",
    description:
      "Individuals and community groups can contribute through appropriate local initiatives and activities.",
  },
];

export default function WaysToGivePage() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700">
            Support MercyCare
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Ways to Give
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            There are different ways to support MercyCare and contribute to
            work that promotes compassion, dignity, wellbeing, and community
            support.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {givingOptions.map((option) => (
            <div
              key={option.title}
              className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"
            >
              <h2 className="text-xl font-semibold text-slate-900">
                {option.title}
              </h2>

              <p className="mt-3 leading-7 text-slate-600">
                {option.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-3xl bg-slate-50 p-8 ring-1 ring-slate-100">
          <h2 className="text-2xl font-semibold text-slate-900">
            Interested in supporting MercyCare?
          </h2>

          <p className="mt-3 max-w-2xl leading-7 text-slate-600">
            Contact the MercyCare team to discuss an appropriate way to
            contribute or partner with us.
          </p>

          <Link
            href="/contact"
            className="mt-6 inline-flex rounded-full bg-cyan-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-cyan-800"
          >
            Contact MercyCare
          </Link>
        </div>
      </div>
    </section>
  );
}
