export default function FamilyCaregiverSupportOverview() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#0F766E]">
            About This Service
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
            Caregiving is a shared journey.
          </h2>
        </div>

        <div className="space-y-5 text-base leading-8 text-slate-600">
          <p>
            Families often play an important role in supporting a loved one at
            home. That responsibility can involve daily routines,
            appointments, communication, household coordination, and emotional
            support.
          </p>

          <p>
            MercyCare recognizes that caregivers also need practical support,
            clear communication, and an environment where their role is
            respected.
          </p>

          <p>
            Our approach is designed to complement family involvement rather
            than replace it, helping create a more coordinated and sustainable
            care environment.
          </p>
        </div>
      </div>
    </section>
  );
}
