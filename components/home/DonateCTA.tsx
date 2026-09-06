import Link from "next/link";

export default function DonateCTA() {
  return (
    <section className="bg-[#D4AF37] py-20 lg:py-24">
      <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#0B1B3A]/70">
          Support MercyCare
        </p>

        <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#0B1B3A] sm:text-5xl">
          Help us turn compassion into action.
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-[#0B1B3A]/75">
          Your support can help MercyCare strengthen community programs,
          support vulnerable people, and create opportunities for lasting
          positive change.
        </p>

        <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="/donate"
            className="inline-flex items-center justify-center rounded-full bg-[#0B1B3A] px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-white hover:text-[#0B1B3A]"
          >
            Donate to MercyCare
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full border-2 border-[#0B1B3A] px-8 py-3.5 text-sm font-semibold text-[#0B1B3A] transition hover:bg-[#0B1B3A] hover:text-white"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}