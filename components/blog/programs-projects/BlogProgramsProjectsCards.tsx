import Link from "next/link";

const initiatives = [
  {
    title: "Tuko Pamoja",
    label: "Senior Wellness",
    description:
      "Explore stories, wellness conversations, community perspectives and updates connected to Tuko Pamoja.",
    href: "/blog/programs-projects/tuko-pamoja",
  },
  {
    title: "Mama na Mtoto",
    label: "Maternal & Child Wellbeing",
    description:
      "Discover editorial content around maternal wellbeing, child wellbeing, families and community experiences.",
    href: "/blog/programs-projects/mama-na-mtoto",
  },
  {
    title: "Other Initiatives",
    label: "Growing Collection",
    description:
      "A future space for stories and editorial coverage connected to additional MercyCare programmes and projects.",
    href: "/blog/programs-projects/other-initiatives",
  },
];

export default function BlogProgramsProjectsCards() {
  return (
    <section className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#1597C9]">
            Explore initiatives
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#0B1B3A] sm:text-4xl">
            Follow the stories behind the work.
          </h2>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {initiatives.map((initiative) => (
            <Link
              key={initiative.href}
              href={initiative.href}
              className="group rounded-3xl bg-white p-7 ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#6757D9]">
                {initiative.label}
              </p>

              <h3 className="mt-3 text-2xl font-semibold text-[#0B1B3A]">
                {initiative.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                {initiative.description}
              </p>

              <span className="mt-6 inline-flex text-sm font-semibold text-[#1597C9]">
                Explore collection →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
