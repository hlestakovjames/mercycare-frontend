import Link from "next/link";

export default function ActivitiesOverviewParticipation() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-4xl px-6 py-20 sm:px-8 sm:py-24">
        <div className="rounded-3xl border border-[#D4AF37]/30 bg-slate-50 p-8 sm:p-10 lg:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#0F766E]">
            Be part of the work
          </p>

          <h2 className="mt-4 text-3xl font-bold text-[#0B1B3A] sm:text-4xl">
            Meaningful community work needs people who care.
          </h2>

          <p className="mt-5 leading-8 text-slate-600">
            Whether you want to attend an activity, volunteer, contribute
            skills, support an initiative or connect MercyCare with a potential
            partner, there may be a way for you to participate.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/activities/get-involved"
              className="rounded-full bg-[#0B1B3A] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#132952]"
            >
              Get Involved
            </Link>

            <Link
              href="/volunteer"
              className="rounded-full border border-[#0B1B3A]/15 px-7 py-3.5 text-sm font-semibold text-[#0B1B3A] transition hover:bg-white"
            >
              Volunteer
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
