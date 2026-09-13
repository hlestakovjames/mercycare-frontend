export default function PersonalCareOverview() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#0F766E]">
            About Personal Care
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
            Personal support should always protect dignity.
          </h2>
        </div>

        <div className="space-y-5 text-base leading-8 text-slate-600">
          <p>
            Some individuals need additional assistance with personal routines
            because of age, recovery, disability, ongoing care needs, or other
            circumstances.
          </p>

          <p>
            Receiving this support at home can allow individuals to remain in a
            familiar environment while receiving assistance that fits into
            their everyday routine.
          </p>

          <p>
            MercyCare approaches personal care with patience, privacy, respect,
            and sensitivity to each individual's preferences and level of
            independence.
          </p>
        </div>
      </div>
    </section>
  );
}
