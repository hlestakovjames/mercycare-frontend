import Link from "next/link";

export default function GetStartedCTA() {
  return (
    <section className="bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-6 text-center sm:px-8 lg:px-12">
        <div className="rounded-3xl bg-white px-7 py-12 shadow-sm ring-1 ring-slate-200 sm:px-12 sm:py-14">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0F766E]">
            Your Next Step
          </p>

          <h2 className="mt-3 text-3xl font-bold text-[#0B1B3A] sm:text-4xl">
            Ready to talk about home-based support?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-600">
            Start with a conversation. Tell us what you are looking for and
            let&apos;s understand the situation together.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-full bg-[#0F766E] px-7 py-3.5 text-sm font-semibold text-white transition hover:opacity-90"
            >
              Contact MercyCare
            </Link>

            <Link
              href="/services/our-services"
              className="rounded-full border border-[#0B1B3A]/15 px-7 py-3.5 text-sm font-semibold text-[#0B1B3A] transition hover:bg-slate-50"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
