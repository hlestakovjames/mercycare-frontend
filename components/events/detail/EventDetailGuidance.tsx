export default function EventDetailGuidance() {
  return (
    <section className="bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-6 sm:px-8">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#0F766E]">
            Before You Attend
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
            Review the event information
          </h2>

          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            <div>
              <h3 className="font-bold text-[#0B1B3A]">Check the details</h3>
              <p className="mt-2 leading-7 text-slate-600">
                Confirm the published date, time, venue and participation
                information before attending.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-[#0B1B3A]">
                Complete registration
              </h3>
              <p className="mt-2 leading-7 text-slate-600">
                Where registration is enabled, submit the requested attendee
                information before the applicable deadline.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-[#0B1B3A]">
                Follow event guidance
              </h3>
              <p className="mt-2 leading-7 text-slate-600">
                Respect event organizers, participants and any instructions
                provided for the specific gathering.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
