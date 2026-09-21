import Link from "next/link";

const impactAreas = [
  {
    title: "People & Families",
    description:
      "Support can help MercyCare continue developing compassionate support for individuals and families in the communities we serve.",
  },
  {
    title: "Community Programs",
    description:
      "Contributions can help strengthen community-focused programs, outreach activities, and wellbeing initiatives.",
  },
  {
    title: "Care & Support",
    description:
      "Support can contribute to the development and delivery of appropriate home-based care and caregiver support initiatives.",
  },
  {
    title: "Program Development",
    description:
      "Resources can help MercyCare improve, expand, and responsibly develop programs and projects over time.",
  },
];

export default function DonateImpactPage() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700">
            Support MercyCare
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Your Impact
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Every contribution is part of a wider effort to promote dignity,
            compassion, wellbeing, and stronger community support.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {impactAreas.map((area) => (
            <div
              key={area.title}
              className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"
            >
              <h2 className="text-xl font-semibold text-slate-900">
                {area.title}
              </h2>

              <p className="mt-3 leading-7 text-slate-600">
                {area.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-3xl bg-slate-50 p-8">
          <h2 className="text-2xl font-semibold text-slate-900">
            Support the work
          </h2>

          <p className="mt-3 max-w-2xl leading-7 text-slate-600">
            If you would like to support MercyCare, get in touch with our team
            to discuss available opportunities.
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
