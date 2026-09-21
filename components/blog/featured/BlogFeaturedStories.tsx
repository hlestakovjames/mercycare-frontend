import Link from "next/link";

const stories = [
  {
    category: "Senior Wellness",
    title: "Introducing Tuko Pamoja — Senior Wellness",
    description:
      "Explore the thinking behind MercyCare's senior wellness initiative and its focus on dignity, connection, and community.",
    href: "/news/introducing-tuko-pamoja",
    featured: true,
  },
  {
    category: "Family & Community",
    title: "Introducing Mama na Mtoto",
    description:
      "Discover the mother and child-focused initiative and the wider conversation around family wellbeing.",
    href: "/news/introducing-mama-na-mtoto",
    featured: false,
  },
  {
    category: "MercyCare",
    title: "MercyCare prepares for community launch",
    description:
      "Follow MercyCare's journey as it prepares to deepen its community-centered work.",
    href: "/news/mercycare-prepares-for-community-launch",
    featured: false,
  },
];

export default function BlogFeaturedStories() {
  const featured = stories.find((story) => story.featured);
  const secondary = stories.filter((story) => !story.featured);

  return (
    <section className="bg-slate-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-7 lg:grid-cols-[1.35fr_0.65fr]">
          {featured && (
            <Link
              href={featured.href}
              className="group flex min-h-[28rem] flex-col justify-end overflow-hidden rounded-[2.5rem] bg-[#0B1B3A] p-8 text-white transition hover:-translate-y-1 sm:p-10 lg:p-12"
            >
              <div className="max-w-2xl">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#D4AF37]">
                  {featured.category}
                </p>

                <h3 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">
                  {featured.title}
                </h3>

                <p className="mt-5 text-base leading-7 text-slate-300">
                  {featured.description}
                </p>

                <span className="mt-7 inline-flex text-sm font-semibold text-[#D4AF37]">
                  Read featured story →
                </span>
              </div>
            </Link>
          )}

          <div className="grid gap-7">
            {secondary.map((story) => (
              <Link
                key={story.href}
                href={story.href}
                className="group rounded-[2rem] border border-slate-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-[#D4AF37] sm:p-8"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#D4AF37]">
                  {story.category}
                </p>

                <h3 className="mt-4 text-xl font-bold leading-tight text-[#0B1B3A]">
                  {story.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {story.description}
                </p>

                <span className="mt-6 inline-flex text-sm font-semibold text-[#0B1B3A] transition group-hover:text-[#D4AF37]">
                  Read story →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
