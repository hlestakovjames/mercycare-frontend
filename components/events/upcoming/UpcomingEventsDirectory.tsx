import Link from "next/link";

const upcomingEvents = [
  {
    slug: "community-health-wellness-gathering",
    category: "Health & Wellness",
    date: "Coming Soon",
    title: "Community Health & Wellness Gathering",
    description:
      "A community-focused gathering creating space for conversations around health, wellbeing and compassionate support.",
    location: "Venue to be announced",
    registration: true,
  },
  {
    slug: "senior-wellness-community-event",
    category: "Community",
    date: "Coming Soon",
    title: "Senior Wellness Community Event",
    description:
      "A community gathering centered on older adults, families, caregivers and conversations that support dignity and wellbeing.",
    location: "Venue to be announced",
    registration: true,
  },
  {
    slug: "health-awareness-community-forum",
    category: "Awareness",
    date: "Coming Soon",
    title: "Health Awareness Community Forum",
    description:
      "An opportunity for community members to connect, learn and participate in meaningful health and awareness conversations.",
    location: "Venue to be announced",
    registration: false,
  },
];

export default function UpcomingEventsDirectory() {
  return (
    <section className="bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="grid gap-6 lg:grid-cols-3">
          {upcomingEvents.map((event) => (
            <article
              key={event.slug}
              className="flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex min-h-48 items-end bg-[#0B1B3A] p-7">
                <div>
                  <span className="inline-flex rounded-full bg-[#D4AF37] px-3 py-1 text-xs font-semibold text-[#0B1B3A]">
                    {event.category}
                  </span>

                  <p className="mt-4 text-sm font-medium text-slate-300">
                    {event.date}
                  </p>
                </div>
              </div>

              <div className="flex flex-1 flex-col p-7">
                <h3 className="text-xl font-semibold leading-7 text-[#0B1B3A]">
                  {event.title}
                </h3>

                <p className="mt-4 flex-1 text-sm leading-7 text-slate-600">
                  {event.description}
                </p>

                <div className="mt-6 border-t border-slate-100 pt-5">
                  <p className="text-sm text-slate-500">
                    <span className="font-semibold text-slate-700">
                      Location:
                    </span>{" "}
                    {event.location}
                  </p>
                </div>

                <div className="mt-6 flex flex-col gap-3">
                  <Link
                    href={`/events/${event.slug}`}
                    className="inline-flex items-center justify-center rounded-full bg-[#0F766E] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#0d655f]"
                  >
                    View Event Details
                  </Link>

                  {event.registration ? (
                    <span className="text-center text-xs font-medium text-[#0F766E]">
                      Registration available for this event
                    </span>
                  ) : (
                    <span className="text-center text-xs font-medium text-slate-500">
                      Registration information coming soon
                    </span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
