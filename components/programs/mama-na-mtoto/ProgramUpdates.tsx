import Link from "next/link";

const updateAreas = [
  {
    title: "News & Announcements",
    description:
      "Follow MercyCare updates, announcements, and developments related to our work with families and communities.",
    href: "/news",
    linkText: "View News",
  },
  {
    title: "Activities",
    description:
      "Explore activities and community engagements that support maternal and child wellbeing.",
    href: "/activities",
    linkText: "View Activities",
  },
  {
    title: "Events",
    description:
      "Discover upcoming and past events, outreach activities, and community initiatives connected to MercyCare.",
    href: "/events",
    linkText: "Explore Events",
  },
];

export default function ProgramUpdates() {
  return (
    <section className="bg-slate-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
            Stories & Updates
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
            Follow the work behind Mama na Mtoto.
          </h2>

          <p className="mt-5 leading-7 text-slate-600">
            As the program grows, MercyCare will share relevant activities,
            announcements, events, and stories that help communities understand
            the work being done to support mothers, children, and families.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {updateAreas.map((area) => (
            <article
              key={area.title}
              className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-100"
            >
              <h3 className="text-xl font-bold text-[#0B1B3A]">
                {area.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                {area.description}
              </p>

              <Link
                href={area.href}
                className="mt-6 inline-flex items-center text-sm font-semibold text-[#0B1B3A] transition hover:text-[#D4AF37]"
              >
                {area.linkText}
                <span className="ml-2">→</span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}