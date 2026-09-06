import Link from "next/link";

export default function Partnerships() {
  return (
    <section
      id="partnerships"
      className="bg-white py-20 lg:py-28"
    >
      <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
          Partnerships
        </p>

        <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
          Change becomes stronger when we work together.
        </h2>

        <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-600">
          MercyCare welcomes partnerships with organizations, businesses,
          institutions, community groups, professionals, and individuals who
          share our commitment to creating positive community impact.
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