import Link from "next/link";

export default function PartnershipCTA() {
  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
          Work With MercyCare
        </p>

        <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
          Have an idea for collaboration?
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600">
          Whether you represent an organization, professional group, business,
          institution, or community initiative, we welcome relevant
          conversations about responsible collaboration.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/contact"
            className="rounded-full bg-[#0B1B3A] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#162d5c]"
          >
            Contact MercyCare
          </Link>

          <Link
            href="/projects/get-involved"
            className="rounded-full border border-slate-300 bg-white px-7 py-3 text-sm font-semibold text-[#0B1B3A] transition hover:border-[#0B1B3A]"
          >
            Get Involved
          </Link>
        </div>
      </div>
    </section>
  );
}
