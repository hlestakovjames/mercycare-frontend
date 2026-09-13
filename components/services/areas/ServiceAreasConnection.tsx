import Link from "next/link";

const connections = [
  "Understand the individual's needs and circumstances",
  "Identify appropriate areas of support",
  "Coordinate with families and caregivers",
  "Deliver support with dignity and consistency",
  "Review needs as circumstances change",
];

export default function ServiceAreasConnection() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#0F766E]">
              From Need to Support
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
              Turning service areas into practical care
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
              Service areas provide the framework. Individual services provide
              the practical support. MercyCare connects the two around the
              needs of the person and family.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-7 sm:p-9">
            <ol className="space-y-5">
              {connections.map((item, index) => (
                <li key={item} className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#0B1B3A] text-xs font-bold text-white">
                    {index + 1}
                  </span>

                  <span className="pt-1 text-sm font-medium leading-6 text-slate-700">
                    {item}
                  </span>
                </li>
              ))}
            </ol>

            <Link
              href="/services/our-services"
              className="mt-8 inline-flex rounded-full bg-[#0B1B3A] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#162d5c]"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
