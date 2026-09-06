export default function ProjectHero() {
  return (
    <section className="relative overflow-hidden bg-[#0B1B3A]">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B1B3A] via-[#102653] to-[#0B1B3A]" />

      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-28 lg:px-8 lg:py-32">
        <div className="max-w-4xl">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
            MercyCare Project
          </p>

          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Tuko Pamoja
          </h1>

          <p className="mt-5 text-xl font-medium text-slate-200 sm:text-2xl">
            Senior Wellness & Community Care
          </p>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            Tuko Pamoja is a MercyCare community initiative focused on
            promoting healthy ageing, dignity, companionship, and improved
            quality of life for older adults and their families.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="#overview"
              className="inline-flex items-center justify-center rounded-full bg-[#D4AF37] px-6 py-3 text-sm font-semibold text-[#0B1B3A] transition hover:bg-[#e3c45a]"
            >
              Explore the Project
            </a>

            <a
              href="/volunteer"
              className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Get Involved
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}