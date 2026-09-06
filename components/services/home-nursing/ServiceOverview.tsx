export default function ServiceOverview() {
  return (
    <section id="service-overview" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
              About This Service
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
              Clinical expertise with compassionate support
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-600">
              MercyCare provides professional home nursing services for
              individuals who need clinical support while recovering,
              managing a health condition or receiving ongoing care at home.
            </p>

            <p className="mt-5 text-base leading-8 text-slate-600">
              Our approach combines professional nursing practice with
              personalised care, family communication and respect for each
              client's dignity, privacy and independence.
            </p>
          </div>

          <div className="rounded-3xl bg-slate-50 p-8 ring-1 ring-slate-200">
            <h3 className="text-xl font-semibold text-[#0B1B3A]">
              Care designed around you
            </h3>

            <ul className="mt-6 space-y-4 text-sm leading-7 text-slate-600">
              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#D4AF37]" />
                Individualised assessment and care planning
              </li>

              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#D4AF37]" />
                Professional nursing supervision
              </li>

              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#D4AF37]" />
                Family-centred communication and updates
              </li>

              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#D4AF37]" />
                Ongoing review as care needs change
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}