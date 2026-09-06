const updates = [
  {
    category: "Project Update",
    title: "Building stronger support for mothers and children",
    description:
      "MercyCare continues to develop community-centered approaches that connect mothers, children, families and local support networks.",
  },
  {
    category: "Community",
    title: "Growing awareness around maternal and child wellbeing",
    description:
      "Community engagement creates opportunities for families to access practical information and better understand available health and support resources.",
  },
  {
    category: "Coming Soon",
    title: "More Mama na Mtoto activities will be shared here",
    description:
      "As the project grows, this space will feature verified updates, stories, milestones, announcements and highlights from project activities.",
  },
];

export default function ProjectUpdates() {
  return (
    <section className="bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
              Project Updates
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
              Follow the journey
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
              Follow the latest developments, community stories and
              milestones from the Mama na Mtoto project.
            </p>
          </div>

          <a
            href="/news"
            className="inline-flex w-fit items-center text-sm font-semibold text-[#0B1B3A] transition hover:text-[#D4AF37]"
          >
            View MercyCare News
            <span className="ml-2" aria-hidden="true">
              →
            </span>
          </a>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {updates.map((update) => (
            <article
              key={update.title}
              className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm"
            >
              <span className="inline-flex rounded-full bg-[#D4AF37]/15 px-3 py-1 text-xs font-semibold text-[#0B1B3A]">
                {update.category}
              </span>

              <h3 className="mt-5 text-xl font-semibold leading-7 text-[#0B1B3A]">
                {update.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                {update.description}
              </p>

              <a
                href="/news"
                className="mt-6 inline-flex text-sm font-semibold text-[#0B1B3A] hover:text-[#D4AF37]"
              >
                Read more
                <span className="ml-2" aria-hidden="true">
                  →
                </span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}