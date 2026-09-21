import Link from "next/link";

export default function ReferralsPage() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-4xl px-6 py-16 lg:px-8 lg:py-24">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-600">
          Contact MercyCare
        </p>

        <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          Referrals & Care Enquiries
        </h1>

        <p className="mt-6 text-lg leading-8 text-slate-600">
          This pathway is intended for care-related enquiries and future
          referral workflows.
        </p>

        <div className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-6">
          <p className="leading-7 text-slate-600">
            Referral handling will be connected to MercyCare's backend and
            communication workflow in a future implementation.
          </p>

          <Link
            href="/services/get-started"
            className="mt-5 inline-flex font-semibold text-cyan-700"
          >
            Explore how to get started →
          </Link>
        </div>
      </div>
    </section>
  );
}
