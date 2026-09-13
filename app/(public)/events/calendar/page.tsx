import EventCalendarHero from "@/components/events/calendar/EventCalendarHero";
import EventCalendarIntro from "@/components/events/calendar/EventCalendarIntro";
import EventCalendarView from "@/components/events/calendar/EventCalendarView";
import EventCalendarCategories from "@/components/events/calendar/EventCalendarCategories";
import EventCalendarRegistration from "@/components/events/calendar/EventCalendarRegistration";
import EventCalendarCTA from "@/components/events/calendar/EventCalendarCTA";

export default function EventCalendarPage() {
  return (
    <>
      <EventCalendarHero />
      <EventCalendarIntro />
      <EventCalendarView />
      <EventCalendarCategories />
      <EventCalendarRegistration />
      <EventCalendarCTA />
    </>
  );
}
