import Link from "next/link";

export default function AwarenessEducationParticipation() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-24 lg:px-10">
        <div className="rounded-3xl bg-[#0B1B3A] p-8 text-white sm:p-10 lg:p-14">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#D4AF37]">
                Participate
              </p>

              <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
                Learning is stronger when communities participate.
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-200 sm:text-lg">
                You can participate by attending a MercyCare activity,
                sharing a relevant community need, helping create a respectful
                learning environment or connecting us with organisations that
                can contribute appropriate knowledge and support.
              </p>
            </div>

            <Link
              href="/activities/get-involved"
              className="inline-flex rounded-full bg-[#D4AF37] px-7 py-3.5 text-sm font-semibold text-[#0B1B3A] transition hover:opacity-90"
            >
              Explore Ways to Help
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
