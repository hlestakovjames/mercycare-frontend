import Link from "next/link";

export default function VolunteerGetInvolvedPage() {
  return (
    <>
      <section className="bg-[#0B1B3A] py-20 text-white lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
              Get Involved
            </p>

            <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Find a meaningful way to support the MercyCare journey.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Volunteering is one way to participate. You can also connect
              with MercyCare through activities, events, partnerships, and
              other forms of community support.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 lg:grid-cols-3 lg:px-8">
          <Link
            href="/volunteer/opportunities"
            className="rounded-[2rem] border border-slate-200 bg-slate-50 p-7 transition hover:-translate-y-1 hover:shadow-lg"
          >
            <h2 className="text-xl font-bold text-[#0B1B3A]">
              Volunteer Opportunities
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Explore available ways to contribute.
            </p>
          </Link>

          <Link
            href="/events"
            className="rounded-[2rem] border border-slate-200 bg-slate-50 p-7 transition hover:-translate-y-1 hover:shadow-lg"
          >
            <h2 className="text-xl font-bold text-[#0B1B3A]">
              Events & Activities
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Discover community activities and events where participation
              may be possible.
            </p>
          </Link>

          <Link
            href="/contact"
            className="rounded-[2rem] border border-slate-200 bg-slate-50 p-7 transition hover:-translate-y-1 hover:shadow-lg"
          >
            <h2 className="text-xl font-bold text-[#0B1B3A]">
              Contact MercyCare
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Get in touch if you have a question about volunteering or
              participation.
            </p>
          </Link>
        </div>
      </section>
    </>
  );
}
