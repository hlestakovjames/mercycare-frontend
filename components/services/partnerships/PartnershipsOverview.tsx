export default function PartnershipsOverview() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0F766E]">
              Why Partnerships Matter
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[#0B1B3A] sm:text-4xl">
              Care works better when the right people communicate.
            </h2>
          </div>

          <div className="space-y-5 text-base leading-8 text-slate-600">
            <p>
              Home-based support often sits within a wider network of family,
              caregivers, healthcare professionals and community resources.
            </p>

            <p>
              Thoughtful collaboration can help people and families understand
              their options, communicate changing needs and connect with the
              appropriate support.
            </p>

            <p>
              MercyCare approaches partnerships with respect for each
              organization&apos;s role, responsibilities and professional
              boundaries.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
