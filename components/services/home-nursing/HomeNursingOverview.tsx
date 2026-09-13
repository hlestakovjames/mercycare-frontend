export default function HomeNursingOverview() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#0F766E]">
            About Home Nursing
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
            Care that meets people where they are.
          </h2>
        </div>

        <div className="space-y-5 text-base leading-8 text-slate-600">
          <p>
            Home nursing brings appropriate nursing support into a person's
            home environment, where care can be provided around their routine,
            circumstances, and family support system.
          </p>

          <p>
            For many individuals, receiving care at home can provide greater
            familiarity and comfort while reducing some of the disruption
            associated with travelling for every care need.
          </p>

          <p>
            MercyCare approaches home nursing with attention to dignity,
            communication, continuity, and the needs of both the individual
            receiving care and those supporting them.
          </p>
        </div>
      </div>
    </section>
  );
}
