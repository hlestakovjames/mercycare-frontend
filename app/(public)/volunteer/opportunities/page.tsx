import Link from "next/link";

export default function VolunteerOpportunitiesPage() {
  return (
    <>
      <section className="bg-[#0B1B3A] py-20 text-white lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
              Volunteer Opportunities
            </p>

            <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Find a way to contribute.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Explore volunteer opportunities as they become available across
              MercyCare's programs, projects, activities, events, and support
              functions.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 text-center sm:p-12">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
              Opportunities
            </p>

            <h2 className="mt-4 text-2xl font-bold text-[#0B1B3A] sm:text-3xl">
              Current volunteer opportunities will appear here.
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600">
              MercyCare can publish available opportunities here with their
              focus area, expected contribution, availability, and application
              instructions.
            </p>

            <Link
              href="/volunteer/apply"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-[#0B1B3A] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#132b57]"
            >
              Submit a Volunteer Application
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
