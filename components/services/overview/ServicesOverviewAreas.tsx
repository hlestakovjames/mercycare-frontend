import Link from "next/link";

const areas = [
  {
    title: "Clinical & Nursing Care",
    description:
      "Home-based nursing and related support within an appropriate and clearly understood scope.",
  },
  {
    title: "Personal & Daily Living Support",
    description:
      "Practical support with personal routines, independence and everyday living.",
  },
  {
    title: "Specialized Care",
    description:
      "Support for people and families whose circumstances require thoughtful, individualized attention.",
  },
  {
    title: "Family & Caregiver Support",
    description:
      "Practical partnership, communication and support for those involved in caring for a loved one.",
  },
  {
    title: "Community-Based Care",
    description:
      "Support connected to the realities of people, families and communities where they live.",
  },
  {
    title: "Coordinated & Continuity of Care",
    description:
      "Communication and coordination that help support remain clear as circumstances change.",
  },
];

export default function ServicesOverviewAreas() {
  return (
    <section className="bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0F766E]">
              Service Areas
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[#0B1B3A] sm:text-4xl">
              A broad approach to home-based support.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Our service areas reflect the different dimensions of support
              that individuals and families may need.
            </p>
          </div>

          <Link
            href="/services/areas"
            className="text-sm font-semibold text-[#0F766E] hover:underline"
          >
            View all service areas →
          </Link>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {areas.map((area) => (
            <article
              key={area.title}
              className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm"
            >
              <div className="mb-5 h-1.5 w-12 rounded-full bg-[#D4AF37]" />

              <h3 className="text-xl font-bold text-[#0B1B3A]">
                {area.title}
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                {area.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
