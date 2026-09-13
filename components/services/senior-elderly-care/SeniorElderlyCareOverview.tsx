export default function SeniorElderlyCareOverview() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#0F766E]">
            About Senior & Elderly Care
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
            Supporting older adults with dignity and respect.
          </h2>
        </div>

        <div className="space-y-5 text-base leading-8 text-slate-600">
          <p>
            Growing older can bring changes in daily routines, mobility,
            independence, social connection, and the level of support a person
            may need.
          </p>

          <p>
            Home-based care can provide practical and personal support while
            allowing an older adult to remain in a familiar environment
            surrounded by the people and routines that matter to them.
          </p>

          <p>
            MercyCare takes a person-centered approach, recognizing that every
            older adult has different preferences, circumstances, strengths,
            and support needs.
          </p>
        </div>
      </div>
    </section>
  );
}
