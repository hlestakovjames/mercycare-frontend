import Link from "next/link";

export default function UpcomingEventsRegistration() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0F766E]">
              Event Registration
            </p>

            <h2 className="mt-4 text-3xl font-semibold leading-tight text-[#0B1B3A] sm:text-4xl">
              Planning to attend?
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Events that require advance registration will provide a
              registration option on their event details page.
            </p>

            <Link
              href="/events/calendar"
              className="mt-7 inline-flex items-center rounded-full border border-[#0B1B3A]/20 px-6 py-3 text-sm font-semibold text-[#0B1B3A] transition hover:bg-slate-50"
            >
              Browse the Calendar
            </Link>
          </div>

          <div className="rounded-3xl bg-[#0B1B3A] p-8 text-white sm:p-10">
            <div className="grid gap-7 sm:grid-cols-3">
              <div>
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0F766E] text-sm font-bold">
                  01
                </div>
                <h3 className="mt-5 font-semibold">Choose</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Find an upcoming event that interests you.
                </p>
              </div>

              <div>
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0F766E] text-sm font-bold">
                  02
                </div>
                <h3 className="mt-5 font-semibold">Register</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Complete the attendee registration when required.
                </p>
              </div>

              <div>
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0F766E] text-sm font-bold">
                  03
                </div>
                <h3 className="mt-5 font-semibold">Attend</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Receive the relevant event information and join the event.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
