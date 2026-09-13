export default function EventRegistrationGuidance() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#D4AF37]">
              01
            </p>
            <h2 className="mt-3 text-xl font-bold text-[#0B1B3A]">
              Check the event details
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              Review the event date, time, location and participation guidance
              before completing registration.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#D4AF37]">
              02
            </p>
            <h2 className="mt-3 text-xl font-bold text-[#0B1B3A]">
              Provide accurate information
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              Use current contact information so future event communication can
              reach you when the registration service is connected.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#D4AF37]">
              03
            </p>
            <h2 className="mt-3 text-xl font-bold text-[#0B1B3A]">
              Follow event guidance
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              Event-specific instructions will be provided where applicable,
              including any participation requirements.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
