import Link from "next/link";

const stories = [
  {
    title: "Introducing Tuko Pamoja — Senior Wellness",
    description:
      "Explore MercyCare's senior wellness initiative and its focus on connection, dignity, wellness, and community support.",
    href: "/news/introducing-tuko-pamoja",
  },
  {
    title: "Introducing Mama na Mtoto",
    description:
      "Learn about MercyCare's initiative focused on mothers and children through compassionate, community-centered support.",
    href: "/news/introducing-mama-na-mtoto",
  },
];

export default function HealthWellnessNewsStories() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
            Related stories
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
            Explore current wellness-related updates.
          </h2>
        </div>

        <div className="mt-12 grid gap-7 md:grid-cols-2">
          {stories.map((story) => (
            <article
              key={story.href}
              className="rounded-[2rem] border border-slate-100 bg-slate-50 p-8 transition hover:-translate-y-1 hover:shadow-lg sm:p-10"
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-[#D4AF37]">
                Health & Wellness
              </p>

              <h3 className="mt-4 text-2xl font-bold leading-tight text-[#0B1B3A]">
                {story.title}
              </h3>

              <p className="mt-5 leading-7 text-slate-600">
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
