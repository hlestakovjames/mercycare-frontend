import Link from "next/link";

export default function CommunityOutreachParticipation() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-24 lg:px-10">
        <div className="rounded-3xl bg-[#0B1B3A] px-7 py-10 sm:px-10 lg:px-14 lg:py-14">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#D4AF37]">
                Be Part of the Work
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Communities are stronger when people participate.
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-200">
                Volunteers, community members and organizations can contribute
                in different ways depending on their interests, availability
                and the needs of a particular activity.
              </p>
            </div>

            <Link
              href="/activities/get-involved"
              className="inline-flex w-fit rounded-full bg-[#D4AF37] px-6 py-3 text-sm font-semibold text-[#0B1B3A] transition hover:opacity-90"
            >
              Get Involved
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
