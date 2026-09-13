import Link from "next/link";

export default function ProjectsGetInvolved() {
  const opportunities = [
    {
      title: "Volunteer",
      description:
        "Contribute your time, skills, and community knowledge to appropriate MercyCare initiatives.",
      href: "/volunteer",
    },
    {
      title: "Partner With Us",
      description:
        "Explore opportunities for organizations, professionals, institutions, and community groups to collaborate with MercyCare.",
      href: "/contact",
    },
    {
      title: "Support a Project",
      description:
        "Support MercyCare's community initiatives through resources, expertise, advocacy, or other appropriate contributions.",
      href: "/donate",
    },
  ];

  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
              Get Involved
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
              Be part of meaningful community action.
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-600">
              MercyCare believes that stronger communities are built through
              collaboration. There are different ways to contribute to
              initiatives that support health, wellbeing, dignity, and care.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-3">
            {opportunities.map((opportunity) => (
              <article
                key={opportunity.title}
                className="flex flex-col rounded-2xl border border-slate-200 bg-slate-50 p-6"
              >
                <h3 className="text-xl font-bold text-[#0B1B3A]">
                  {opportunity.title}
                </h3>

                <p className="mt-4 flex-1 text-sm leading-7 text-slate-600">
                  {opportunity.description}
                </p>

                <Link
                  href={opportunity.href}
                  className="mt-6 text-sm font-bold text-[#0B1B3A] transition hover:text-[#D4AF37]"
                >
                  Learn More →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
