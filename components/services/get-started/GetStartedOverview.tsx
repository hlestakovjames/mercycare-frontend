export default function GetStartedOverview() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0F766E]">
              Begin With Understanding
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[#0B1B3A] sm:text-4xl">
              You do not have to figure everything out before contacting us.
            </h2>
          </div>

          <div className="space-y-5 text-base leading-8 text-slate-600">
            <p>
              Reaching out to MercyCare is an opportunity to explain your
              situation, ask questions and understand the types of support
              that may be relevant.
            </p>

            <p>
              We can discuss the person's circumstances, the family's
              priorities and the type of home-based support being considered.
            </p>

            <p>
              If a need falls outside the appropriate scope of MercyCare
              support, we can make that clear so that the appropriate
              professional or service can be considered.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
