import Link from "next/link";

export default function ContactPartnershipsPage() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-4xl px-6 py-16 lg:px-8 lg:py-24">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-600">
          Contact MercyCare
        </p>

        <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          Partnerships
        </h1>

        <p className="mt-6 text-lg leading-8 text-slate-600">
          MercyCare welcomes conversations with organisations, community
          groups and other partners interested in supporting care, wellness and
          community initiatives.
        </p>

        <div className="mt-10 rounded-2xl border border-slate-200 p-6">
          <h2 className="text-xl font-semibold text-slate-900">
            Start a Partnership Conversation
          </h2>

          <p className="mt-3 leading-7 text-slate-600">
            Share your organisation's area of interest and the type of
            collaboration you would like to explore.
          </p>

          <Link
            href="/contact/general-enquiries"
            className="mt-5 inline-flex rounded-full bg-cyan-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-cyan-700"
          >
            Contact MercyCare
          </Link>
        </div>
      </div>
    </section>
  );
}
