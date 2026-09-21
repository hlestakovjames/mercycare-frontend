import Link from "next/link";

const channels = [
  {
    title: "Latest News",
    description:
      "Recent published stories, developments, and information from MercyCare.",
    href: "/news/latest",
  },
  {
    title: "Community News",
    description:
      "Stories connected to communities, engagement, partnerships, and local conversations.",
    href: "/news/community",
  },
  {
    title: "Health & Wellness News",
    description:
      "Responsible information and stories around wellbeing, caregiving, families, and seniors.",
    href: "/news/health-wellness",
  },
  {
    title: "MercyCare Updates",
    description:
      "Confirmed organizational, program, service, partnership, and community developments.",
    href: "/news/updates",
  },
  {
    title: "Announcements",
    description:
      "Formal notices and important public information requiring clear communication.",
    href: "/news/announcements",
  },
  {
    title: "Media & Press",
    description:
      "A future home for confirmed media coverage, press releases, statements, and media resources.",
    href: "/news/media-press",
  },
  {
    title: "News Archive",
    description:
      "A growing record of published MercyCare stories organized for future reference.",
    href: "/news/archive",
  },
  {
    title: "Get Involved",
    description:
      "Explore ways to connect with MercyCare's wider community work and initiatives.",
    href: "/news/get-involved",
  },
];

export default function NewsOverviewChannels() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
            Explore News
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
            Find the information you are looking for.
          </h2>

          <p className="mt-5 leading-7 text-slate-600">
            Each News channel serves a different purpose while remaining part
            of the wider MercyCare information ecosystem.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {channels.map((channel) => (
            <Link
              key={channel.href}
              href={channel.href}
              className="group rounded-[2rem] border border-slate-100 bg-slate-50 p-7 transition hover:-translate-y-1 hover:border-[#D4AF37] hover:bg-white"
            >
              <div className="h-1.5 w-12 rounded-full bg-[#D4AF37]" />

              <h3 className="mt-6 text-lg font-bold text-[#0B1B3A]">
                {channel.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                {channel.description}
              </p>

              <span className="mt-5 inline-flex text-sm font-semibold text-[#0B1B3A] transition group-hover:text-[#D4AF37]">
                Explore →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
