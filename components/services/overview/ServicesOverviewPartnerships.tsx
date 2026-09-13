import Link from "next/link";

export default function ServicesOverviewPartnerships() {
  return (
    <section className="bg-[#0B1B3A] py-20 text-white sm:py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
              Partnerships
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Support becomes stronger through collaboration.
            </h2>
          </div>

          <div>
            <p className="leading-8 text-slate-200">
              Families, caregivers, healthcare professionals and community
              organizations can all play complementary roles. MercyCare values
              partnerships that create clarity, strengthen support and respect
              professional boundaries.
            </p>

            <Link
              href="/services/partnerships"
              className="mt-7 inline-flex rounded-full bg-[#D4AF37] px-6 py-3 text-sm font-semibold text-[#0B1B3A] transition hover:opacity-90"
            >
              Explore Partnerships
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
