import Link from "next/link";

const channels = [
  {
    title: "By Year",
    href: "/blog/archive/by-year",
    description:
      "Browse the Media Center chronologically as its editorial library grows.",
  },
  {
    title: "By Category",
    href: "/blog/archive/by-category",
    description:
      "Explore stories through editorial formats such as stories, interviews, features, media and resources.",
  },
  {
    title: "By Topic",
    href: "/blog/archive/by-topic",
    description:
      "Discover content around care, wellness, family, community, caregiving and programmes.",
  },
  {
    title: "Search",
    href: "/blog/archive/search",
    description:
      "Find content using titles, topics, categories, tags and other future searchable fields.",
  },
];

export default function BlogArchiveChannels() {
  return (
    <section className="bg-slate-50 px-6 py-16 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-violet-600">
            Explore the archive
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Different paths to the same library.
          </h2>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {channels.map((channel) => (
            <Link
              key={channel.href}
              href={channel.href}
              className="group rounded-3xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:border-cyan-200 hover:shadow-lg"
            >
              <h3 className="text-xl font-semibold text-slate-900 group-hover:text-cyan-700">
                {channel.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                {channel.description}
              </p>

              <span className="mt-6 inline-flex text-sm font-semibold text-slate-900">
                Explore →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
