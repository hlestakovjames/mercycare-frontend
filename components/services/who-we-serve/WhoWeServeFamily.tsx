export default function WhoWeServeFamily() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#0F766E]">
              Families & Caregivers
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
              Supporting the wider care environment.
            </h2>

            <div className="mt-6 space-y-5 text-base leading-8 text-slate-600">
              <p>
                The person receiving support is always central, but families and
                caregivers can also need practical assistance and clear
                communication.
              </p>

              <p>
                MercyCare works to complement family involvement, not replace
                it, while respecting the individual's wishes and privacy.
              </p>
            </div>
          </div>

          <div className="rounded-3xl bg-slate-50 p-8 sm:p-10">
            <h3 className="text-2xl font-semibold text-[#0B1B3A]">
              Our approach includes:
            </h3>

            <ul className="mt-6 space-y-4 text-sm leading-7 text-slate-600">
              <li>• Listening to family and caregiver concerns</li>
              <li>• Respecting individual preferences</li>
              <li>• Maintaining clear responsibilities</li>
              <li>• Supporting continuity of everyday routines</li>
              <li>• Communicating appropriately about changes</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
