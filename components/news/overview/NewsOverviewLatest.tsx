import Link from "next/link";

const stories = [
  {
    category: "Community",
    title: "MercyCare prepares for community launch",
    description:
      "An update on MercyCare's preparations for the next stage of its community-centered work.",
    href: "/news/mercycare-prepares-for-community-launch",
  },
  {
    category: "Senior Wellness",
    title: "Introducing Tuko Pamoja — Senior Wellness",
    description:
      "An introduction to MercyCare's senior wellness initiative and its community focus.",
    href: "/news/introducing-tuko-pamoja",
  },
  {
    category: "Family Wellbeing",
    title: "Introducing Mama na Mtoto",
    description:
      "An introduction to MercyCare's mother and child-focused initiative.",
    href: "/news/introducing-mama-na-mtoto",
  },
];

export default function NewsOverviewLatest() {
  return (
    <section className="bg-slate-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
              Latest stories
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
              What is happening at MercyCare.
            </h2>

            <p className="mt-5 leading-7 text-slate-600">
              Explore the latest published stories and developments.
            </p>
          </div>

          <Link
            href="/news/latest"
            className="text-sm font-semibold text-[#0B1B3A] transition hover:text-[#D4AF37]"
          >
            View all latest news →
          </Link>
        </div>

        <div className="mt-12 grid gap-7 md:grid-cols-3">
          {stories.map((story) => (
            <article
              key={story.href}
              className="flex flex-col rounded-[2rem] border border-slate-100 bg-white p-7 shadow-sm sm:p-8"
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-[#D4AF37]">
                {story.category}
              </p>

              <h3 className="mt-4 text-xl font-bold leading-tight text-[#0B1B3A]">
                {story.title}
              </h3>

              <p className="mt-4 flex-1 text-sm leading-7 text-slate-600">
                {story.description}
              </p>

              <Link
                href={story.href}
                className="mt-7 inline-flex text-sm font-semibold text-[#0B1B3A] transition hover:text-[#D4AF37]"
              >
                Read story →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
