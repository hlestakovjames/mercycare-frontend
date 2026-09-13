import Link from "next/link";

export default function AwarenessEventsRegistration() {
  return (
    <section className="bg-[#0B1B3A] py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-6 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#D4AF37]">
              Join an Event
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Take part in future awareness events
            </h2>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-200">
              When an awareness event requires registration, its event page
              will provide the relevant registration information and
              participation requirements.
            </p>
          </div>

          <Link
            href="/events/upcoming"
            className="inline-flex w-fit rounded-full bg-[#D4AF37] px-7 py-3.5 text-sm font-semibold text-[#0B1B3A] transition hover:bg-[#e3c65c]"
          >
            Upcoming Events
          </Link>
        </div>
      </div>
    </section>
  );
}
