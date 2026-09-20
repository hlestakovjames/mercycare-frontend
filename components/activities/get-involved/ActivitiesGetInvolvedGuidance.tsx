import Link from "next/link";

export default function ActivitiesGetInvolvedGuidance() {
  return (
    <section className="bg-slate-50">
      <div className="mx-auto max-w-4xl px-6 py-20 sm:px-8 sm:py-24">
        <div className="rounded-3xl bg-[#0B1B3A] p-8 text-white sm:p-10 lg:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#D4AF37]">
            Ready to participate?
          </p>

          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            Let&apos;s find a meaningful way to connect.
          </h2>

          <p className="mt-5 leading-8 text-slate-200">
            Activities and participation opportunities may change as MercyCare
            develops its programmes and community initiatives. Contact us to
            discuss your interests, skills, organisation or community needs.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-[#D4AF37] px-7 py-3.5 text-sm font-semibold text-[#0B1B3A] transition hover:opacity-90"
            >
              Contact MercyCare
            </Link>

            <Link
              href="/activities"
              className="rounded-full border border-white/25 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              View Activities
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
