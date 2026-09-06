import Link from "next/link";

export default function ProgramCTA() {
  return (
    <section className="bg-[#D4AF37] py-20 lg:py-24">
      <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#0B1B3A]/70">
          Support Tuko Pamoja
        </p>

        <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
          Together, we can make senior wellbeing a community priority.
        </h2>

        <p className="mx-auto mt-5 max-w-2xl leading-7 text-[#0B1B3A]/75">
          Support this initiative by volunteering, partnering with MercyCare,
          or contributing toward our community programs.
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
            Support MercyCare
          </Link>
        </div>
      </div>
    </section>
  );
}