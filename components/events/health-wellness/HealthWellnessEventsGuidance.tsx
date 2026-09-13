export default function HealthWellnessEventsGuidance() {
  return (
    <section className="bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-12">
        <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 sm:p-10">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#0F766E]">
              Important Information
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
              Events are a place to connect and learn
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              General health and wellness information shared at an event should
              be understood in its proper context. Personal medical concerns
              should be discussed with an appropriately qualified healthcare
              professional.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            <div className="rounded-2xl bg-slate-50 p-6">
              <h3 className="font-bold text-[#0B1B3A]">Listen</h3>
              <p className="mt-2 leading-7 text-slate-600">
                Listen to speakers, organizers and fellow participants with
                openness and respect.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-6">
              <h3 className="font-bold text-[#0B1B3A]">Learn</h3>
              <p className="mt-2 leading-7 text-slate-600">
                Use event information as an opportunity to improve awareness
                and understanding.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-6">
              <h3 className="font-bold text-[#0B1B3A]">Seek Support</h3>
              <p className="mt-2 leading-7 text-slate-600">
                Seek appropriate professional guidance when an individual
                health concern requires personalized attention.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
