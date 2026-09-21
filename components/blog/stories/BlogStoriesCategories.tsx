import Link from "next/link";

const categories = [
  {
    title: "Care & Wellness",
    description:
      "Stories exploring care, wellbeing, healthy living and experiences around supporting others.",
    href: "/blog/care-wellness",
  },
  {
    title: "Family & Community",
    description:
      "Perspectives on families, communities, connection and the wider social dimensions of wellbeing.",
    href: "/blog/family-community",
  },
  {
    title: "Programs & Projects",
    description:
      "Editorial stories connected to MercyCare programmes, projects and community initiatives.",
    href: "/blog/programs-projects",
  },
  {
    title: "Community Stories",
    description:
      "People-centred stories that create space for community experiences and perspectives.",
    href: "/blog/voices/community",
  },
];

export default function BlogStoriesCategories() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#1597C9]">
            Explore stories
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#0B1B3A]">
            Find stories by perspective.
          </h2>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {categories.map((category) => (
            <Link
              key={category.href}
              href={category.href}
              className="group rounded-2xl border border-slate-200 bg-white p-7 transition hover:-translate-y-0.5 hover:border-cyan-200 hover:shadow-lg"
            >
              <h3 className="text-xl font-semibold text-[#0B1B3A] group-hover:text-[#1597C9]">
                {category.title}
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                {category.description}
              </p>

              <span className="mt-5 inline-flex text-sm font-semibold text-[#1597C9]">
                Explore stories →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
