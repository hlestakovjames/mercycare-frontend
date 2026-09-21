import Link from "next/link";
import { ArrowRight, CalendarDays, MapPin } from "lucide-react";

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
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#0B1B3A]/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#1597c9]">
              <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" />
              Events & Activities
            </div>

            <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-[#0B1B3A] sm:text-4xl lg:text-5xl">
              Be part of the journey.
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600">
              Discover upcoming MercyCare events and stay connected with our
              wider community activities.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/events"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[#0B1B3A] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#1597c9] focus:outline-none focus:ring-4 focus:ring-[#1597c9]/20"
            >
              View events
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>

            <Link
              href="/activities"
              className="inline-flex min-h-11 items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-[#0B1B3A] transition hover:border-[#0B1B3A] hover:bg-slate-100 focus:outline-none focus:ring-4 focus:ring-[#1597c9]/20"
            >
              Explore activities
            </Link>
          </div>
        </div>

        <div className="mt-12 space-y-4">
          {events.map((event) => (
            <article
              key={`${event.month}-${event.title}`}
              className="flex flex-col gap-6 rounded-[1.75rem] border border-slate-100 bg-white p-6 shadow-sm ring-1 ring-slate-100 transition hover:-translate-y-0.5 hover:shadow-lg md:flex-row md:items-center md:p-8"
            >
              <div className="flex h-20 w-20 shrink-0 flex-col items-center justify-center rounded-2xl bg-[#0B1B3A] text-white">
                <span className="text-xs font-bold text-[#D4AF37]">
                  {event.month}
                </span>

                <span className="mt-1 text-2xl font-bold">{event.day}</span>
              </div>

              <div className="flex-1">
                <h3 className="text-xl font-bold text-[#0B1B3A]">
                  {event.title}
                </h3>

                <p className="mt-2 inline-flex items-center gap-1.5 text-sm font-bold text-[#1597c9]">
                  <MapPin className="h-4 w-4" aria-hidden="true" />
                  {event.location}
                </p>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {event.description}
                </p>
              </div>

              <Link
                href="/events"
                className="inline-flex min-h-10 shrink-0 items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-bold text-[#0B1B3A] transition hover:border-[#0B1B3A] hover:bg-[#0B1B3A] hover:text-white focus:outline-none focus:ring-4 focus:ring-[#1597c9]/20"
              >
                View details
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
