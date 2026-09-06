import Link from "next/link";

export default function VolunteerCTA() {
  return (
    <section className="bg-[#0B1B3A] py-20 text-white lg:py-24">
      <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
          Together
        </p>

        <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
          Every contribution matters.
        </h2>

        <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-300">
          Whether you have an hour, a skill, or a willingness to serve, your
          contribution can help MercyCare reach more people.
        </p>

        <Link
          href="/donate"
          className="mt-8 inline-flex rounded-full bg-[#D4AF37] px-7 py-3.5 text-sm font-semibold text-[#0B1B3A] transition hover:bg-white"
        >
          Support MercyCare
        </Link>
      </div>
    </section>
  );
}