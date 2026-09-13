import { notFound } from "next/navigation";

import EventRegistrationHero from "@/components/events/registration/EventRegistrationHero";
import EventRegistrationForm from "@/components/events/registration/EventRegistrationForm";
import EventRegistrationGuidance from "@/components/events/registration/EventRegistrationGuidance";
import EventRegistrationNavigation from "@/components/events/registration/EventRegistrationNavigation";

const events = [
  {
    slug: "community-health-wellness-gathering",
    category: "Health & Wellness",
    title: "Community Health & Wellness Gathering",
    description:
      "A community-focused gathering creating space for conversations around health, wellbeing and compassionate support.",
    registrationEnabled: true,
  },
  {
    slug: "senior-wellness-community-event",
    category: "Community",
    title: "Senior Wellness Community Event",
    description:
      "A community gathering centered on older adults, families, caregivers and conversations that support dignity and wellbeing.",
    registrationEnabled: true,
  },
  {
    slug: "health-awareness-community-forum",
    category: "Awareness",
    title: "Health Awareness Community Forum",
    description:
      "An opportunity for community members to connect, learn and participate in meaningful health and awareness conversations.",
    registrationEnabled: false,
  },
];

export default async function EventRegistrationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const event = events.find((item) => item.slug === slug);

  if (!event || !event.registrationEnabled) {
    notFound();
  }

  return (
    <>
      <EventRegistrationHero
        category={event.category}
        title={event.title}
        description={event.description}
      />

      <EventRegistrationForm slug={event.slug} />

      <EventRegistrationGuidance />

      <EventRegistrationNavigation slug={event.slug} />
    </>
  );
}
