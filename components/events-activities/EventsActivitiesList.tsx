import EventCard from "@/components/events-activities/events/EventCard";
import ActivityCard from "@/components/events-activities/activities/ActivityCard";

type EventActivityFilter = "All" | "Upcoming" | "Ongoing" | "Past";

type EventsActivitiesListProps = {
  activeFilter: EventActivityFilter;
};

const events = [
  {
    title: "MercyCare Community Launch",
    date: "Coming Soon",
    location: "Kisumu County, Kenya",
    description:
      "A community gathering introducing MercyCare and its commitment to improving lives through compassionate, community-centered initiatives.",
    slug: "mercycare-community-launch",
    status: "Upcoming",
  },
];

const activities = [
  {
    title: "Senior Wellness Outreach",
    status: "Ongoing",
    location: "Kisumu County, Kenya",
    description:
      "Community-centered activities supporting senior wellness, connection and access to compassionate care.",
    slug: "senior-wellness-outreach",
  },
];

export default function EventsActivitiesList({
  activeFilter,
}: EventsActivitiesListProps) {
  const showEvents =
    activeFilter === "All" ||
    activeFilter === "Upcoming";

  const showActivities =
    activeFilter === "All" ||
    activeFilter === "Ongoing";

  const hasContent = showEvents || showActivities;

  if (!hasContent) {
    return (
      <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 px-6 py-16 text-center">
        <h3 className="text-xl font-semibold text-[#0B1B3A]">
          No {activeFilter.toLowerCase()} events or activities yet.
        </h3>

        <p className="mx-auto mt-3 max-w-xl text-slate-600">
          MercyCare will share updates here as new events and activities
          become available.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-20">
      {showEvents && (
        <section>
          <div className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
              Events
            </p>

            <h2 className="mt-2 text-2xl font-bold text-[#0B1B3A] sm:text-3xl">
              Upcoming & Past Events
            </h2>

            <p className="mt-3 max-w-2xl text-slate-600">
              Discover MercyCare gatherings, launches, community meetings
              and other organized events.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {events.map((event) => (
              <EventCard
                key={event.slug}
                title={event.title}
                date={event.date}
                location={event.location}
                description={event.description}
                slug={event.slug}
              />
            ))}
          </div>
        </section>
      )}

      {showActivities && (
        <section>
          <div className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
              Activities
            </p>

            <h2 className="mt-2 text-2xl font-bold text-[#0B1B3A] sm:text-3xl">
              Community Activities
            </h2>

            <p className="mt-3 max-w-2xl text-slate-600">
              Explore MercyCare&apos;s ongoing and community-centered
              activities.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {activities.map((activity) => (
              <ActivityCard
                key={activity.slug}
                {...activity}
              />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}