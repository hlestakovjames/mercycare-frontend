export default function PastActivitiesIntro() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-24 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#0F766E]">
              Activity record
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
              Every activity can become part of a shared story.
            </h2>
          </div>

          <div className="space-y-5 text-base leading-8 text-slate-600">
            <p>
              Completed activities provide an opportunity to recognise
              participation, document community engagement and reflect on what
              was learned.
            </p>

            <p>
              As MercyCare activities take place, this section can grow into a
              useful record of outreach, awareness, wellbeing, family and
              caregiver engagement and volunteer participation.
            </p>

            <p>
              Activity information will be added as activities are confirmed
              and completed. This avoids presenting planned or illustrative
              activities as historical events.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
