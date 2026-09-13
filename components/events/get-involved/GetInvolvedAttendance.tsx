const attendanceGuidance = [
  {
    title: "Check the event details",
    description:
      "Review the published date, time, venue, audience information and any participation requirements.",
  },
  {
    title: "Register when required",
    description:
      "If registration is enabled, complete the event registration process before the stated deadline where applicable.",
  },
  {
    title: "Follow event guidance",
    description:
      "Respect the event organizers, fellow participants and any guidance provided for the specific gathering.",
  },
];

export default function GetInvolvedAttendance() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#0F766E]">
              Attending an Event
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
              Make the most of your participation
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Each event will provide its own information so participants can
              understand what is expected before attending.
            </p>
          </div>

          <div className="space-y-5">
            {attendanceGuidance.map((item, index) => (
              <div
                key={item.title}
                className="flex gap-5 rounded-2xl border border-slate-200 bg-slate-50 p-6"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0B1B3A] text-sm font-bold text-white">
                  {index + 1}
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#0B1B3A]">
                    {item.title}
                  </h3>

                  <p className="mt-2 leading-7 text-slate-600">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
