import Link from "next/link";

export default function ChronicCareCTA() {
  return (
    <section className="bg-[#0B1B3A] py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#D4AF37]">
          Chronic Care Support
        </p>

        <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Build a more supported approach to ongoing care.
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-300">
          Every long-term care situation is different. Talk to MercyCare about
          your circumstances and the type of home-based support that may be
          appropriate.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/services/get-started"
            className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#0B1B3A] transition-colors hover:bg-slate-100"
          >
            Get Started
          </Link>

          <Link
            href="/contact"
            className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            Contact MercyCare
          </Link>
        </div>
      </div>
    </section>
  );
}
