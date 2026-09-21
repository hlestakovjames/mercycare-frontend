const categories = [
  {
    title: "Long Reads",
    description:
      "Extended editorial pieces that give complex subjects the time and context they deserve.",
    href: "/blog/features/long-reads",
  },
  {
    title: "Special Features",
    description:
      "Themed editorial collections built around important moments, subjects or conversations.",
    href: "/blog/features/special-features",
  },
  {
    title: "Field Stories",
    description:
      "Stories shaped by experiences, observations and perspectives from communities and places connected to the work.",
    href: "/blog/features/field-stories",
  },
  {
    title: "Photo Features",
    description:
      "Image-led narratives using photography to document people, places, moments and community experiences.",
    href: "/blog/features/photo-features",
  },
];

export default function BlogFeaturesCategories() {
  return (
    <section className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-violet-600">
            Feature Collections
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Explore the features
          </h2>

          <p className="mt-4 leading-7 text-slate-600">
            Different formats create different ways to understand the people,
            ideas and experiences behind the work.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {categories.map((category) => (
            <a
              key={category.href}
              href={category.href}
              className="group rounded-2xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:border-violet-200 hover:shadow-lg"
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
                  className="mt-1 text-xl text-violet-600 transition group-hover:translate-x-1"
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
