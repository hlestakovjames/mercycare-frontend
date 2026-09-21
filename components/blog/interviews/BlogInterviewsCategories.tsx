const categories = [
  {
    title: "Community Conversations",
    description:
      "Conversations about lived experience, community priorities, connection and wellbeing.",
    href: "/blog/interviews/community-conversations",
  },
  {
    title: "Care Conversations",
    description:
      "Open conversations around caregiving, family support, dignity and everyday care experiences.",
    href: "/blog/interviews/care-conversations",
  },
  {
    title: "Expert Conversations",
    description:
      "Structured conversations with relevant professionals sharing perspectives and knowledge.",
    href: "/blog/interviews/expert-conversations",
  },
  {
    title: "Partner Conversations",
    description:
      "Conversations with people and organisations working alongside MercyCare and communities.",
    href: "/blog/interviews/partner-conversations",
  },
];

export default function BlogInterviewsCategories() {
  return (
    <section className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-600">
            Conversation Channels
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Explore the conversations
          </h2>
          <p className="mt-4 leading-7 text-slate-600">
            Different conversations create space for different experiences,
            questions and perspectives.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {categories.map((category) => (
            <a
              key={category.href}
              href={category.href}
              className="group rounded-2xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:border-cyan-200 hover:shadow-lg"
            >
              <div className="flex items-start justify-between gap-6">
                <div>
                  <h3 className="text-xl font-semibold text-slate-900">
                    {category.title}
                  </h3>
                  <p className="mt-3 leading-7 text-slate-600">
                    {category.description}
                  </p>
                </div>

                <span
                  aria-hidden="true"
                  className="mt-1 text-xl text-cyan-600 transition group-hover:translate-x-1"
                >
                  →
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
