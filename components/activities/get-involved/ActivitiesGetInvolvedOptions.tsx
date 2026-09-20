import Link from "next/link";

const involvementOptions = [
  {
    title: "Attend Activities",
    description:
      "Take part in community outreach, awareness, wellbeing and other activities when opportunities are available.",
    href: "/activities",
    action: "Explore Activities",
  },
  {
    title: "Volunteer",
    description:
      "Offer your time, energy or skills to appropriate MercyCare activities and community initiatives.",
    href: "/volunteer",
    action: "Volunteer With Us",
  },
  {
    title: "Partner With Us",
    description:
      "Organisations can explore opportunities to contribute knowledge, resources, networks or other appropriate support.",
    href: "/services/partnerships",
    action: "Explore Partnerships",
  },
  {
    title: "Share a Community Need",
    description:
      "Help MercyCare understand community concerns, interests and opportunities that may inform future activities.",
    href: "/contact",
    action: "Contact MercyCare",
  },
  {
    title: "Support an Initiative",
    description:
      "Support relevant community activities through appropriate contributions or practical assistance.",
    href: "/contact",
    action: "Start a Conversation",
  },
  {
    title: "Spread Awareness",
    description:
      "Help share reliable information about MercyCare activities and encourage appropriate community participation.",
    href: "/contact",
    action: "Connect With Us",
  },
];

export default function ActivitiesGetInvolvedOptions() {
  return (
    <section className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-24 lg:px-10">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#0F766E]">
            Ways to participate
          </p>

          <h2 className="mt-4 text-3xl font-bold text-[#0B1B3A] sm:text-4xl">
            Choose the kind of involvement that fits you.
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Different people contribute in different ways. Explore an option
            that matches your interests, skills and availability.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {involvementOptions.map((option) => (
            <article
              key={option.title}
              className="flex flex-col rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"
            >
              <div className="mb-5 h-11 w-11 rounded-2xl bg-[#0F766E]/10" />

              <h3 className="text-xl font-semibold text-[#0B1B3A]">
                {option.title}
              </h3>

              <p className="mt-3 flex-1 leading-7 text-slate-600">
                {option.description}
              </p>

              <div className="mt-6">
                <Link
                  href={option.href}
                  className="text-sm font-semibold text-[#0F766E] transition hover:text-[#0B1B3A]"
                >
                  {option.action} →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
