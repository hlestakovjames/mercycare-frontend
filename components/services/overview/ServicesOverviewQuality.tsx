import Link from "next/link";

const qualityItems = [
  "Dignity and respect",
  "Clear communication",
  "Appropriate scope of support",
  "Family involvement",
  "Recognition of changing needs",
  "Continuous learning and improvement",
];

export default function ServicesOverviewQuality() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0F766E]">
              Quality &amp; Safety
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[#0B1B3A] sm:text-4xl">
              Responsible care requires clear standards and boundaries.
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              We approach quality through dignity, communication, appropriate
              scope, family partnership and responsible escalation when
              professional healthcare attention is needed.
            </p>

            <Link
              href="/services/quality-safety"
              className="mt-7 inline-flex rounded-full bg-[#0F766E] px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
            >
              Explore Quality &amp; Safety
            </Link>
          </div>

          <div className="rounded-3xl bg-slate-50 p-8 sm:p-10">
            <ul className="space-y-4">
              {qualityItems.map((item) => (
                <li key={item} className="flex items-start gap-4">
                  <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[#D4AF37]" />

                  <span className="leading-7 text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
