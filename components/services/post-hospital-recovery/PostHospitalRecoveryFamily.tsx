export default function PostHospitalRecoveryFamily() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#0F766E]">
              Family & Caregivers
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
              Recovery is easier when everyone understands the plan.
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
              Families can face many questions when a loved one returns home.
              Clear communication and defined responsibilities can make the
              transition more manageable.
            </p>

            <p className="mt-5 text-base leading-8 text-slate-600">
              MercyCare works respectfully with families and caregivers while
              keeping the individual's wellbeing, preferences, and established
              care guidance at the center.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 sm:p-10">
            <h3 className="text-xl font-semibold text-[#0B1B3A]">
              Supporting the home environment
            </h3>

            <ul className="mt-6 space-y-5">
              {[
                "Understand the individual's current situation",
                "Respect existing healthcare guidance",
                "Clarify family and caregiver responsibilities",
                "Maintain clear communication",
                "Identify changes that may require professional attention",
              ].map((item) => (
                <li key={item} className="flex gap-4">
                  <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[#0F766E]" />
                  <span className="text-sm leading-7 text-slate-700">
                    {item}
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
