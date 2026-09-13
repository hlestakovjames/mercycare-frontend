export default function GetInvolvedPartnerships() {
  return (
    <section className="bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-12">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 sm:p-10">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#0F766E]">
              Community Partnerships
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
              Build stronger events together
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Community organizations, groups and other suitable partners may
              explore opportunities to contribute to MercyCare events where
              there is a shared purpose and appropriate alignment.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            <div className="rounded-2xl bg-slate-50 p-6">
              <h3 className="font-bold text-[#0B1B3A]">
                Community Connections
              </h3>

              <p className="mt-2 leading-7 text-slate-600">
                Connect MercyCare events with relevant community networks and
                audiences.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-6">
              <h3 className="font-bold text-[#0B1B3A]">
                Event Collaboration
              </h3>

              <p className="mt-2 leading-7 text-slate-600">
                Explore suitable ways to support or collaborate on selected
                events.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-6">
              <h3 className="font-bold text-[#0B1B3A]">
                Shared Purpose
              </h3>

              <p className="mt-2 leading-7 text-slate-600">
                Work together around responsible community engagement and
                meaningful participation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
