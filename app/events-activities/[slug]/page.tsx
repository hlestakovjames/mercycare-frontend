import EventHero from "@/components/events-activities/events/EventHero";
import EventDetails from "@/components/events-activities/events/EventDetails";
import ActivityHero from "@/components/events-activities/activities/ActivityHero";
import ActivityDetails from "@/components/events-activities/activities/ActivityDetails";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const events = {
  "mercycare-community-launch": {
    title: "MercyCare Community Launch",
    date: "Coming Soon",
    location: "Kisumu County, Kenya",
    description:
      "The MercyCare Community Launch will introduce the initiative to the community and bring together partners, community members and supporters around a shared commitment to compassionate care and lasting impact.",
    details: [
      "Community launch event",
      "Kisumu County, Kenya",
      "Date to be announced",
    ],
  },
};

const activities = {
  "senior-wellness-outreach": {
    title: "Senior Wellness Outreach",
    status: "Ongoing",
    location: "Kisumu County, Kenya",
    description:
      "Senior Wellness Outreach brings compassionate, community-centered support closer to older members of the community through wellness activities, engagement and practical support.",
    objectives: [
      "Promote senior wellness and dignity",
      "Strengthen community connection",
      "Improve access to appropriate support",
    ],
  },
};

export default async function EventsActivitiesDetailPage({
  params,
}: PageProps) {
  const { slug } = await params;

  const event = events[slug as keyof typeof events];
  const activity = activities[slug as keyof typeof activities];

  if (event) {
    return (
      <main>
        <EventHero
          title={event.title}
          date={event.date}
          location={event.location}
        />

        <EventDetails
          description={event.description}
          details={event.details}
        />
      </main>
    );
  }

  if (activity) {
    return (
      <main>
        <ActivityHero
          title={activity.title}
          status={activity.status}
          location={activity.location}
        />

        <ActivityDetails
          description={activity.description}
          objectives={activity.objectives}
        />
      </main>
    );
  }

  return (
    <main className="bg-white py-24">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
          MercyCare
        </p>

        <h1 className="mt-4 text-3xl font-bold text-[#0B1B3A]">
          Event or activity not found
        </h1>

        <p className="mt-4 text-slate-600">
          The event or activity you are looking for could not be found.
        </p>
      </div>
    </main>
  );
}