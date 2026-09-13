export default function SpecialNeedsChildrenOverview() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#0F766E]">
            About This Service
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
            Care that recognizes every child's individual needs.
          </h2>
        </div>

        <div className="space-y-5 text-base leading-8 text-slate-600">
          <p>
            Children who require additional support may have different
            routines, abilities, communication needs, and levels of
            independence.
          </p>

          <p>
            Home-based support can help families create a more consistent and
            comfortable care environment while allowing the child to remain
            connected to their family and familiar surroundings.
          </p>

          <p>
            MercyCare takes a family-aware and child-centered approach,
            recognizing that support should be adapted to the child's
            circumstances rather than treating every situation in the same
            way.
          </p>
        </div>
      </div>
    </section>
  );
}
