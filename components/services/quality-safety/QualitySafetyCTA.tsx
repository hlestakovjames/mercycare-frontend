import Link from "next/link";

export default function QualitySafetyCTA() {
  return (
    <section className="bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-6 text-center sm:px-8 lg:px-12">
        <div className="rounded-3xl bg-[#0B1B3A] px-7 py-12 text-white sm:px-12 sm:py-14">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
            Explore MercyCare
          </p>

          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Looking for thoughtful, responsible home-based support?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-200">
            Learn more about how MercyCare works, explore our services or
            contact us to begin a conversation about your circumstances.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/services/get-started"
              className="rounded-full bg-[#D4AF37] px-7 py-3.5 text-sm font-semibold text-[#0B1B3A] transition hover:opacity-90"
            >
              Get Started
            </Link>

            <Link
              href="/contact"
              className="rounded-full border border-white/30 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Contact MercyCare
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
