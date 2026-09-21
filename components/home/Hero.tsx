import Link from "next/link";
import { ArrowRight, HeartHandshake, ShieldCheck, Users } from "lucide-react";

const heroHighlights = [
  {
    icon: HeartHandshake,
    value: "Compassion-led",
    label: "Care and community support",
  },
  {
    icon: Users,
    value: "Community-focused",
    label: "People and families at the centre",
  },
  {
    icon: ShieldCheck,
    value: "Built for connection",
    label: "Programs, services and partnerships",
  },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0B1B3A]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_15%,rgba(21,151,201,0.24),transparent_30%),radial-gradient(circle_at_15%_85%,rgba(212,175,55,0.14),transparent_32%)]" />

      <div className="absolute -right-32 top-20 h-80 w-80 rounded-full border border-white/10" />
      <div className="absolute -bottom-40 left-1/3 h-96 w-96 rounded-full border border-white/5" />

      <div className="relative mx-auto max-w-7xl px-6 pb-16 pt-20 sm:pb-20 sm:pt-24 lg:px-8 lg:pb-24 lg:pt-28">
        <div className="grid items-center gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#D4AF37] backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37]" />
              Where Compassion Meets Dignity
            </div>

            <h1 className="mt-7 text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Caring for people.
              <span className="mt-2 block text-[#D4AF37]">
                Strengthening communities.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              MercyCare brings compassionate care, community programs,
              partnerships, and practical support together to help individuals,
              families, and communities thrive.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/services"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#D4AF37] px-7 py-3.5 text-sm font-bold text-[#0B1B3A] shadow-lg shadow-black/10 transition-all duration-200 hover:-translate-y-0.5 hover:bg-white hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-[#D4AF37]/30"
              >
                Explore Our Services
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>

              <Link
                href="/programs"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/30 bg-white/5 px-7 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-white hover:bg-white hover:text-[#0B1B3A] focus:outline-none focus:ring-4 focus:ring-white/20"
              >
                Discover Our Programs
              </Link>
            </div>

            <div className="mt-10 grid max-w-2xl gap-4 border-t border-white/10 pt-7 sm:grid-cols-3">
              {heroHighlights.map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.value} className="flex items-start gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[#D4AF37]">
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </span>

                    <div>
                      <p className="text-sm font-semibold text-white">
                        {item.value}
                      </p>
                      <p className="mt-1 text-xs leading-5 text-slate-400">
                        {item.label}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl lg:ml-auto">
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.06] p-3 shadow-2xl shadow-black/20 backdrop-blur-sm">
              <div className="relative min-h-[420px] overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-[#1597c9]/20 via-white/[0.04] to-[#D4AF37]/15">
                <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#1597c9]/15 blur-2xl" />
                <div className="absolute -bottom-20 -left-16 h-56 w-56 rounded-full bg-[#D4AF37]/10 blur-2xl" />

                <div className="relative flex min-h-[420px] flex-col justify-between p-7 sm:p-9">
                  <div className="flex items-center justify-between">
                    <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-semibold text-slate-200">
                      MercyCare
                    </span>

                    <span className="text-xs font-medium text-slate-400">
                      Wellness With Dignity
                    </span>
                  </div>

                  <div>
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-[#D4AF37]/30 bg-[#D4AF37]/10 text-[#D4AF37] shadow-lg">
                      <HeartHandshake
                        className="h-8 w-8"
                        strokeWidth={1.8}
                        aria-hidden="true"
                      />
                    </div>

                    <p className="mt-7 text-2xl font-bold leading-tight text-white sm:text-3xl">
                      Compassion becomes stronger when communities work
                      together.
                    </p>

                    <p className="mt-4 max-w-md text-sm leading-6 text-slate-300">
                      From care and wellness to community initiatives,
                      MercyCare creates pathways for people to connect,
                      participate, and make a difference.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <Link
                      href="/volunteer"
                      className="inline-flex min-h-11 items-center justify-center rounded-xl bg-white px-4 py-3 text-sm font-bold text-[#0B1B3A] transition hover:bg-[#D4AF37] focus:outline-none focus:ring-4 focus:ring-white/20"
                    >
                      Get Involved
                    </Link>

                    <Link
                      href="/contact"
                      className="inline-flex min-h-11 items-center justify-center rounded-xl border border-white/25 bg-white/5 px-4 py-3 text-sm font-bold text-white transition hover:border-white hover:bg-white hover:text-[#0B1B3A] focus:outline-none focus:ring-4 focus:ring-white/20"
                    >
                      Talk to Us
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-5 -left-5 hidden h-24 w-24 rounded-full border border-[#D4AF37]/25 sm:block" />
            <div className="absolute -right-4 -top-4 h-16 w-16 rounded-full bg-[#1597c9]/10" />
          </div>
        </div>
      </div>
    </section>
  );
}
