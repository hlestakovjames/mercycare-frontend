import Link from "next/link";

export default function EventCalendarRegistration() {
  return (
    <section className="bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-6 sm:px-8">
        <div className="rounded-3xl bg-[#0B1B3A] p-8 sm:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#D4AF37]">
            Event Registration
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Register when an event requires it
          </h2>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-200">
            Events with registration enabled will provide a dedicated
            registration journey. Attendees will be able to review event
            information, submit their details and receive confirmation.
          </p>

          <div className="mt-8">
            <Link
              href="/events/upcoming"
              className="inline-flex rounded-full bg-[#D4AF37] px-7 py-3.5 text-sm font-semibold text-[#0B1B3A] transition hover:bg-[#e3c65c]"
            >
              Find an Event
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
