const categories = [
  {
    title: "Videos",
    description:
      "Video stories, conversations, explainers and visual coverage connected to MercyCare and its communities.",
    href: "/blog/media/videos",
  },
  {
    title: "Podcasts",
    description:
      "Audio conversations and future podcast series exploring care, wellbeing, family and community.",
    href: "/blog/media/podcasts",
  },
  {
    title: "Photo Stories",
    description:
      "Photography-led stories documenting people, places, moments and experiences.",
    href: "/blog/media/photo-stories",
  },
  {
    title: "Multimedia Features",
    description:
      "Stories combining writing, photography, audio, video and other media into one editorial experience.",
    href: "/blog/media/multimedia-features",
  },
];

export default function BlogMediaCategories() {
  return (
    <section className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-600">
            Media Channels
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Explore the media collection
          </h2>

          <p className="mt-4 leading-7 text-slate-600">
            Different formats can tell different parts of the same story.
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
