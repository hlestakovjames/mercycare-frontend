import Link from "next/link";

const newsItems = [
  {
    category: "Announcement",
    title: "MercyCare community initiatives",
    description:
      "Discover the work MercyCare is preparing to undertake with communities and partners.",
    date: "Coming soon",
  },
  {
    category: "Community",
    title: "Building stronger communities together",
    description:
      "Learn how community participation and meaningful partnerships can create lasting impact.",
    date: "Coming soon",
  },
  {
    category: "Update",
    title: "Follow our journey",
    description:
      "Stay connected with MercyCare as our programs, activities, and community work develop.",
    date: "Coming soon",
  },
];

export default function LatestNews() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
              News & Announcements
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
              Stay connected with MercyCare.
            </h2>
          </div>

          <Link
            href="/news"
            className="text-sm font-semibold text-[#0B1B3A] transition hover:text-[#D4AF37]"
          >
            View all news →
          </Link>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {newsItems.map((item) => (
            <article
              key={item.title}
              className="rounded-3xl border border-slate-100 bg-slate-50 p-7 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="rounded-full bg-[#0B1B3A]/5 px-3 py-1 text-xs font-semibold text-[#0B1B3A]">
                  {item.category}
                </span>

                <span className="text-xs text-slate-400">
                  {item.date}
                </span>
              </div>

              <h3 className="mt-7 text-xl font-bold text-[#0B1B3A]">
                {item.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                {item.description}
              </p>

              <Link
                href="/news"
                className="mt-6 inline-flex text-sm font-semibold text-[#0B1B3A] hover:text-[#D4AF37]"
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