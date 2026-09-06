export default function ServicesHero() {
  return (
    <section className="relative overflow-hidden bg-[#0B1B3A] py-24 sm:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.16),transparent_35%)]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
            MercyCare Services
          </p>

          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Compassionate care, wherever you call home.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Explore MercyCare's home health, rehabilitation, wellness and
            supportive care services designed around the needs of individuals,
            families and organisations.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="#service-directory"
              className="inline-flex items-center justify-center rounded-full bg-[#D4AF37] px-6 py-3 text-sm font-semibold text-[#0B1B3A] transition hover:bg-white"
            >
              Explore Services
            </a>

            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Speak With MercyCare
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}