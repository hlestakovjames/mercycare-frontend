const supportAreas = [
  "Financial contributions",
  "In-kind resources",
  "Professional expertise",
  "Health education and technical knowledge",
  "Community networks and connections",
  "Equipment or appropriate supplies",
  "Research and knowledge sharing",
  "Communications and awareness support",
];

export default function ProjectSupport() {
  return (
    <section className="bg-[#0B1B3A] py-20 text-white lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
              Supporting Projects
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Contributions can take many forms.
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-300">
              The most useful form of support depends on the needs of a
              particular initiative and the resources available.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {supportAreas.map((area) => (
              <div
                key={area}
                className="rounded-xl border border-white/10 bg-white/5 p-5"
              >
                <div className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#D4AF37]" />

                  <span className="text-sm leading-7 text-slate-200">
                    {area}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
