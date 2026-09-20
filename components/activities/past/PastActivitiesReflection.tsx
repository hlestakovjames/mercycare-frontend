import Link from "next/link";

export default function PastActivitiesReflection() {
  return (
    <section className="bg-slate-50">
      <div className="mx-auto max-w-4xl px-6 py-20 sm:px-8 sm:py-24">
        <div className="rounded-3xl border border-[#D4AF37]/30 bg-white p-8 shadow-sm sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#0F766E]">
            Learning from experience
          </p>

          <h2 className="mt-4 text-3xl font-bold text-[#0B1B3A] sm:text-4xl">
            Past activities can help shape future engagement.
          </h2>

          <p className="mt-5 leading-8 text-slate-600">
            Recording what happened, who participated and what was learned can
            help MercyCare improve future activities while recognising the
            people and communities who contributed to them.
          </p>

          <div className="mt-8">
            <Link
              href="/activities/get-involved"
              className="inline-flex rounded-full bg-[#0B1B3A] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#132952]"
            >
              Get Involved
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
