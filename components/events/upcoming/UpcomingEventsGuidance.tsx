export default function UpcomingEventsGuidance() {
  return (
    <section className="bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-4xl px-6 text-center sm:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0F766E]">
          Event Information
        </p>

        <h2 className="mt-4 text-3xl font-semibold text-[#0B1B3A] sm:text-4xl">
          Check the event details before you attend.
        </h2>

        <p className="mt-5 text-lg leading-8 text-slate-600">
          Event information may include the date, time, venue, purpose,
          intended audience, participation requirements and whether advance
          registration is required.
        </p>

        <div className="mt-10 grid gap-4 text-left sm:grid-cols-2">
          {[
            "Date and time",
            "Venue and location",
            "Event purpose",
            "Who should attend",
            "Registration requirements",
            "Participation information",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-slate-200 bg-white px-6 py-5 text-sm font-medium text-slate-700"
            >
              <span className="mr-3 text-[#0F766E]">✓</span>
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
