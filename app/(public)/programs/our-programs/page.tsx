import Link from "next/link";

const programs = [
  {
    number: "01",
    title: "Tuko Pamoja",
    subtitle: "Senior Wellness",
    description:
      "A community-centred initiative supporting older adults through wellness, connection, dignity, and practical care.",
    href: "/programs/tuko-pamoja",
  },
  {
    number: "02",
    title: "Mama na Mtoto",
    subtitle: "Maternal & Child Support",
    description:
      "An initiative supporting mothers and children through compassionate care, wellbeing support, health education, and community-based support.",
    href: "/programs/mama-na-mtoto",
  },
];

export default function OurProgramsPage() {
  return (
    <>
      <section className="bg-[#0B1B3A] py-20 text-white lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
              Our Programs
            </p>

            <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Initiatives that put care into action.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              MercyCare develops targeted initiatives that respond to health,
              wellness, family, and community needs while advancing our wider
              mission of compassionate and dignified care.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
              Featured Initiatives
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
              Programs designed around real needs.
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Our programs translate MercyCare's approach into practical
              initiatives that engage individuals, families, and communities.
            </p>
          </div>

          <div className="mt-12 grid gap-7 md:grid-cols-2">
            {programs.map((program) => (
              <article
                key={program.href}
                className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-50 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex aspect-[16/7] items-center justify-center bg-[#0B1B3A]">
                  <span className="text-7xl font-bold text-[#D4AF37]/30">
                    {program.number}
                  </span>
                </div>

                <div className="p-8 sm:p-10">
                  <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#D4AF37]">
                    {program.subtitle}
                  </p>

                  <h3 className="mt-3 text-2xl font-bold text-[#0B1B3A]">
                    {program.title}
                  </h3>

                  <p className="mt-5 leading-7 text-slate-600">
                    {program.description}
                  </p>

                  <Link
                    href={program.href}
                    className="mt-7 inline-flex items-center text-sm font-semibold text-[#0B1B3A] transition hover:text-[#D4AF37]"
                  >
                    Explore {program.title}
                    <span className="ml-2 transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
            From Programs to Impact
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
            Understanding how we deliver our programs.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-600">
            Our programs are supported by a structured approach to community
            engagement, implementation, monitoring, and follow-up.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/programs/how-we-work"
              className="rounded-full bg-[#0B1B3A] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#162d5c]"
            >
              How We Work
            </Link>

            <Link
              href="/programs/impact"
              className="rounded-full border-2 border-[#0B1B3A] px-7 py-3.5 text-sm font-semibold text-[#0B1B3A] transition hover:bg-[#0B1B3A] hover:text-white"
            >
              Explore Our Impact
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}