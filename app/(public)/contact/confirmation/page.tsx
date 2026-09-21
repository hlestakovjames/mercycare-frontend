import Link from "next/link";

export default function ContactConfirmationPage() {
  return (
    <div className="min-h-[70vh] bg-slate-50 px-6 py-20 lg:px-8">
      <div className="mx-auto flex max-w-3xl justify-center">
        <div className="w-full rounded-[2rem] border border-slate-200 bg-white p-8 text-center shadow-xl shadow-slate-900/5 sm:p-12">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#1597c9]/10">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#1597c9] text-xl font-bold text-white">
              ✓
            </div>
          </div>

          <p className="mt-8 text-sm font-semibold uppercase tracking-[0.18em] text-[#6757d9]">
            Enquiry Received
          </p>

          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            Thank you for contacting MercyCare.
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-slate-600">
            Your enquiry has completed the current contact workflow. The
            MercyCare contact system will be connected to the backend
            notification and enquiry management service in the next stage of
            development.
          </p>

          <div className="mt-8 rounded-2xl bg-slate-50 p-5 text-left">
            <p className="text-sm font-semibold text-slate-900">
              Need to reach us directly?
            </p>

            <div className="mt-3 space-y-2 text-sm text-slate-600">
              <p>
                Email:{" "}
                <a
                  href="mailto:mercycare@villagerise.africa"
                  className="font-medium text-[#1597c9] hover:underline"
                >
                  mercycare@villagerise.africa
                </a>
              </p>

              <p>
                Phone:{" "}
                <a
                  href="tel:+254107631070"
                  className="font-medium text-[#6757d9] hover:underline"
                >
                  +254 107 631070
                </a>
              </p>

              <p>
                WhatsApp:{" "}
                <a
                  href="https://wa.me/254107631070"
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium text-[#1597c9] hover:underline"
                >
                  +254 107 631070
                </a>
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-[#1597c9] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#117fa9]"
            >
              Back to Contact
            </Link>

            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-[#1597c9] hover:text-[#1597c9]"
            >
              Return Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
