export default function FamilyCaregiverSupportPartnership() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#0F766E]">
              Family Partnership
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
              The family remains an important part of the care team.
            </h2>

            <div className="mt-6 space-y-5 text-base leading-8 text-slate-600">
              <p>
                Families understand their loved ones in ways that outside
                caregivers may not. Their knowledge, preferences, concerns, and
                observations can help create more meaningful support.
              </p>

              <p>
                MercyCare encourages appropriate family participation while
                respecting the wishes, privacy, and dignity of the individual
                receiving care.
              </p>
            </div>
          </div>

          <div className="rounded-3xl bg-[#0B1B3A] p-8 sm:p-10">
            <h3 className="text-2xl font-semibold text-white">
              Partnership means:
            </h3>

            <ul className="mt-6 space-y-4 text-sm leading-7 text-slate-300">
              <li className="border-b border-white/10 pb-4">
                Listening to family concerns and priorities.
              </li>
              <li className="border-b border-white/10 pb-4">
                Respecting the individual's choices and preferences.
              </li>
              <li className="border-b border-white/10 pb-4">
                Communicating appropriately about agreed support.
              </li>
              <li>
                Recognizing when changing circumstances require further
                professional attention.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
