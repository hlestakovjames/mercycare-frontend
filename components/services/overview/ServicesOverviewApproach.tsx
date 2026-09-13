import Link from "next/link";

const approachItems = [
  {
    title: "How We Work",
    href: "/services/how-we-work",
    description:
      "Listen, understand, plan, coordinate, support and review.",
  },
  {
    title: "Our Care Approach",
    href: "/services/care-approach",
    description:
      "Dignity, compassion, independence, continuity and family partnership.",
  },
  {
    title: "Who We Serve",
    href: "/services/who-we-serve",
    description:
      "People and families with different circumstances and support needs.",
  },
];

export default function ServicesOverviewApproach() {
  return (
    <section className="bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0F766E]">
            How We Support
          </p>

          <h2 className="mt-3 text-3xl font-bold text-[#0B1B3A] sm:text-4xl">
            The service matters. So does the way it is delivered.
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Our wider approach helps connect individual services to a
            consistent philosophy of respectful, person-centered support.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {approachItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <h3 className="text-xl font-bold text-[#0B1B3A]">
                {item.title}
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                {item.description}
              </p>

              <span className="mt-5 inline-block text-sm font-semibold text-[#0F766E]">
                Explore →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
