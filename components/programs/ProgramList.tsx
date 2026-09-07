import Link from "next/link";

const programs = [
  {
    number: "01",
    title: "Tuko Pamoja",
    subtitle: "Senior Wellness",
    description:
      "A community-centred initiative focused on supporting older adults through wellness, connection, dignity, and stronger community support.",
    href: "/programs/tuko-pamoja",
  },
  {
    number: "02",
    title: "Mama na Mtoto",
    subtitle: "Maternal & Child Support",
    description:
      "An initiative focused on supporting mothers, children, and families through education, wellbeing, preventive awareness, and community-based support.",
    href: "/programs/mama-na-mtoto",
  },
];

export default function ProgramList() {
  return (
    <section className="bg-[#0B1B3A] py-20 text-white lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
              Our Programs
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Initiatives designed to respond to real community needs.
            </h2>

            <p className="mt-5 leading-7 text-slate-300">
              Our programs translate MercyCare's commitment to compassionate,
              community-centred care into initiatives focused on specific areas
              of health and wellbeing.
            </p>
          </div>

          <Link
            href="/programs/our-programs"
            className="inline-flex shrink-0 items-center text-sm font-semibold text-white transition hover:text-[#D4AF37]"
          >
            View all programs
            <span className="ml-2">→</span>
          </Link>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {programs.map((program) => (
            <article
              key={program.number}
              className="group rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:-translate-y-1 hover:bg-white/10 lg:p-10"
            >
              <span className="text-sm font-bold text-[#D4AF37]">
                {program.number}
              </span>

              <p className="mt-6 text-sm font-semibold uppercase tracking-[0.16em] text-slate-400">
                {program.subtitle}
              </p>

              <h3 className="mt-2 text-3xl font-bold text-white">
                {program.title}
              </h3>

              <p className="mt-5 max-w-xl leading-7 text-slate-300">
                {program.description}
              </p>

              <Link
                href={program.href}
                className="mt-7 inline-flex items-center text-sm font-semibold text-white transition group-hover:text-[#D4AF37]"
              >
                Explore {program.title}
                <span className="ml-2 transition-transform group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}