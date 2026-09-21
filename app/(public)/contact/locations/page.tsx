export default function ContactLocationsPage() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-4xl px-6 py-16 lg:px-8 lg:py-24">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-600">
          Contact MercyCare
        </p>

        <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          Our Locations
        </h1>

        <p className="mt-6 text-lg leading-8 text-slate-600">
          Information about MercyCare locations and service coverage will be
          published here as the organisation expands its location directory.
        </p>

        <div className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-6">
          <h2 className="text-xl font-semibold text-slate-900">
            Location Directory
          </h2>
          <p className="mt-3 leading-7 text-slate-600">
            Contact MercyCare directly if you need to confirm whether services
            are available in your area.
          </p>
        </div>
      </div>
    </section>
  );
}
