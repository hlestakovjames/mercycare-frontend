import Link from "next/link";

const latestNews = [
  {
    title: "MercyCare prepares for community launch",
    excerpt:
      "MercyCare is preparing for the next stage of its community-centered work, bringing together volunteers, partners, and supporters around a shared vision of compassionate community support.",
    date: "2026",
    category: "MercyCare Updates",
    slug: "mercycare-prepares-for-community-launch",
  },
  {
    title: "Introducing Tuko Pamoja — Senior Wellness",
    excerpt:
      "Tuko Pamoja is MercyCare's senior wellness initiative focused on connection, dignity, wellness, and community support for older adults.",
    date: "2026",
    category: "Programs",
    slug: "introducing-tuko-pamoja",
  },
  {
    title: "Introducing Mama na Mtoto",
    excerpt:
      "Mama na Mtoto focuses on supporting mothers and children through compassionate care, community engagement, education, and practical support initiatives.",
    date: "2026",
    category: "Programs",
    slug: "introducing-mama-na-mtoto",
  },
];

export default function LatestNewsList() {
  return (
    <section className="bg-slate-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-12 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
            Recent updates
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
            The latest from MercyCare
          </h2>

          <p className="mt-5 leading-7 text-slate-600">
            A growing collection of verified MercyCare updates, program
            announcements, and stories from our community-centered work.
          </p>
        </div>

        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {latestNews.map((item) => (
            <article
              key={item.slug}
              className="group overflow-hidden rounded-[2rem] border border-slate-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="aspect-[16/9] bg-[#0B1B3A]">
                <div className="flex h-full items-center justify-center px-6 text-center">
                  <span className="text-3xl font-bold text-[#D4AF37]/30">
                    MercyCare
                  </span>
                </div>
              </div>

              <div className="p-7 sm:p-8">
                <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-wider">
                  <span className="text-[#D4AF37]">{item.category}</span>
                  <span className="text-slate-300">•</span>
                  <span className="text-slate-500">{item.date}</span>
                </div>

                <h3 className="mt-4 text-xl font-bold leading-tight text-[#0B1B3A] sm:text-2xl">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {item.excerpt}
                </p>

                <Link
                  href={`/news/${item.slug}`}
                  className="mt-6 inline-flex items-center text-sm font-semibold text-[#0B1B3A] transition hover:text-[#D4AF37]"
                >
                  Read story
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
