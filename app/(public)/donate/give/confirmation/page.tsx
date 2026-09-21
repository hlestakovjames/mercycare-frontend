import Link from "next/link";

export default function DonationConfirmationPage() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-3xl px-6 py-16 lg:px-8 lg:py-24">
        <div className="rounded-3xl bg-slate-50 p-8 text-center ring-1 ring-slate-200 sm:p-12">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-cyan-100 text-2xl text-cyan-700">
            ✓
          </div>

          <p className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700">
            Donation Confirmation
          </p>

          <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Thank you for supporting MercyCare
          </h1>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-600">
            Your donation confirmation will appear here after secure payment
            processing is connected.
          </p>

          <Link
            href="/donate"
            className="mt-8 inline-flex rounded-full bg-cyan-700 px-6 py-3 text-sm font-semibold text-white hover:bg-cyan-800"
          >
            Back to Support MercyCare
          </Link>
        </div>
      </div>
    </section>
  );
}
