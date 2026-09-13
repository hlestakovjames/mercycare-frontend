import Link from "next/link";

export default function EventsOverviewRegistration() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-6 sm:px-8">
        <div className="rounded-3xl bg-[#0B1B3A] p-8 sm:p-12">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#D4AF37]">
              Event Registration
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Register when an event requires it
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-200">
              Events that require registration will provide a registration
              option on their event detail page. Event-specific instructions
              will explain what information is required and what participants
              should know before attending.
            </p>

            <div className="mt-8">
              <Link
                href="/events/upcoming"
                className="inline-flex rounded-full bg-[#D4AF37] px-8 py-4 text-sm font-semibold text-[#0B1B3A] transition hover:bg-[#e3c65c]"
              >
                Find an Upcoming Event
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
