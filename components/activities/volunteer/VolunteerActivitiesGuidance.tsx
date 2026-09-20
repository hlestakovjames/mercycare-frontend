import Link from "next/link";

export default function VolunteerActivitiesGuidance() {
  return (
    <section className="bg-slate-50">
      <div className="mx-auto max-w-4xl px-6 py-20 sm:px-8 sm:py-24">
        <div className="rounded-3xl bg-[#0B1B3A] p-8 text-white sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#D4AF37]">
            Interested in volunteering?
          </p>

          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            Tell us how you would like to contribute.
          </h2>

          <p className="mt-5 leading-8 text-slate-200">
            Volunteer opportunities may change as MercyCare activities and
            community initiatives develop. Contact us to share your interests,
            skills and availability so we can understand how you may be able
            to participate.
          </p>

          <div className="mt-8">
            <Link
              href="/volunteer"
              className="inline-flex rounded-full bg-[#D4AF37] px-7 py-3.5 text-sm font-semibold text-[#0B1B3A] transition hover:opacity-90"
            >
              Explore Volunteering
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
