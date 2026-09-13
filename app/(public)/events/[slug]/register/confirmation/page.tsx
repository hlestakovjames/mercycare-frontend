import { notFound } from "next/navigation";

import EventRegistrationConfirmation from "@/components/events/registration/EventRegistrationConfirmation";

const events = [
  {
    slug: "community-health-wellness-gathering",
    title: "Community Health & Wellness Gathering",
    registrationEnabled: true,
  },
  {
    slug: "senior-wellness-community-event",
    title: "Senior Wellness Community Event",
    registrationEnabled: true,
  },
];

export default async function EventRegistrationConfirmationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const event = events.find((item) => item.slug === slug);

  if (!event || !event.registrationEnabled) {
    notFound();
  }

  return <EventRegistrationConfirmation title={event.title} />;
}
