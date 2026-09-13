export default function CommunityEventsGuidance() {
  return (
    <section className="bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-12">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#0F766E]">
            Event Information
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
            Know what to expect
          </h2>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div>
              <h3 className="font-bold text-[#0B1B3A]">Before attending</h3>
              <p className="mt-2 leading-7 text-slate-600">
                Check the event date, time, venue, participation requirements
                and registration information provided for the specific event.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-[#0B1B3A]">During the event</h3>
              <p className="mt-2 leading-7 text-slate-600">
                Follow the event guidance provided by organizers and respect
                the needs, privacy and dignity of fellow participants.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-[#0B1B3A]">For families</h3>
              <p className="mt-2 leading-7 text-slate-600">
                Event-specific information will indicate whether families,
                caregivers or particular participant groups are encouraged to
                attend.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-[#0B1B3A]">Event updates</h3>
              <p className="mt-2 leading-7 text-slate-600">
                Confirmed changes to dates, venues or registration requirements
                should be checked against the latest published event
                information.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
