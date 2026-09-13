import Link from "next/link";

const projects = [
  {
    number: "01",
    title: "Tuko Pamoja",
    category: "Senior Wellness",
    description:
      "A community-focused initiative connected to senior wellness, dignity, social support, and the wellbeing of older adults.",
    href: "/projects/tuko-pamoja",
  },
  {
    number: "02",
    title: "Mama na Mtoto",
    category: "Maternal & Child Wellbeing",
    description:
      "A community-focused initiative connected to mothers, children, families, and maternal and child wellbeing.",
    href: "/projects/mama-na-mtoto",
  },
];

export default function ProjectDirectoryCards() {
  return (
    <section className="bg-slate-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
            Current Projects
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
            Explore our projects
          </h2>

          <p className="mt-6 text-base leading-8 text-slate-600">
            Each project has its own purpose and implementation focus while
            remaining connected to MercyCare's wider community health and
            wellbeing work.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.number}
              className="flex flex-col rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-shadow hover:shadow-md lg:p-10"
            >
              <div className="flex items-start justify-between gap-6">
                <span className="text-sm font-bold tracking-[0.15em] text-[#D4AF37]">
                  {project.number}
                </span>

                <span className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-600">
                  {project.category}
                </span>
              </div>

              <h3 className="mt-8 text-2xl font-bold text-[#0B1B3A]">
                {project.title}
              </h3>

              <p className="mt-4 flex-1 text-base leading-8 text-slate-600">
                {project.description}
              </p>

              <div className="mt-8">
                <Link
                  href={project.href}
                  className="inline-flex rounded-full bg-[#0B1B3A] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#162d5c]"
                >
                  Explore Project →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
