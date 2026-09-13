import Link from "next/link";

const journey = [
  {
    number: "01",
    title: "Learn",
    description:
      "Explore our services, service areas and care approach.",
    href: "/services/our-services",
  },
  {
    number: "02",
    title: "Understand",
    description:
      "Consider what type of support may fit your circumstances.",
    href: "/services/who-we-serve",
  },
  {
    number: "03",
    title: "Talk",
    description:
      "Start a conversation with MercyCare about your situation.",
    href: "/services/get-started",
  },
  {
    number: "04",
    title: "Plan",
    description:
      "Where there is a suitable fit, agree the appropriate next steps.",
    href: "/services/get-started",
  },
];

export default function ServicesOverviewJourney() {
  return (
    <section className="bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0F766E]">
            Your Care Journey
          </p>

          <h2 className="mt-3 text-3xl font-bold text-[#0B1B3A] sm:text-4xl">
            Start where you are.
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            You do not need to have every answer before beginning. A
            conversation can help bring clarity to the next appropriate step.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {journey.map((step) => (
            <Link
              key={step.number}
              href={step.href}
              className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <span className="text-sm font-bold text-[#D4AF37]">
                {step.number}
              </span>

              <h3 className="mt-3 text-xl font-bold text-[#0B1B3A]">
                {step.title}
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                {step.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
