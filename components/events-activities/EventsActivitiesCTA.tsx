import Link from "next/link";

export default function EventsActivitiesCTA() {
  return (
    <section className="bg-[#0B1B3A] py-20">
      <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
          Get Involved
        </p>

        <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
          Be part of the MercyCare journey
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/75">
          Whether you volunteer your time, support a community initiative,
          or contribute to our work, there are many ways to help MercyCare
          create lasting impact.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="/volunteer"
            className="rounded-full bg-[#D4AF37] px-7 py-3 text-sm font-semibold text-[#0B1B3A] transition hover:bg-[#e1c45a]"
          >
            Volunteer With Us
          </Link>

          <Link
            href="/donate"
            className="rounded-full border border-white/30 px-7 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Support MercyCare
          </Link>
        </div>
      </div>
    </section>
  );
}