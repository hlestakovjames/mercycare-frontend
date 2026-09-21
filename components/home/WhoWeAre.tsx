import Link from "next/link";
import {
  ArrowRight,
  HeartHandshake,
  HouseHeart,
  UsersRound,
} from "lucide-react";

const focusAreas = [
  {
    icon: HeartHandshake,
    number: "01",
    title: "Compassionate care",
    description:
      "Putting dignity, empathy, and the needs of people at the centre of our work.",
  },
  {
    icon: UsersRound,
    number: "02",
    title: "Community connection",
    description:
      "Creating opportunities for people, families, organisations, and communities to work together.",
  },
  {
    icon: HouseHeart,
    number: "03",
    title: "Practical support",
    description:
      "Connecting people with services, programs, resources, and meaningful support.",
  },
];

export default function WhoWeAre() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-[#0B1B3A]/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#1597c9]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#1597c9]" />
              Who We Are
            </div>

            <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-[#0B1B3A] sm:text-4xl lg:text-5xl">
              Care begins with people and grows through community.
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-600">
              MercyCare exists to support individuals, families, and
              communities through compassionate care, practical initiatives,
              meaningful partnerships, and opportunities to participate.
            </p>

            <p className="mt-4 text-base leading-8 text-slate-600">
              Our work brings together care, wellness, community engagement,
              programs, services, and partnerships around one simple
              commitment: helping people experience greater dignity and
              connection.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/about"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[#0B1B3A] px-6 py-3 text-sm font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#1597c9] focus:outline-none focus:ring-4 focus:ring-[#1597c9]/20"
              >
                Discover MercyCare
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>

              <Link
                href="/services"
                className="inline-flex min-h-11 items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-bold text-[#0B1B3A] transition-all duration-200 hover:border-[#0B1B3A] hover:bg-slate-50 focus:outline-none focus:ring-4 focus:ring-[#1597c9]/20"
              >
                Explore Services
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-[#D4AF37]/10" />
            <div className="absolute -bottom-5 -left-5 h-20 w-20 rounded-full border border-[#1597c9]/20" />

            <div className="relative grid gap-4 sm:grid-cols-2">
              {focusAreas.map((area, index) => {
                const Icon = area.icon;

                return (
                  <article
                    key={area.number}
                    className={`group rounded-[1.75rem] border border-slate-100 bg-white p-7 shadow-sm ring-1 ring-slate-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                      index === 2 ? "sm:col-span-2" : ""
                    }`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0B1B3A] text-[#D4AF37] transition-colors duration-200 group-hover:bg-[#1597c9] group-hover:text-white">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </span>

                      <span className="text-sm font-bold text-slate-300">
                        {area.number}
                      </span>
                    </div>

                    <h3 className="mt-7 text-xl font-bold text-[#0B1B3A]">
                      {area.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-slate-600">
                      {area.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-4 border-t border-slate-100 pt-8 sm:grid-cols-3">
          <Link
            href="/programs"
            className="group rounded-2xl bg-slate-50 p-5 transition hover:bg-[#0B1B3A]"
          >
            <p className="text-xs font-bold uppercase tracking-wider text-[#D4AF37]">
              Programs
            </p>
            <p className="mt-2 text-sm font-semibold text-[#0B1B3A] group-hover:text-white">
              Explore our community programs →
            </p>
          </Link>

          <Link
            href="/projects"
            className="group rounded-2xl bg-slate-50 p-5 transition hover:bg-[#0B1B3A]"
          >
            <p className="text-xs font-bold uppercase tracking-wider text-[#D4AF37]">
              Projects
            </p>
            <p className="mt-2 text-sm font-semibold text-[#0B1B3A] group-hover:text-white">
              See how our projects connect →
            </p>
          </Link>

          <Link
            href="/contact"
            className="group rounded-2xl bg-slate-50 p-5 transition hover:bg-[#0B1B3A]"
          >
            <p className="text-xs font-bold uppercase tracking-wider text-[#D4AF37]">
              Connect
            </p>
            <p className="mt-2 text-sm font-semibold text-[#0B1B3A] group-hover:text-white">
              Talk to MercyCare →
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
}
