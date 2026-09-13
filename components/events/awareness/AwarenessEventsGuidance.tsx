export default function AwarenessEventsGuidance() {
  return (
    <section className="bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-12">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#0F766E]">
            Responsible Information
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
            Awareness is not a substitute for individual care
          </h2>

          <p className="mt-5 max-w-4xl text-lg leading-8 text-slate-600">
            Information shared during an awareness event is intended to support
            general understanding and community dialogue. Individual health
            concerns should be discussed with an appropriately qualified
            healthcare professional.
          </p>

          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            <div className="rounded-2xl bg-slate-50 p-6">
              <h3 className="font-bold text-[#0B1B3A]">General Information</h3>
              <p className="mt-2 leading-7 text-slate-600">
                Event information should be understood in the context in which
                it is presented.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-6">
              <h3 className="font-bold text-[#0B1B3A]">Personal Concerns</h3>
              <p className="mt-2 leading-7 text-slate-600">
                Personal health concerns require appropriate individual
                professional guidance.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-6">
              <h3 className="font-bold text-[#0B1B3A]">Reliable Support</h3>
              <p className="mt-2 leading-7 text-slate-600">
                Participants should use appropriate professional and community
                resources when further support is needed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
