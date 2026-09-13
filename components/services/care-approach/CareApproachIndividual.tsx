export default function CareApproachIndividual() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#0F766E]">
              Individualized Support
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
              No two households are exactly alike.
            </h2>

            <div className="mt-6 space-y-5 text-base leading-8 text-slate-600">
              <p>
                People have different routines, preferences, family structures,
                living environments, and levels of independence.
              </p>

              <p>
                MercyCare therefore seeks to understand the individual before
                determining how appropriate support can fit into their daily
                life.
              </p>
            </div>
          </div>

          <div className="rounded-3xl bg-slate-50 p-8 sm:p-10">
            <h3 className="text-2xl font-semibold text-[#0B1B3A]">
              We consider:
            </h3>

            <ul className="mt-6 space-y-4 text-sm leading-7 text-slate-600">
              <li>• Individual preferences and routines</li>
              <li>• Level of independence</li>
              <li>• Family and caregiver involvement</li>
              <li>• Existing care arrangements</li>
              <li>• The agreed scope of support</li>
              <li>• Communication and continuity needs</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
