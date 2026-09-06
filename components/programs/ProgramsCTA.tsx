import Link from "next/link";

export default function ProgramsCTA() {
  return (
    <section className="bg-[#D4AF37] py-20 lg:py-24">
      <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
          Help us extend the reach of MercyCare.
        </h2>

        <p className="mx-auto mt-5 max-w-2xl leading-7 text-[#0B1B3A]/75">
          You can support our programs by volunteering, partnering with us, or
          making a contribution toward our community initiatives.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="/volunteer"
            className="rounded-full bg-[#0B1B3A] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white hover:text-[#0B1B3A]"
          >
            Volunteer
          </Link>

          <Link
            href="/donate"
            className="rounded-full border-2 border-[#0B1B3A] px-7 py-3.5 text-sm font-semibold text-[#0B1B3A] transition hover:bg-[#0B1B3A] hover:text-white"
          >
            Donate
          </Link>
        </div>
      </div>
    </section>
  );
}