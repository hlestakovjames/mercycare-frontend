import Link from "next/link";

const categories = [
  {
    title: "Care Guides",
    href: "/blog/resources/care-guides",
    description:
      "Practical perspectives on care at home, support, planning and everyday care conversations.",
  },
  {
    title: "Wellness Guides",
    href: "/blog/resources/wellness-guides",
    description:
      "Resources exploring everyday wellbeing, healthy living, connection and senior wellness.",
  },
  {
    title: "Family Resources",
    href: "/blog/resources/family-resources",
    description:
      "Information and perspectives around family wellbeing, parenting, relationships and support.",
  },
  {
    title: "Caregiver Resources",
    href: "/blog/resources/caregiver-resources",
    description:
      "Resources for people supporting loved ones, including everyday caregiving and caregiver wellbeing.",
  },
  {
    title: "Downloadable Resources",
    href: "/blog/resources/downloadable-resources",
    description:
      "A future library for guides, checklists and other downloadable MercyCare resources.",
  },
];

export default function BlogResourcesCategories() {
  return (
    <section className="bg-slate-50 px-6 py-16 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-600">
            Browse the library
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Find the kind of resource you need.
          </h2>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <Link
              key={category.href}
              href={category.href}
              className="group rounded-3xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:border-cyan-200 hover:shadow-lg"
            >
              <span className="text-sm font-semibold text-cyan-600">
                Resource collection
              </span>

              <h3 className="mt-3 text-xl font-semibold text-slate-900 group-hover:text-cyan-700">
                {category.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                {category.description}
              </p>

              <span className="mt-6 inline-flex text-sm font-semibold text-slate-900">
                Explore collection →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
