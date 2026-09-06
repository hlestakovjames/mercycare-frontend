import Link from "next/link";

export default function GalleryCTA() {
  return (
    <section className="bg-slate-50 py-20 lg:py-24">
      <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
          Be Part of the Story
        </p>

        <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
          There are many ways to make an impact.
        </h2>

        <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-600">
          Join MercyCare as a volunteer, partner, supporter, or community
          member and help us create more moments worth sharing.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="/volunteer"
            className="rounded-full bg-[#0B1B3A] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#D4AF37] hover:text-[#0B1B3A]"
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