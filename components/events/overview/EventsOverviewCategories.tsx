import Link from "next/link";

const categories = [
  {
    title: "Community Events",
    description:
      "Gatherings that encourage community connection, participation and shared conversations.",
    href: "/events/community",
  },
  {
    title: "Health & Wellness Events",
    description:
      "Community-focused opportunities for wellbeing conversations, learning and participation.",
    href: "/events/health-wellness",
  },
  {
    title: "Awareness Events",
    description:
      "Events focused on education, awareness, dialogue and connecting communities with appropriate support.",
    href: "/events/awareness",
  },
];

export default function EventsOverviewCategories() {
  return (
    <section className="bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#0F766E]">
            Event Categories
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
            Explore events by focus
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Explore the different types of gatherings that form part of the
            MercyCare events programme.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {categories.map((category) => (
            <Link
              key={category.title}
              href={category.href}
              className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:border-[#0F766E]/40 hover:shadow-md"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[#0F766E]/10 text-lg font-bold text-[#0F766E]">
                +
              </span>

              <h3 className="mt-6 text-2xl font-bold text-[#0B1B3A] group-hover:text-[#0F766E]">
                {category.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                {category.description}
              </p>

              <span className="mt-6 inline-flex text-sm font-semibold text-[#0F766E]">
                Explore category →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
