import Link from "next/link";

const projects = [
  {
    title: "Tuko Pamoja — Senior Wellness",
    description:
      "A community-centered initiative promoting healthier ageing, dignity, companionship and improved wellbeing for older adults.",
    href: "/projects/tuko-pamoja",
  },
  {
    title: "Mama na Mtoto",
    description:
      "Supporting mothers and children through accessible, compassionate and community-centered maternal and child wellbeing initiatives.",
    href: "/projects/mama-na-mtoto",
  },
  {
    title: "Other Projects",
    description:
      "Explore additional MercyCare projects as they develop across communities and areas of need.",
    href: "/projects",
  },
];

export default function ProjectDirectory() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
            Project Directory
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
            Projects creating lasting impact
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-600">
            Explore MercyCare's community projects and discover the people,
            activities and initiatives behind each one.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="flex flex-col rounded-2xl border border-slate-200 bg-slate-50 p-7 transition hover:-translate-y-1 hover:bg-white hover:shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#D4AF37] text-[#0B1B3A]">
                <span className="text-lg font-bold">+</span>
              </div>

              <h3 className="mt-6 text-xl font-semibold text-[#0B1B3A]">
                {project.title}
              </h3>

              <p className="mt-4 flex-1 text-sm leading-7 text-slate-600">
                {project.description}
              </p>

              <Link
                href={project.href}
                className="mt-7 inline-flex w-fit text-sm font-semibold text-[#0B1B3A] transition hover:text-[#D4AF37]"
              >
                Explore Project →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}