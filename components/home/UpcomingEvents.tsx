import Link from "next/link";

const events = [
  {
    month: "DEC",
    day: "01",
    title: "MercyCare Community Activities",
    location: "Kisumu County",
    description:
      "Updates about upcoming MercyCare community activities will appear here.",
  },
  {
    month: "TBA",
    day: "—",
    title: "Program Activities",
    location: "Community location",
    description:
      "Follow MercyCare for announcements about upcoming program activities.",
  },
];

export default function UpcomingEvents() {
  return (
    <section className="bg-slate-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
              Events & Activities
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
              Be part of the journey.
            </h2>
          </div>

          <Link
            href="/events"
            className="text-sm font-semibold text-[#0B1B3A] transition hover:text-[#D4AF37]"
          >
            View all events →
          </Link>
        </div>

        <div className="mt-12 space-y-4">
          {events.map((event) => (
            <article
              key={`${event.month}-${event.title}`}
              className="flex flex-col gap-6 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-100 md:flex-row md:items-center md:p-8"
            >
              <div className="flex h-20 w-20 shrink-0 flex-col items-center justify-center rounded-2xl bg-[#0B1B3A] text-white">
                <span className="text-xs font-semibold text-[#D4AF37]">
                  {event.month}
                </span>

                <span className="mt-1 text-2xl font-bold">
                  {event.day}
                </span>
              </div>

              <div className="flex-1">
                <h3 className="text-xl font-bold text-[#0B1B3A]">
                  {event.title}
                </h3>

                <p className="mt-1 text-sm font-medium text-[#D4AF37]">
                  {event.location}
                </p>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {event.description}
                </p>
              </div>

              <Link
                href="/events"
                className="shrink-0 text-sm font-semibold text-[#0B1B3A] hover:text-[#D4AF37]"
              >
                View details →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}