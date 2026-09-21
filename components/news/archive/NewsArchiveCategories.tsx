import Link from "next/link";

const categories = [
  {
    title: "Latest News",
    description: "Recent published MercyCare stories and developments.",
    href: "/news/latest",
  },
  {
    title: "Community News",
    description: "Stories connected to community work and engagement.",
    href: "/news/community",
  },
  {
    title: "Health & Wellness",
    description: "News and information focused on wellbeing and caregiving.",
    href: "/news/health-wellness",
  },
  {
    title: "MercyCare Updates",
    description: "Organizational developments and confirmed updates.",
    href: "/news/updates",
  },
  {
    title: "Announcements",
    description: "Formal notices and important public information.",
    href: "/news/announcements",
  },
  {
    title: "Media & Press",
    description: "Public media information and confirmed press materials.",
    href: "/news/media-press",
  },
];

export default function NewsArchiveCategories() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
            Browse by topic
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
            Find the kind of news you need.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <Link
              key={category.href}
              href={category.href}
              className="group rounded-[2rem] border border-slate-100 bg-slate-50 p-7 transition hover:border-[#D4AF37] hover:bg-white sm:p-8"
            >
              <div className="h-1.5 w-12 rounded-full bg-[#D4AF37]" />

              <h3 className="mt-6 text-xl font-bold text-[#0B1B3A]">
                {category.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                {category.description}
              </p>

              <span className="mt-6 inline-flex text-sm font-semibold text-[#0B1B3A] transition group-hover:text-[#D4AF37]">
                Explore category →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
