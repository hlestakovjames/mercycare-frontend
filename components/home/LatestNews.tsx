import Link from "next/link";
import { ArrowRight, Megaphone } from "lucide-react";

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
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#0B1B3A]/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#1597c9]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#1597c9]" />
              News & Announcements
            </div>

            <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-[#0B1B3A] sm:text-4xl lg:text-5xl">
              Stay connected with MercyCare.
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600">
              Follow our latest updates, community stories, announcements, and
              developments.
            </p>
          </div>

          <Link
            href="/news"
            className="inline-flex shrink-0 items-center gap-2 rounded-full border border-[#0B1B3A] bg-white px-5 py-3 text-sm font-bold text-[#0B1B3A] transition hover:bg-[#0B1B3A] hover:text-white focus:outline-none focus:ring-4 focus:ring-[#1597c9]/20"
          >
            View all news
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {newsItems.map((item) => (
            <article
              key={item.title}
              className="group rounded-[1.75rem] border border-slate-100 bg-slate-50 p-7 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl hover:ring-1 hover:ring-slate-100"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="inline-flex items-center gap-2 rounded-full bg-[#0B1B3A]/5 px-3 py-1.5 text-xs font-bold text-[#0B1B3A]">
                  <Megaphone className="h-3.5 w-3.5 text-[#1597c9]" aria-hidden="true" />
                  {item.category}
                </span>

                <span className="text-xs font-medium text-slate-400">
                  {item.date}
                </span>
              </div>

              <h3 className="mt-7 text-xl font-bold leading-snug text-[#0B1B3A]">
                {item.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                {item.description}
              </p>

              <Link
                href="/news"
                className="mt-7 inline-flex min-h-10 items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-bold text-[#0B1B3A] transition hover:border-[#0B1B3A] hover:bg-[#0B1B3A] hover:text-white focus:outline-none focus:ring-4 focus:ring-[#1597c9]/20"
              >
                Read more
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
