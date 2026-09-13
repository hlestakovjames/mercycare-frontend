import Link from "next/link";

export default function CommunityEventsCTA() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-4xl px-6 text-center sm:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
          Be part of the community
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
          Explore upcoming events or learn how you can support MercyCare&apos;s
          community engagement work.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="/events/upcoming"
            className="rounded-full bg-[#0F766E] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#0B625D]"
          >
            Upcoming Events
          </Link>

          <Link
            href="/events/get-involved"
            className="rounded-full border border-[#0B1B3A] px-7 py-3.5 text-sm font-semibold text-[#0B1B3A] transition hover:bg-[#0B1B3A] hover:text-white"
          >
            Get Involved
          </Link>
        </div>
      </div>
    </section>
  );
}
