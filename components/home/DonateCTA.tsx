import Link from "next/link";
import { ArrowRight, HeartHandshake } from "lucide-react";

export default function DonateCTA() {
  return (
    <section className="relative overflow-hidden bg-[#D4AF37] py-20 lg:py-24">
      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full border border-[#0B1B3A]/10" />
      <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full border border-[#0B1B3A]/10" />

      <div className="relative mx-auto max-w-5xl px-6 text-center lg:px-8">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0B1B3A] text-[#D4AF37] shadow-lg">
          <HeartHandshake className="h-7 w-7" aria-hidden="true" />
        </div>

        <p className="mt-6 text-sm font-bold uppercase tracking-[0.2em] text-[#0B1B3A]/70">
          Support MercyCare
        </p>

        <h2 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-[#0B1B3A] sm:text-5xl">
          Help us turn compassion into action.
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-[#0B1B3A]/75">
          Your support can help MercyCare strengthen community programs,
          support people and families, and create opportunities for lasting
          positive change.
        </p>

        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/donate/give"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#0B1B3A] px-8 py-3.5 text-sm font-bold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:bg-white hover:text-[#0B1B3A] focus:outline-none focus:ring-4 focus:ring-[#0B1B3A]/20"
          >
            Donate to MercyCare
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>

          <Link
            href="/donate/ways-to-give"
            className="inline-flex min-h-12 items-center justify-center rounded-full border-2 border-[#0B1B3A] bg-transparent px-8 py-3.5 text-sm font-bold text-[#0B1B3A] transition-all hover:bg-[#0B1B3A] hover:text-white focus:outline-none focus:ring-4 focus:ring-[#0B1B3A]/20"
          >
            Ways to Give
          </Link>

          <Link
            href="/contact"
            className="inline-flex min-h-12 items-center justify-center rounded-full border-2 border-[#0B1B3A]/30 bg-white/20 px-8 py-3.5 text-sm font-bold text-[#0B1B3A] transition-all hover:border-[#0B1B3A] hover:bg-white hover:text-[#0B1B3A] focus:outline-none focus:ring-4 focus:ring-[#0B1B3A]/20"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
