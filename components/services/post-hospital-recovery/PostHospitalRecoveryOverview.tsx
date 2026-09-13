export default function PostHospitalRecoveryOverview() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#0F766E]">
            About Recovery Support
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
            Home can be an important part of the recovery journey.
          </h2>
        </div>

        <div className="space-y-5 text-base leading-8 text-slate-600">
          <p>
            Returning home after hospitalization or treatment can involve a
            period of adjustment. Individuals may need additional practical
            support while they regain confidence and return to familiar
            routines.
          </p>

          <p>
            Families and caregivers may also need help understanding how to
            organize support around the individual's changing circumstances.
          </p>

          <p>
            MercyCare focuses on providing appropriate home-based support while
            respecting the care instructions and recommendations provided by
            the individual's qualified healthcare professionals.
          </p>
        </div>
      </div>
    </section>
  );
}
