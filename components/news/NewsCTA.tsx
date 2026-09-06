import Link from "next/link";

export default function NewsCTA() {
  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
          Stay Connected
        </p>

        <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
          Follow the MercyCare journey.
        </h2>

        <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-600">
          Keep up with our programs, activities, announcements, and community
          stories as MercyCare continues to grow.
        </p>

        <Link
          href="/volunteer"
          className="mt-8 inline-flex rounded-full bg-[#0B1B3A] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#D4AF37] hover:text-[#0B1B3A]"
        >
          Get involved
        </Link>
      </div>
    </section>
  );
}