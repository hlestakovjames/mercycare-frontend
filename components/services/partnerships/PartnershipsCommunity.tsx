const opportunities = [
  "Community health and wellbeing initiatives",
  "Family and caregiver support activities",
  "Awareness and education initiatives",
  "Community outreach and engagement",
  "Appropriate referral relationships",
  "Collaborative support for vulnerable communities",
];

export default function PartnershipsCommunity() {
  return (
    <section className="bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0F766E]">
              Community Collaboration
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[#0B1B3A] sm:text-4xl">
              Building stronger connections within the community.
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              MercyCare is interested in relationships that help communities
              better understand home-based support and connect people with
              appropriate resources.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 sm:p-10">
            <h3 className="text-xl font-bold text-[#0B1B3A]">
              Potential areas of collaboration
            </h3>

            <ul className="mt-6 space-y-4">
              {opportunities.map((opportunity) => (
                <li key={opportunity} className="flex items-start gap-4">
                  <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[#D4AF37]" />

                  <span className="leading-7 text-slate-700">
                    {opportunity}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
