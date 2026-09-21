import Link from "next/link";
import { ArrowRight, HeartHandshake, Target, UsersRound } from "lucide-react";

const impactStats = [
  {
    value: "01",
    label: "Community Programs",
    description: "Initiatives designed around real community needs.",
    icon: HeartHandshake,
  },
  {
    value: "02",
    label: "Core Focus Areas",
    description: "Supporting seniors, mothers, children, families, and communities.",
    icon: Target,
  },
  {
    value: "∞",
    label: "Possibilities",
    description: "Building meaningful partnerships for sustainable impact.",
    icon: UsersRound,
  },
];

export default function Impact() {
  return (
    <section className="relative overflow-hidden bg-[#0B1B3A] py-20 text-white lg:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_15%,rgba(21,151,201,0.18),transparent_32%),radial-gradient(circle_at_15%_85%,rgba(212,175,55,0.12),transparent_30%)]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#D4AF37]">
              Our Impact
            </div>

            <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Every act of care can create a lasting difference.
            </h2>

            <p className="mt-5 max-w-xl leading-8 text-slate-300">
              MercyCare brings people, resources, programs, and community
              initiatives together to turn compassion into meaningful action.
            </p>

            <Link
              href="/projects/impact"
              className="mt-8 inline-flex min-h-11 items-center gap-2 rounded-full bg-[#D4AF37] px-6 py-3 text-sm font-bold text-[#0B1B3A] transition-all hover:-translate-y-0.5 hover:bg-white focus:outline-none focus:ring-4 focus:ring-[#D4AF37]/30"
            >
              Explore our impact
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {impactStats.map((stat) => {
              const Icon = stat.icon;

              return (
                <div
                  key={stat.label}
                  className="rounded-3xl border border-white/10 bg-white/[0.05] p-6 backdrop-blur-sm transition hover:-translate-y-1 hover:bg-white/[0.08]"
                >
                  <div className="flex items-center justify-between">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#D4AF37]/10 text-[#D4AF37]">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>

                    <span className="text-2xl font-bold text-[#D4AF37]">
                      {stat.value}
                    </span>
                  </div>

                  <h3 className="mt-7 font-bold text-white">{stat.label}</h3>

                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    {stat.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
