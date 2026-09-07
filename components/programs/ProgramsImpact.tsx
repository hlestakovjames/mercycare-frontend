import Link from "next/link";

const impactAreas = [
  {
    number: "01",
    title: "Improved wellbeing",
    description:
      "Contribute to better physical, emotional, mental, and social wellbeing through appropriate community programs and support.",
  },
  {
    number: "02",
    title: "Stronger families",
    description:
      "Help families build stronger support systems around children, older adults, and people with different health and wellbeing needs.",
  },
  {
    number: "03",
    title: "Healthier communities",
    description:
      "Promote awareness, prevention, healthy practices, and community participation in improving health and wellbeing.",
  },
  {
    number: "04",
    title: "Greater access to support",
    description:
      "Connect individuals and families with relevant information, professional services, community resources, and appropriate support.",
  },
];

export default function ProgramsImpact() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
              Impact & Outcomes
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
              Creating meaningful change beyond individual care.
            </h2>

            <p className="mt-5 leading-7 text-slate-600">
              MercyCare programs are designed to complement professional
              healthcare by addressing wider health, wellbeing, family, and
              community needs.
            </p>

            <Link
              href="/programs/impact"
              className="mt-7 inline-flex items-center text-sm font-semibold text-[#0B1B3A] transition hover:text-[#D4AF37]"
            >
              Explore our impact approach
              <span className="ml-2">→</span>
            </Link>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {impactAreas.map((area) => (
              <article
                key={area.number}
                className="rounded-3xl bg-slate-50 p-7 ring-1 ring-slate-100"
              >
                <span className="text-sm font-bold text-[#D4AF37]">
                  {area.number}
                </span>

                <h3 className="mt-5 text-xl font-bold text-[#0B1B3A]">
                  {area.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {area.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}