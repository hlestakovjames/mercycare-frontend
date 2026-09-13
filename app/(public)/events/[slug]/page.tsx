import { notFound } from "next/navigation";

import EventDetailHero from "@/components/events/detail/EventDetailHero";
import EventDetailInformation from "@/components/events/detail/EventDetailInformation";
import EventDetailAbout from "@/components/events/detail/EventDetailAbout";
import EventDetailAudience from "@/components/events/detail/EventDetailAudience";
import EventDetailRegistration from "@/components/events/detail/EventDetailRegistration";
import EventDetailGuidance from "@/components/events/detail/EventDetailGuidance";
import EventDetailNavigation from "@/components/events/detail/EventDetailNavigation";

const events = [
  {
    slug: "community-health-wellness-gathering",
    category: "Health & Wellness",
    title: "Community Health & Wellness Gathering",
    description:
      "A community-focused gathering creating space for conversations around health, wellbeing and compassionate support.",
    date: "Coming Soon",
    time: "To be announced",
    location: "Venue to be announced",
    registrationEnabled: true,
    audience: ["Community Members", "Families", "Caregivers"],
  },
  {
    slug: "senior-wellness-community-event",
    category: "Community",
    title: "Senior Wellness Community Event",
    description:
      "A community gathering centered on older adults, families, caregivers and conversations that support dignity and wellbeing.",
    date: "Coming Soon",
    time: "To be announced",
    location: "Venue to be announced",
    registrationEnabled: true,
    audience: ["Older Adults", "Families", "Caregivers", "Community Members"],
  },
  {
    slug: "health-awareness-community-forum",
    category: "Awareness",
    title: "Health Awareness Community Forum",
    description:
      "An opportunity for community members to connect, learn and participate in meaningful health and awareness conversations.",
    date: "Coming Soon",
    time: "To be announced",
    location: "Venue to be announced",
    registrationEnabled: false,
    audience: ["Community Members", "Families", "Caregivers"],
  },
];

export default async function EventDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const event = events.find((item) => item.slug === slug);

  if (!event) {
    notFound();
  }

  return (
    <>
      <EventDetailHero
        category={event.category}
        title={event.title}
        description={event.description}
      />

      <EventDetailInformation
        date={event.date}
        time={event.time}
        location={event.location}
        registrationEnabled={event.registrationEnabled}
      />

      <EventDetailAbout
        title={event.title}
        description={event.description}
      />

      <EventDetailAudience audience={event.audience} />

      <EventDetailRegistration
        slug={event.slug}
        registrationEnabled={event.registrationEnabled}
      />

      <EventDetailGuidance />

      <EventDetailNavigation />
    </>
  );
}
