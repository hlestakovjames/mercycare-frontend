import Link from "next/link";

const ways = [
  {
    title: "Share a story idea",
    description:
      "Suggest a community story, experience, conversation or editorial idea for future consideration.",
    href: "/blog/editorial/submit-a-story",
    action: "Submit an idea",
  },
  {
    title: "Share a perspective",
    description:
      "Community members, caregivers, professionals and partners may contribute perspectives to relevant conversations.",
    href: "/blog/voices",
    action: "Explore Voices",
  },
  {
    title: "Explore community activities",
    description:
      "Discover opportunities to connect with MercyCare through activities and community-focused initiatives.",
    href: "/activities",
    action: "Explore Activities",
  },
  {
    title: "Explore events",
    description:
      "Follow MercyCare events and future opportunities to participate in community gatherings and conversations.",
    href: "/events",
    action: "Explore Events",
  },
];

export default function BlogGetInvolvedWays() {
  return (
    <section className="bg-slate-50 px-6 py-16 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-violet-600">
            Ways to participate
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Find the pathway that fits you.
          </h2>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {ways.map((way) => (
            <article
              key={way.title}
              className="rounded-3xl border border-slate-200 bg-white p-7"
            >
              <h3 className="text-xl font-semibold text-slate-900">
                {way.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                {way.description}
              </p>

              <Link
                href={way.href}
                className="mt-6 inline-flex rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                {way.action} →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
