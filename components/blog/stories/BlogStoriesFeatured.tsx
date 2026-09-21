import Link from "next/link";

const featuredStory = {
  category: "Programs & Projects",
  title: "Introducing Tuko Pamoja",
  description:
    "Discover the thinking behind Tuko Pamoja and its focus on senior wellness, connection and dignity.",
  href: "/news/introducing-tuko-pamoja",
};

export default function BlogStoriesFeatured() {
  return (
    <section className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-center">
          <div className="overflow-hidden rounded-3xl bg-[#0B1B3A] p-8 sm:p-10 lg:p-12">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-cyan-300">
              Featured story
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              {featuredStory.title}
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-200">
              {featuredStory.description}
            </p>

            <Link
              href={featuredStory.href}
              className="mt-8 inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#0B1B3A] transition hover:bg-slate-100"
            >
              Read the story
            </Link>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#1597C9]">
              Editorial focus
            </p>

            <h3 className="mt-3 text-2xl font-semibold tracking-tight text-[#0B1B3A]">
              Stories with context, dignity and purpose.
            </h3>

            <p className="mt-4 leading-7 text-slate-600">
              Featured stories will highlight substantial pieces that help
              readers understand the people, ideas and initiatives behind
              MercyCare&apos;s work.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
