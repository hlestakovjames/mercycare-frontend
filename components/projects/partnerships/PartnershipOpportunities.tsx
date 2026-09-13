const opportunities = [
  "Community health and wellbeing initiatives",
  "Maternal and child wellbeing activities",
  "Senior wellness and support initiatives",
  "Health education and awareness",
  "Community outreach and engagement",
  "Professional and technical support",
  "Resource and in-kind support",
  "Research, learning, and knowledge sharing",
];

export default function PartnershipOpportunities() {
  return (
    <section className="bg-[#0B1B3A] py-20 text-white lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
              Collaboration Opportunities
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Areas where collaboration may create value.
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-300">
              Partnership opportunities depend on MercyCare's current
              priorities, project needs, and the capabilities of prospective
              partners.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {opportunities.map((opportunity) => (
              <div
                key={opportunity}
                className="rounded-xl border border-white/10 bg-white/5 p-5"
              >
                <div className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#D4AF37]" />

                  <span className="text-sm leading-7 text-slate-200">
                    {opportunity}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
