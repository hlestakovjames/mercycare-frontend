import Link from "next/link";

const options = [
  {
    title: "Upcoming Events",
    description:
      "See events that are planned for future participation and check registration availability.",
    href: "/events/upcoming",
  },
  {
    title: "Past Events",
    description:
      "Explore the archive of previous MercyCare community gatherings and activities.",
    href: "/events/past",
  },
  {
    title: "Event Calendar",
    description:
      "Use the calendar view to explore event scheduling information as it becomes available.",
    href: "/events/calendar",
  },
];

export default function EventsOverviewDiscovery() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#D4AF37]">
              Find an Event
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
              Choose how you want to explore
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Event information will be updated as MercyCare programmes and
              community gatherings are planned.
            </p>
          </div>

          <div className="grid gap-4">
            {options.map((option) => (
              <Link
                key={option.title}
                href={option.href}
                className="group flex flex-col gap-4 rounded-2xl border border-slate-200 p-6 transition hover:border-[#0F766E]/40 hover:bg-slate-50 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <h3 className="text-xl font-bold text-[#0B1B3A] group-hover:text-[#0F766E]">
                    {option.title}
                  </h3>

                  <p className="mt-2 leading-7 text-slate-600">
                    {option.description}
                  </p>
                </div>

                <span className="shrink-0 text-sm font-semibold text-[#0F766E]">
                  Explore →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
