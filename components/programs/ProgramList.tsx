import Link from "next/link";

const programs = [
  {
    number: "01",
    title: "Tuko Pamoja",
    subtitle: "Senior Wellness",
    description:
      "A community-centered initiative focused on supporting older adults through wellness, connection, dignity, and practical care.",
    href: "/programs/tuko-pamoja",
  },
  {
    number: "02",
    title: "Mama na Mtoto",
    subtitle: "Maternal & Child Support",
    description:
      "An initiative focused on supporting mothers and children through compassionate care, wellbeing, and community-based support.",
    href: "/programs/mama-na-mtoto",
  },
];

export default function ProgramList() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
            Our Focus
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
            Initiatives making care more accessible.
          </h2>

          <p className="mt-5 leading-7 text-slate-600">
            Our programs are designed to bring compassionate support closer to
            the people and communities who need it.
          </p>
        </div>

        <div className="mt-12 grid gap-7 md:grid-cols-2">
          {programs.map((program) => (
            <article
              key={program.href}
              className="group overflow-hidden rounded-[2rem] border border-slate-100 bg-slate-50 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="aspect-[16/8] bg-[#0B1B3A]">
                <div className="flex h-full items-center justify-center bg-gradient-to-br from-[#0B1B3A] to-[#162d5c]">
                  <span className="text-6xl font-bold text-[#D4AF37]/30">
                    {program.number}
                  </span>
                </div>
              </div>

              <div className="p-8 sm:p-10">
                <p className="text-sm font-semibold uppercase tracking-wider text-[#D4AF37]">
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
                  Explore this program
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
  );
}