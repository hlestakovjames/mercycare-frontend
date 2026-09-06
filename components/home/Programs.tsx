import Link from "next/link";

const programs = [
  {
    number: "01",
    title: "Tuko Pamoja",
    subtitle: "Senior Wellness",
    description:
      "Supporting older adults through compassionate care, wellness activities, community connection, and practical support.",
    href: "/programs/tuko-pamoja",
  },
  {
    number: "02",
    title: "Mama na Mtoto",
    subtitle: "Maternal & Child Support",
    description:
      "Supporting mothers and children through community-centered initiatives focused on wellbeing, care, and healthy development.",
    href: "/programs/mama-na-mtoto",
  },
];

export default function Programs() {
  return (
    <section className="bg-slate-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
              Our Programs
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
              Initiatives designed around people and communities.
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-600">
              Our programs focus on practical areas where compassionate action
              can make a meaningful difference.
            </p>
          </div>

          <Link
            href="/programs"
            className="text-sm font-semibold text-[#0B1B3A] transition hover:text-[#D4AF37]"
          >
            View all programs →
          </Link>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {programs.map((program) => (
            <article
              key={program.href}
              className="group rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-slate-100 transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-10"
            >
              <div className="flex items-start justify-between">
                <span className="text-sm font-semibold text-[#D4AF37]">
                  {program.number}
                </span>

                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0B1B3A] text-lg text-white transition group-hover:bg-[#D4AF37] group-hover:text-[#0B1B3A]">
                  →
                </span>
              </div>

              <h3 className="mt-10 text-2xl font-bold text-[#0B1B3A]">
                {program.title}
              </h3>

              <p className="mt-1 text-sm font-semibold text-[#D4AF37]">
                {program.subtitle}
              </p>

              <p className="mt-5 max-w-lg text-base leading-7 text-slate-600">
                {program.description}
              </p>

              <Link
                href={program.href}
                className="mt-7 inline-flex text-sm font-semibold text-[#0B1B3A]"
              >
                Explore program
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