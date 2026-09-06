const points = [
  "Professional and compassionate approach",
  "Personalised care plans",
  "Family communication and progress updates",
  "Integrated support across different care needs",
  "Focus on dignity, privacy and independence",
  "Ongoing review of changing care requirements",
];

export default function WhyMercyCare() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
            Why MercyCare
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
            Nursing care with dignity at its centre
          </h2>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {points.map((point) => (
              <div key={point} className="flex items-start gap-3">
                <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#D4AF37] text-xs font-bold text-[#0B1B3A]">
                  ✓
                </span>

                <p className="text-sm leading-7 text-slate-600">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}