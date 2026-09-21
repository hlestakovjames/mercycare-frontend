import Link from "next/link";

const archiveYears = [
  {
    year: "2026",
    description:
      "Current MercyCare news and public stories available in the website archive.",
    href: "/news/latest",
  },
];

export default function NewsArchiveYears() {
  return (
    <section className="bg-slate-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
            By year
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
            Archive years
          </h2>

          <p className="mt-5 leading-7 text-slate-600">
            The archive will expand as MercyCare publishes more confirmed
            stories and updates.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {archiveYears.map((archive) => (
            <Link
              key={archive.year}
              href={archive.href}
              className="group rounded-[2rem] border border-slate-100 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:border-[#D4AF37]"
            >
              <p className="text-4xl font-bold text-[#0B1B3A]">
                {archive.year}
              </p>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                {archive.description}
              </p>

              <span className="mt-6 inline-flex text-sm font-semibold text-[#0B1B3A] transition group-hover:text-[#D4AF37]">
                View current archive →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
