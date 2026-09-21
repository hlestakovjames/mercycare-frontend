import Link from "next/link";

export default function CampaignsPage() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700">
            Support MercyCare
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Fundraising & Campaigns
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Discover MercyCare fundraising initiatives and campaigns that bring
            people together around specific community needs and priorities.
          </p>
        </div>

        <div className="mt-12 rounded-3xl border border-dashed border-slate-300 bg-slate-50 p-10 text-center">
          <h2 className="text-2xl font-semibold text-slate-900">
            Campaigns will appear here
          </h2>

          <p className="mx-auto mt-3 max-w-2xl leading-7 text-slate-600">
            This space will showcase active and upcoming MercyCare fundraising
            campaigns as they are established.
          </p>
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/contact"
            className="inline-flex rounded-full bg-cyan-700 px-6 py-3 text-sm font-semibold text-white hover:bg-cyan-800"
          >
            Contact MercyCare
          </Link>
        </div>
      </div>
    </section>
  );
}
