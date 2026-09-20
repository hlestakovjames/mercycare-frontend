import Link from "next/link";

export default function ActivitiesOverviewArchive() {
  return (
    <section className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-24 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl bg-[#0B1B3A] p-8 text-white sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#D4AF37]">
              Looking ahead
            </p>

            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              Upcoming opportunities
            </h2>

            <p className="mt-5 leading-8 text-slate-200">
              Explore upcoming MercyCare events and activities as dates,
              locations and participation opportunities are confirmed.
            </p>

            <div className="mt-7">
              <Link
                href="/events/upcoming"
                className="inline-flex rounded-full bg-[#D4AF37] px-6 py-3 text-sm font-semibold text-[#0B1B3A] transition hover:opacity-90"
              >
                Upcoming Events
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8 sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#0F766E]">
              Looking back
            </p>

            <h2 className="mt-4 text-3xl font-bold text-[#0B1B3A] sm:text-4xl">
              Past activities
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              As activities take place, this section can preserve completed
              initiatives, participation and community learning without
              presenting unconfirmed activities as historical records.
            </p>

            <div className="mt-7">
              <Link
                href="/activities/past"
                className="inline-flex rounded-full bg-[#0B1B3A] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#132952]"
              >
                Past Activities
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
