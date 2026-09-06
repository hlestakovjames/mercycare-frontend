import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0B1B3A]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(212,175,55,0.18),transparent_35%)]" />

      <div className="relative mx-auto grid min-h-[620px] max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:px-8">
        <div className="max-w-2xl">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
            Compassion. Community. Impact.
          </p>

          <h1 className="text-5xl font-bold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
            Caring for communities.
            <span className="block text-[#D4AF37]">
              Creating lasting impact.
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-8 text-slate-300">
            MercyCare is building stronger communities through compassionate
            programs, meaningful partnerships, and accessible services.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/programs"
              className="inline-flex items-center justify-center rounded-full bg-[#D4AF37] px-7 py-3.5 text-sm font-semibold text-[#0B1B3A] transition hover:bg-white"
            >
              Explore Our Programs
            </Link>

            <Link
              href="/donate"
              className="inline-flex items-center justify-center rounded-full border border-white/30 px-7 py-3.5 text-sm font-semibold text-white transition hover:border-white hover:bg-white hover:text-[#0B1B3A]"
            >
              Support MercyCare
            </Link>
          </div>
        </div>

        <div className="relative hidden lg:block">
          <div className="aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-2xl">
            <div className="flex h-full items-center justify-center bg-gradient-to-br from-white/10 via-white/5 to-[#D4AF37]/10">
              <div className="px-10 text-center">
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/10">
                  <span className="text-3xl text-[#D4AF37]">♥</span>
                </div>

                <p className="text-xl font-semibold text-white">
                  Building healthier, stronger communities.
                </p>

                <p className="mt-3 text-sm leading-6 text-slate-300">
                  Together, we can create meaningful and lasting change.
                </p>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-6 -left-6 h-28 w-28 rounded-full border border-[#D4AF37]/30" />
          <div className="absolute -right-5 -top-5 h-20 w-20 rounded-full bg-[#D4AF37]/10" />
        </div>
      </div>
    </section>
  );
}