import Link from "next/link";

const channels = [
  {
    title: "About the Media Center",
    href: "/blog/editorial/about",
    description:
      "Understand the purpose, scope and evolving role of the MercyCare Media Center.",
  },
  {
    title: "Editorial Standards",
    href: "/blog/editorial/standards",
    description:
      "Explore the principles intended to guide responsible, clear and respectful editorial work.",
  },
  {
    title: "Contributors",
    href: "/blog/editorial/contributors",
    description:
      "A future directory for writers, interviewers, photographers and other contributors.",
  },
  {
    title: "Submit a Story",
    href: "/blog/editorial/submit-a-story",
    description:
      "Learn how future story ideas, community perspectives and other contributions may be submitted.",
  },
];

export default function BlogEditorialChannels() {
  return (
    <section className="bg-slate-50 px-6 py-16 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-violet-600">
            Editorial navigation
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Explore how the Media Center works.
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
