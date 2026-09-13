import Link from "next/link";

export default function EventsOverviewCTA() {
  return (
    <section className="bg-[#0B1B3A] py-20 sm:py-24">
      <div className="mx-auto max-w-4xl px-6 text-center sm:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#D4AF37]">
          Stay Connected
        </p>

        <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Be part of the MercyCare community
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-200">
          Explore upcoming events, discover opportunities to participate and
          connect with MercyCare for more information.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="/events/upcoming"
            className="inline-flex items-center justify-center rounded-full bg-[#D4AF37] px-8 py-4 text-sm font-semibold text-[#0B1B3A] transition hover:bg-[#e3c65c]"
          >
            Upcoming Events
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full border border-white/30 px-8 py-4 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
          >
            Contact MercyCare
          </Link>
        </div>
      </div>
    </section>
  );
}
