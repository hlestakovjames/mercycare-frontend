import Link from "next/link";

const topics = [
  {
    title: "Healthy Living",
    description:
      "Editorial conversations about everyday habits, wellbeing and maintaining a healthy lifestyle.",
    href: "/blog/care-wellness/healthy-living",
  },
  {
    title: "Senior Wellness",
    description:
      "Stories and perspectives around ageing, connection, independence, dignity and wellbeing.",
    href: "/blog/care-wellness/senior-wellness",
  },
  {
    title: "Caregiving",
    description:
      "A deeper editorial hub covering family caregiving, caregiver wellbeing, practical care and resources.",
    href: "/blog/care-wellness/caregiving",
  },
  {
    title: "Home-Based Care",
    description:
      "Perspectives on supporting wellbeing and care within familiar home and family environments.",
    href: "/blog/care-wellness/home-based-care",
  },
  {
    title: "Palliative & Comfort Care",
    description:
      "Thoughtful conversations about comfort, dignity, supportive care and the experiences of families.",
    href: "/blog/care-wellness/palliative-comfort-care",
  },
];

export default function BlogCareWellnessTopics() {
  return (
    <section className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#1597C9]">
            Explore the topics
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#0B1B3A] sm:text-4xl">
            Go deeper into the conversations around care.
          </h2>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {topics.map((topic) => (
            <Link
              key={topic.href}
              href={topic.href}
              className="group rounded-3xl bg-white p-7 ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <p className="text-xl font-semibold text-[#0B1B3A]">
                {topic.title}
              </p>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                {topic.description}
              </p>

              <span className="mt-6 inline-flex text-sm font-semibold text-[#1597C9]">
                Explore topic →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
