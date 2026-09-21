import Link from "next/link";
import { ArrowRight, Baby, HeartPulse } from "lucide-react";

const programs = [
  {
    number: "01",
    title: "Tuko Pamoja",
    subtitle: "Senior Wellness",
    description:
      "Supporting older adults through compassionate care, wellness activities, community connection, and practical support.",
    href: "/programs/tuko-pamoja",
    icon: HeartPulse,
  },
  {
    number: "02",
    title: "Mama na Mtoto",
    subtitle: "Maternal & Child Support",
    description:
      "Supporting mothers and children through community-centered initiatives focused on wellbeing, care, and healthy development.",
    href: "/programs/mama-na-mtoto",
    icon: Baby,
  },
];

export default function Programs() {
  return (
    <section className="bg-slate-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#0B1B3A]/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#1597c9]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#1597c9]" />
              Our Programs
            </div>

            <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-[#0B1B3A] sm:text-4xl lg:text-5xl">
              Initiatives designed around people and communities.
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
              Our programs focus on practical areas where compassionate action
              can support wellbeing, participation, and stronger communities.
            </p>
          </div>

          <Link
            href="/programs"
            className="inline-flex shrink-0 items-center gap-2 rounded-full border border-[#0B1B3A] bg-white px-5 py-3 text-sm font-bold text-[#0B1B3A] transition-all hover:bg-[#0B1B3A] hover:text-white focus:outline-none focus:ring-4 focus:ring-[#1597c9]/20"
          >
            View all programs
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {programs.map((program) => {
            const Icon = program.icon;

            return (
              <article
                key={program.href}
                className="group relative overflow-hidden rounded-[2rem] border border-slate-100 bg-white p-8 shadow-sm ring-1 ring-slate-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-10"
              >
                <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-[#1597c9]/5 blur-2xl transition group-hover:bg-[#D4AF37]/10" />

                <div className="relative">
                  <div className="flex items-start justify-between">
                    <span className="text-sm font-bold text-[#D4AF37]">
                      {program.number}
                    </span>

                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0B1B3A] text-white transition-all duration-200 group-hover:bg-[#1597c9]">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                  </div>

                  <h3 className="mt-9 text-2xl font-bold text-[#0B1B3A]">
                    {program.title}
                  </h3>

                  <p className="mt-1 text-sm font-bold text-[#1597c9]">
                    {program.subtitle}
                  </p>

                  <p className="mt-5 max-w-lg text-base leading-7 text-slate-600">
                    {program.description}
                  </p>

                  <Link
                    href={program.href}
                    className="mt-7 inline-flex min-h-11 items-center gap-2 rounded-full bg-[#0B1B3A] px-5 py-3 text-sm font-bold text-white transition-all hover:bg-[#1597c9] focus:outline-none focus:ring-4 focus:ring-[#1597c9]/20"
                  >
                    Explore program
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
