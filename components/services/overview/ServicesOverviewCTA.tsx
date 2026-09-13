import Link from "next/link";

export default function ServicesOverviewCTA() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-6 text-center sm:px-8 lg:px-12">
        <div className="rounded-3xl bg-[#0B1B3A] px-7 py-14 text-white sm:px-12 sm:py-16">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
            Begin With MercyCare
          </p>

          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Let&apos;s start with a conversation.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-200">
            Whether you are exploring support for yourself, a loved one or
            someone in your community, MercyCare can begin by understanding
            what you need.
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
