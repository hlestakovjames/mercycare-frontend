import Link from "next/link";

const stories = [
  {
    category: "Programs & Projects",
    title: "Introducing Mama na Mtoto",
    description:
      "An introduction to the Mama na Mtoto initiative and the areas of maternal and child wellbeing it seeks to support.",
    href: "/news/introducing-mama-na-mtoto",
  },
  {
    category: "MercyCare",
    title: "MercyCare prepares for community launch",
    description:
      "A look at the preparation behind MercyCare's community-facing work and the journey toward launch.",
    href: "/news/mercycare-prepares-for-community-launch",
  },
];

export default function BlogStoriesLatest() {
  return (
    <section className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#1597C9]">
              More to explore
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#0B1B3A]">
              Stories already in the MercyCare collection.
            </h2>
          </div>

          <Link
            href="/blog/featured"
            className="text-sm font-semibold text-[#1597C9]"
          >
            View featured stories →
          </Link>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {stories.map((story) => (
            <article
              key={story.href}
              className="rounded-2xl border border-slate-200 bg-white p-7"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#1597C9]">
                {story.category}
              </p>

              <h3 className="mt-3 text-2xl font-semibold tracking-tight text-[#0B1B3A]">
                {story.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                {story.description}
              </p>

              <Link
                href={story.href}
                className="mt-6 inline-flex text-sm font-semibold text-[#0B1B3A] hover:text-[#1597C9]"
              >
                Read more →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
