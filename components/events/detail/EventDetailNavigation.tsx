import Link from "next/link";

export default function EventDetailNavigation() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto flex max-w-5xl flex-col justify-between gap-5 px-6 sm:flex-row sm:items-center sm:px-8">
        <Link
          href="/events/upcoming"
          className="text-sm font-semibold text-[#0F766E] transition hover:text-[#0B625D]"
        >
          ← Back to Upcoming Events
        </Link>

        <Link
          href="/events/calendar"
          className="text-sm font-semibold text-[#0B1B3A] transition hover:text-[#0F766E]"
        >
          View Event Calendar →
        </Link>
      </div>
    </section>
  );
}
